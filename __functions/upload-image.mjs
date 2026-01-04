import { Buffer } from "buffer";
import * as storage from './storage.js';
import slugify from 'slugify';
import build from './build.js';
import sharp from 'sharp';
const upload = storage.upload



const urlSafe = (string) => { // copied into the file as the original is not inthe functions folder 
    const lowerCaseString = string.toLowerCase().trim()
    const slug = slugify(lowerCaseString)
        // do a trim
    return slug.replace(/\./g, '')
}



export default async function handler(event, context) {

  if (event.headers.get('x-api-key') !== process.env.API_KEY) {
      console.log('no/invalid api key')
      return new Response('', { status: 404 })
  }

  if (event.method !== "POST") {

    return new Response(JSON.stringify({ error: "Method not allowed" }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });

  }
  const notes = await storage.get('notes.json', context)
  const resize = async function(imgBuffer, width) {
     return await sharp(imgBuffer)
      .resize(width)
      .toFormat('jpeg') // convert to JPEG
      .jpeg({ quality: 80 }) // compress it with a quality level of 80 out of 100
      .toBuffer();
  }
 
  try {
    // Get binary data from Request object
    const arrayBuffer = await event.arrayBuffer();
    const body = Buffer.from(arrayBuffer);

    const fileKey = `${urlSafe(event.headers.get("speaker") + '-' + event.headers.get("title"))}-${Date.now()}`;
    const filePath = (size) => {
      if(size) {
        return `${fileKey}/${size}.jpg`;
      }
      return `${fileKey}/original.jpg`;

    }
    await upload(body, filePath(), undefined, context);
    await upload(await resize(body, 200), filePath(200), undefined, context)
    await upload(await resize(body, 500), filePath(500), undefined, context)
    const BASE_URL = 'https://simonmcmanus.com/note/';
    const url = `${BASE_URL}${fileKey}`;
    const note = {
      created: new Date(),
      images: {
        original: `${BASE_URL}${filePath()}`,
        small: `${BASE_URL}${filePath(200)}`,
        medium: `${BASE_URL}${filePath(500)}`
      },
      title: event.headers.get("title"),
      tags: event.headers.get("tags"),
      ev: event.headers.get("event"),
      speaker: event.headers.get("speaker")
    };

    notes.push(note)
    await storage.put('notes.json', notes, context)
    await build()
    return new Response(JSON.stringify({ message: "Upload successful", key: `${url}${filePath()}`, url }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Upload error:", error);

    return new Response(JSON.stringify({ error: "Upload failed" }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
