const storage = require('./storage');
const { searchTags } = require('../lib/get-tags.js')

exports.handler = async(event) => {
    try {

        let searchTerms = '';
        if (event.headers && event.headers.search) {
            searchTerms = event.headers.search.toLowerCase().split(',')
        }
        const tags = await storage.get('tags.json')
        const uniqueTags = searchTags(tags, searchTerms)

        return {
            statusCode: 200,
            body: JSON.stringify(
                uniqueTags
            ),
            headers: {
                'Content-Type': 'application/json',
            },
        }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}