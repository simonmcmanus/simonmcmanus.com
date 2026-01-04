
import * as storage from './storage.js'


export default async function handler(event, context) {
    try {
        const notes = await storage.get('notes.json')
        console.log('m', notes)
         return Response.json(notes);
    } catch (e) {
        return Response(e.message, { status: 500 });
    }
}