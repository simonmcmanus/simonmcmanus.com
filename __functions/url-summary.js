import OpenAI from 'openai';
import * as storage from './storage';
import request from 'superagent';

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

export const getMeta = async(url, markup, tags) => {
    try {
        const content = await request.get(url);
        markup = content.text
    } catch (e) {
        console.log('could not fetch url content, using markup', e);
    }   
    
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
            {
                role: 'user',
                content: `Add a field contains an image which is suitable to share on social media to represent this page`
            },
        ],
        model: "gpt-4o-mini",
        response_format: { type: "json_object" }
    }

    const chatCompletion = await client.chat.completions.create(messages);
    const response = JSON.parse(chatCompletion.choices[0].message.content);
    return response;
}

export default async(event) => {
    try {
        const body = JSON.parse(event.body);
        const tags = await storage.get('tags.json');
        console.log('url', body.url);
        const response = await getMeta(body.url, body.markup, tags);

        if (body.url === '') {
            console.log('error: no url');
            return Response('no-url', { status: 400 });
        }
        return Response.json(response, { status: 200 });
    } catch (e) {
        console.log(e);
        return Response(e.message, { status: 500 });
    }
}