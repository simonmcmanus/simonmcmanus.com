import * as storage from './storage.js';
import { searchTags } from '../lib/get-tags.js';

export const handler = async(event) => {
    try {
        let searchTerms = '';
        if (event.headers && event.headers.search) {
            searchTerms = event.headers.search.toLowerCase().split(',');
        }
        const tags = await storage.get('tags.json');
        const uniqueTags = searchTags(tags, searchTerms);

        return Response.json(uniqueTags, { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (e) {
        console.log(e);
        return new Response(e.message, { status: 500 });
    }
}