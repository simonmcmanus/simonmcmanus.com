import { BskyAgent, RichText } from '@atproto/api';

const agent = new BskyAgent({
    service: 'https://bsky.social'
});

export default async({ title, url, summary, tags, image }) => {
    console.error(title, url, summary, tags);

    await agent.login({
        identifier: process.env['BLUESKY_HANDLE'],
        password: process.env['BLUESKY_PASSWORD']
    });

    // creating richtext 
    const hashTags = tags.split(',').map((t) => `#${t} `).join(' ');

    const rt = await new RichText({
        text: `${title} ${url} ${hashTags}`,
    })
    await rt.detectFacets(agent);
    const { text, facets } = rt;

    const out = {
        $type: 'app.bsky.feed.post',
        text,
        facets,
        // embed: {
        //     $type: 'app.bsky.embed.external',
        //     external: {
        //         uri: url,
        //         title,
        //         description: summary,
        //         thumb: image
        //     }
        // },
        createdAt: new Date().toISOString()
    }

    
    await agent.post(out);
    return new Response('Post successful', { status: 200 });
}