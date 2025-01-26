
const OpenAI = require('openai')
const request = require('superagent');

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});


exports.getMeta = async({ url, markup }) => {
    const cv = await request.get('https://simonmcmanus.com/cv')
    const markup =content.text;
    const messages = {
        messages: [
            {
                role: 'system',
                content: `given the contents of the job advert in this markup ${markup} served at the url ${url}`
            },
            {
              role: 'system',
              content: `This is the html markup of my cv:  ${cv}`
          },
            {
                role: 'user',
                content: `based on the job description generate a list of up to 5 most relevant skills based on my CV that are relevant to the role, The skills shold use hyphons as a seperator and uk spelling.  return the list in the json using a  skills property`
            },
            {
              role: 'user',
              content: `based on the job description generate a list of up to 5 most relevant strengths based on my CV that are relevant to the role, The strengths shold use hyphons as a seperator and uk spelling.  return the list in the json using a  strengths property`
          },
            {
                role: 'user',
                content: `create a consise summary (max 20 words) to demonstrate why I am a good candiate for the role to appear in the  opening lines of my CV when applying for this role`
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
        const response = await exports.getMeta(body);
        
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