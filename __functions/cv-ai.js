
const OpenAI = require('openai')
const request = require('superagent');

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});


exports.getMeta = async({ url, markup }) => {
    const cv = await request.get('https://simonmcmanus.com/cv')
  
    const messages = {
        messages: [
            {
                role: 'system',
                content: `given the contents of the job advert in this markup ${markup} served at the url ${url}`
            },
            {
              role: 'system',
              content: `This is the html markup of my cv: ${cv}`
            },
            {
              role: 'system',
              content: `When generating tags, generate an array, use hyphons when necesssary (ideally single words) as a seperator and uk spelling.`
            },
            {
                role: 'user',
                content: `based on my cv generate 5 tags that hightlight technologies relevant to the role, return the list in the json using a  technologies property`
            },
            {
              role: 'user',
              content: `based on the job description, and the content of my CV generate a covering letter in the html format to the recruiter explaining why im the perfect application, return the markup in a cover property.  The html should be a full valid html document.`
            },
            {
              role: 'user',
              content: `based on the job description, extract the name of the company I would be applying for in a format that can be used for creating folders and return in the json company property, the second folder path should be the job title i am applying for`
            },
            {
              role: 'user',
              content: `based on my cv select generate up to 5 tags whcih are  most relevant strengths that are relevant to the role, The strengths should be  return the list in the json using a  strengths property`
          },
            {
                role: 'user',
                content: `add a summary property (max 20 words) to that provides an opening and engaging sentence about why the skills in my cv are relevant to this role that would make  recrutier keep reading. but make it sound like its generic and not written specifically for this role`
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

