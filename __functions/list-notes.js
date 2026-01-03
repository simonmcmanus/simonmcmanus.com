
import * as storage from './storage.js'


export default async(event, context) => {
    try {
        const notes = await storage.get('notes.json')
        console.log('m', notes)
         return new Response.json(notes);
    } catch (e) {
        return new Response(e.message, { status: 500 });
    }
}