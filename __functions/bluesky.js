import { BskyAgent } from '@atproto/api'


const agent = new BskyAgent({
    service: 'https://bsky.social'
})

module.exports = async(url, text, tags) => {



    await agent.login({
        identifier: process.env['BLUESKY_HANDLE'],
        password: process.env['BLUESKY_PASSWORD']
    })

    await agent.post({
        text: url + '' + text,
        createdAt: new Date().toISOString()
    })

}