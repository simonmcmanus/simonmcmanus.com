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
    const hashTags = tags.split(',').map((t) => `#${t}`).join(' ');
    
    // Bluesky limit is 300 graphemes - build the text and check length
    let postText = `${title} ${url} ${hashTags}`;
    
    // Create RichText to get actual grapheme count
    let rt = new RichText({ text: postText });
    await rt.detectFacets(agent);
    
    // If too long, truncate the title
    if (rt.graphemeLength > 300) {
        const overhead = url.length + hashTags.length + 3; // spaces and ellipsis
        const maxTitleLength = 300 - overhead;
        const truncatedTitle = title.substring(0, Math.max(10, maxTitleLength)) + '…';
        postText = `${truncatedTitle} ${url} ${hashTags}`;
        rt = new RichText({ text: postText });
        await rt.detectFacets(agent);
    }
    
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