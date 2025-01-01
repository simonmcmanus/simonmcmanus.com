const storage = require('./storage');

exports.handler = async(event, context) => {
    try {
        const links = await storage.get('links.json')
        console.log('links', links)
        return {
            statusCode: 200,
            body: links,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    } catch (e) {
        return { statusCode: 500, body: e.message }
    }
}