


import { getStore } from "@netlify/blobs";
import * as storage from './storage.js';

export default async function handler(event, context) {
  const filename = 'notes-test.json';
  const notes = await storage.get( filename)
  return Response.json(notes)
}




// export default async function handlerstorage(event, context) {
// const jsonStore = getStore({ name: "netlify-json" });
// const filename = 'notes-test.json';
// jsonStore.set(filename, JSON.stringify({'bob':"yes"}, null, 4), {
//         metadata: { contentType: "application/json" },
//     });
// const notes = await jsonStore.get(filename, { type: "json" });
// console.log('notes', notes);
// //  const notes = await storage.get('notes.json')
// return Response.json(notes)
  
// }