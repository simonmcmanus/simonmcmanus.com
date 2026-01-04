import * as storage from './storage.js';
import { searchTags } from '../lib/get-tags.js';

export const handler = async(req, context) => {
    try {
        let searchTerms = '';
        if (req.headers && req.headers.get('search')) {
            searchTerms = req.headers.get('search').toLowerCase().split(',');
        }
        const tags = await storage.get('tags.json', context);
        const uniqueTags = searchTags(tags, searchTerms);

        return Response.json(uniqueTags, { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (e) {
        console.log(e);
        return new Response(e.message, { status: 500 });
    }
}