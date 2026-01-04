import { Buffer } from "buffer";
import * as storage from './storage.js';
import slugify from 'slugify';
import build from './build';
import sharp from 'sharp';
const upload = storage.upload

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



export default async function handler(event, context) {

  if (event.headers['x-api-key'] !== process.env.API_KEY) {
      console.log('no/invalid api key')
      return Response('', { status: 404 })
  }

  if (event.httpMethod !== "POST") {
    return new Response.json({ error: "Method not allowed" }, { status: 405 });

  }


  const notes = await storage.get('notes.json')

  
  
  
  const resize = async function(imgBuffer, width) {
     return await sharp(imgBuffer)
      .resize(width)
      .toFormat('jpeg') // convert to JPEG
      .jpeg({ quality: 80 }) // compress it with a quality level of 80 out of 100
      .toBuffer();
  }

 
  try {
    // Netlify passes the raw base64 body by default
    const body = Buffer.from(event.body, event.isBase64Encoded ? "base64" : "utf8");
    

    const fileKey = `${urlSafe(event.headers["speaker"] + '-' + event.headers["title"])}-${Date.now()}`;

    const filePath = (size) => {
      if(size) {
        return `${fileKey}/${size}.jpg`;
      }
      return `${fileKey}/original.jpg`;

    }
    await upload(body, filePath());
    await upload(await resize(body, 200), filePath(200))
    await upload(await resize(body, 500), filePath(500))
    const BASE_URL = 'https://simonmcmanus.com/note/';
    const url = `${BASE_URL}${fileKey}`;

    const note = {
      created: new Date(),
      images: {
        original: `${BASE_URL}${filePath()}`,
        small: `${BASE_URL}${filePath(200)}`,
        medium: `${BASE_URL}${filePath(500)}`
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
    return new Response.json({ message: "Upload successful", key: `${url}${filePath()}`, url }, { status: 200 });

  } catch (error) {
    console.error("Upload error:", error);

    return new Response.json({ error: "Upload failed" }, { status: 500 });
  }
};
