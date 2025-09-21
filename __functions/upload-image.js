const AWS = require("aws-sdk");
const { Buffer } = require("buffer");
const storage = require('./storage.js')
var slugify = require('slugify')
const build = require('./build')

const s3 = new AWS.S3({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

const urlSafe = (string) => { // copied into the file as the original is not inthe functions folder 
    const lowerCaseString = string.toLowerCase().trim()
    const slug = slugify(lowerCaseString)
        // do a trim
    return slug.replace(/\./g, '')
}



exports.handler = async (event, context) => {

  if (event.headers['x-api-key'] !== process.env.API_KEY) {
      console.log('no/invalid api key')
      return { statusCode: 404 }
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }


  const notes = await storage.get('notes.json')

  
  try {
    // Netlify passes the raw base64 body by default
    const body = Buffer.from(event.body, event.isBase64Encoded ? "base64" : "utf8");
    const contentType = event.headers["content-type"] || event.headers["Content-Type"] ||  "image/jpeg" ;
    const filename = `${urlSafe(event.headers["speaker"] + '-' + event.headers["title"])}-${Date.now()}.jpg`;

    const Bucket = 'simonmcmanus-notes';
    const params = {
      Bucket,
      Key: filename,
      Body: body,
      ContentType:contentType,
      ACL: 'public-read', 
    };

    const response = await s3.upload(params).promise();
    //const url = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`
    const url = `https://simonmcmanus.com/note/${filename}`;

    const note = {
      created: new Date(),
      image: url,
      title: event.headers["title"],
      tags: event.headers["tags"],
      ev: event.headers["event"],
      speaker: event.headers["speaker"]
      
    }
    console.log('note', note)

    notes.push(note)
    await storage.put('notes.json', notes)
    await build()
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
