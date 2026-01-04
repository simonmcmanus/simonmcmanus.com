import bluesky from './bluesky';
import * as storage from './storage.js';

export default async (req, context) => {
    const links = await storage.get('links.json', context);
    const updates = [];
    const updatedLinks = links.map((link) => {
        // todo: this could only update links which were added before the build was triggered to ensure they are published when tweeted
        if (link && link.notify && link.notify.bluesky === 'pending') {
            updates.push(link);
            link.notify.bluesky = 'done';
        }
        return link;
    });

    for (const update of updates) {
        console.log(update.title);
        await bluesky(update);
    }
    await storage.put('links.json', updatedLinks, context);
    return Response.json(updatedLinks);
};