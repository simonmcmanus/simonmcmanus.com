const AWS = require("aws-sdk");
const { Buffer } = require("buffer");
const storage = require('./storage.js')

const s3 = new AWS.S3({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});



exports.handler = async (event, context) => {
console.log(1)

console.log(event.headers['x-api-key'],event.httpMethod )
      if (event.headers['x-api-key'] !== process.env.API_KEY) {
        console.log('no/invalid api key')
        return { statusCode: 404 }
    }
    console.log('1.2')
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }
  console.log(2)

  const notes = await storage.get('notes.json')

  
  try {
    // Netlify passes the raw base64 body by default
    const body = Buffer.from(event.body, event.isBase64Encoded ? "base64" : "utf8");
    const contentType = event.headers["content-type"] || event.headers["Content-Type"] ||  "image/jpeg" ;
    const filename = `upload-${Date.now()}.jpg`;

    const Bucket = 'netlify-files';
    const params = {
      Bucket,
      Key: filename,
      Body: body,
      ContentType:contentType,
      ACL: 'public-read', 
    };

    const response = await s3.upload(params).promise();
    console.log(response, response.Location);
    //const url = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`
    const url = response.Location;

    const note = {
      created: new Date(),
      image: url,
      ev: 'FFConf 2025',
      speaker: 'Asim Hussain',
      tags: 'idiot, ffconf',
      
    }
    console.log('note', note)

    notes.push(note)
    await storage.put('notes.json', notes)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Upload successful",
        key: filename,
        url,
      }),
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Upload failed" }),
    };
  }
};
