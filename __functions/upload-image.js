const AWS = require("aws-sdk");
const { Buffer } = require("buffer");
const storage = require('./storage.js')
var slugify = require('slugify')
const build = require('./build')
const sharp = require('sharp');

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

  
  
  
  const resize = async function(imgBuffer, width) {
     return await sharp(imgBuffer)
      .resize(width)
      .toFormat('jpeg') // convert to JPEG
      .jpeg({ quality: 80 }) // compress it with a quality level of 80 out of 100
      .toBuffer();
  }

  const upload = async(body, filename) => {

    const Bucket = 'simonmcmanus-notes';
    const params = {
      Bucket,
      Key: filename,
      Body: body,
      ContentType:'image/png',
      ACL: 'public-read', 
    };
    return await s3.upload(params).promise();

  }
  try {
    // Netlify passes the raw base64 body by default
    const body = Buffer.from(event.body, event.isBase64Encoded ? "base64" : "utf8");
    

    const fileKey = `${urlSafe(event.headers["speaker"] + '-' + event.headers["title"])}-${Date.now()}`;

    const filePath = (size) => {
      if(size) {
        return `${fileKey}-${size}.jpg`;
      }
      return `${fileKey}.jpg`;

    }
    await upload(body, filePath());
    await upload(await resize(body, 200), filePath(200))
    await upload(await resize(body, 500), filePath(500))
    const BASE_URL = 'https://simonmcmanus.com/note/';
    const url = `${BASE_URL}${fileKey}`;

    const note = {
      created: new Date(),
      images: {
        original: `${url}${filePath()}`,
        small: `${url}${filePath(200)}`,
        medium: `${url}${filePath(500)}`
      },
      title: event.headers["title"],
      tags: event.headers["tags"],
      ev: event.headers["event"],
      speaker: event.headers["speaker"]
    };
    console.log('note', note)

    notes.push(note)
    await storage.put('notes.json', notes)
    await build()
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Upload successful",
        key: `${url}${filePath()}`,
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
