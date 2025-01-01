const OpenAI = require('openai')
const storage = require('./storage')
const request = require('superagent');

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});


exports.getMeta = async(url, tags) => {
    const content = await request.get(url)
    const markup =content.text;
    const messages = {
        messages: [
            {
                role: 'system',
                content: `given the contents of the ${markup} at the url ${url}`
            },
            {
                role: 'system',
                content: `This is a list of tags already in use: ${tags.join(', ')}`
            },
            {
                role: 'user',
                content: `based on the content of ${url} generate a list of up to 6 most relevant tags,  The tags shold use hyphons as a seperator and uk spelling.  return the list in the json using a  tag property`
            },
            {
                role: 'user',
                content: `create a consise summary of the contents in a summary field in the json response,  mention the author name in the summary`
            },
            {
                role: 'user',
                content: `Add a field with authors name from the content to the return json`
            },
        ],
        model: "gpt-4o-mini",
        response_format: { type: "json_object" }
    }

    
    const chatCompletion = await client.chat.completions.create(messages);
    
    const response = JSON.parse(chatCompletion.choices[0].message.content)

    return response;
}


exports.handler = async(event) => {

    try {
        const body = JSON.parse(event.body)
        const tags = await storage.get('tags.json')
        const response = await exports.getMeta(body.url, tags);

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