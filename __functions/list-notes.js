const storage = require('./storage');

exports.handler = async(event, context) => {
    try {
        const notes = await storage.get('notes.json')
        
        return {
            statusCode: 200,
            body: JSON.stringify(notes),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    } catch (e) {
        return { statusCode: 500, body: e.message }
    }
}