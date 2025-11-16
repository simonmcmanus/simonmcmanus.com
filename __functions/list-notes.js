
import * as storage from './storage.js'


export default async(event, context) => {
    try {
        const notes = await storage.get('notes.json')
        console.log('m', notes)
         return Response.json(notes);
    } catch (e) {
        return { statusCode: 500, body: e.message }
    }
}