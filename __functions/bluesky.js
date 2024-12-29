const { BskyAgent } = require('@atproto/api')

const agent = new BskyAgent({
    service: 'https://bsky.social'
})

module.exports = async(url, text, tags) => {



    await agent.login({
        identifier: process.env['BLUESKY_HANDLE'],
        password: process.env['BLUESKY_PASSWORD']
    })

    // creating richtext
    const rt = await new RichText({
        text: text + '' + url,
    })
    await rt.detectFacets(agent);
    const { text, facets } = rt;


    await agent.post({
        $type: 'app.bsky.feed.post',
        text,
        facets,
        createdAt: new Date().toISOString()
    })

}