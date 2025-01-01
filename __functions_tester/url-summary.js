const { getMeta } = require('../__functions/url-summary')
const storage = require('../__functions/storage')


const run = async() => {
    const tags = await storage.get('tags.json')
    const result = await getMeta('https://thisrobot.life/', tags)
    console.log(result)
}

run();