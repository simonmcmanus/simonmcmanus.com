import * as storage from './storage.js'
import build from './build.js'
import netlify from './netlify.js'
import { extractUniqueTags } from '../lib/get-tags.js'

export default async function(req, context) {

    if (req.headers.get('x-api-key') !== process.env.API_KEY) {
        return new Response('', { status: 404 })
    }

    try {

        const body = await req.json()

        if (body.url === '') {
            console.log('error: no url')
            return new Response(JSON.stringify({ error: 'no-url' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const links = await storage.get('links.json', context)

        const alreadyAdded = links.some((link) => link.url === body.url)

        if (alreadyAdded) { // link already exists
            console.log('error: url exist')
            return new Response(JSON.stringify({ error: 'URL Already Saved' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const input = {
            created: new Date(),
            url: body.url,
            notify: {
                bluesky: 'pending'
            },
            author: body.author,
            image: body.image,
            title: body.title,
            summary: body.summary,
            tags: body.tags
        }

        links.push(input)

        const tags = extractUniqueTags(links)
        await storage.put('links.json', links, context)
        await storage.put('tags.json', tags, context)
        await build()
        return new Response('done', {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })

    } catch (e) {
        console.log(e)
        return new Response(e.message, {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}