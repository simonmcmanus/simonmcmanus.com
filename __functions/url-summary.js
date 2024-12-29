const OpenAI = require('openai')

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

async function getMeta(url) {

    const chatCompletion = await client.chat.completions.create({
        messages: [{
            role: 'user',

            //content: `take the url ${url} and provide a set of tags that represent the contents in a json list and a summary in thats aproxiately 100 words`
            content: `take the url ${url}  and provide a json response that gives a list of tags that represents the content. The tags shold use hyphons as a seperator and uk spelling.  also generate a short concise sentence or two which summarises the content and uk english.`
        }],

        model: "gpt-4o-mini",

        response_format: { type: "json_object" }
    });
    const response = JSON.parse(chatCompletion.choices[0].message.content)

    return response;
}



exports.handler = async(event) => {

    try {
        const body = JSON.parse(event.body)
        console.log('iurl', body.url)
        const response = await getMeta(body.url);

        if (body.url === '') {
            console.log('error: no url')
            return { statusCode: 400, body: 'no-url' }
        }
        return { statusCode: 200, body: JSON.stringify(response) }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}