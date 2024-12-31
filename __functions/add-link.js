const storage = require('./storage.js')
const bluesky = require('./bluesky')
const build = require('./build')
const netlify = require('./netlify');
const { extractUniqueTags } = require('../lib/get-tags.js')
exports.handler = async(event) => {

    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return { statusCode: 404 }
    }

    try {

        const body = JSON.parse(event.body)

        if (body.url === '') {
            console.log('error: no url')
            return { statusCode: 400, body: 'no-url' }
        }

        const links = storage.get('links.json')

        const alreadyAdded = links.some((link) => link.url === body.url)

        if (alreadyAdded) { // link already exists
            console.log('error: url exist')
            return { statusCode: 400, body: 'URL Already Saved' }
        }

        const input = {
            created: new Date(),
            url: body.url,
            notify: {
                bluesky: 'pending'
            },
            title: body.title,
            summary: body.summary,
            tags: body.tags
        }

        links.push(input)

        const tags = extractUniqueTags(links)
        await storage.put('links.json', links)
        await storage.put('tags.json', tags)
        await build()
        return { statusCode: 200, body: 'done' }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}