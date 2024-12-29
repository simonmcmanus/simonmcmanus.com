const { BskyAgent, RichText } = require('@atproto/api')

const agent = new BskyAgent({
    service: 'https://bsky.social'
})

module.exports = async({ title, url, summary, tags }) => {



    await agent.login({
        identifier: process.env['BLUESKY_HANDLE'],
        password: process.env['BLUESKY_PASSWORD']
    })

    // creating richtext
    const rt = await new RichText({
        text: message + ' ' + url,
    })
    await rt.detectFacets(agent);
    const { text, facets } = rt;


    await agent.post({
        $type: 'app.bsky.feed.post',
        text,
        facets,
        embed: {
            $type: 'app.bsky.embed.external',
            external: {
                uri: url,
                title,
                description: summary,
                //thumb: data.blob
            }
        },
        createdAt: new Date().toISOString()
    })

}