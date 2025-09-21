const AWS = require("aws-sdk");
const { Buffer } = require("buffer");
const storage = require('./storage.js')

const s3 = new AWS.S3({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});



exports.handler = async (event, context) => {
console.log(1)
      if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return { statusCode: 404 }
    }
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }
  console.log(2)

  const notes = await storage.get('notes.json')
  console.log(3)
  console.log('notes', notes)
  console.log(4)
  
  try {
    // Netlify passes the raw base64 body by default
    const body = Buffer.from(event.body, event.isBase64Encoded ? "base64" : "utf8");
    const contentType = event.headers["content-type"] || event.headers["Content-Type"] || "image/jpeg";
    const filename = `upload-${Date.now()}.jpg`;

    const Bucket = 'netlify-files';
    const params = {
      Bucket,
      Key: filename,
      Body: body,
      ContentType: contentType,
      ACL: 'public-read', 
    };

    const response = await s3.upload(params).promise();
    const url = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`


    const note = {
      created: new Date(),
      image: 'https://netlify-files.s3.amazonaws.com/upload-1758437037577.jpg',
      ev: 'FFConf 2025',
      speaker: 'Asim Hussain',
      tags: 'idiot, ffconf',
      url
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
