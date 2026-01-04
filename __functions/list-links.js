import * as storage from './storage.js';

const handler = async (event, context) => {
    try {
        const links = await storage.get('links.json', context);
        console.log('links', links);
        return Response.json(links, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (e) {
        return new Response(String(e?.message ?? e), { status: 500 });
    }
};

export default handler;