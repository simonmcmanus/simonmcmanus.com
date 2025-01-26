
const sizlate = require('sizlate');
const request = require('superagent');


exports.handler = async(event) => {
    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return { statusCode: 404 }
    }
    try {
        const { skills, strengths, summary } = JSON.parse(event.body)

        const cv = await request.get('https://simonmcmanus.com/cv')

        const body = sizlate.render(cv.text, {
            '.profile': summary || '',
            '[data-strengths]': '<li></li>',
            '[data-strengths] li': strengths.split(',').map((a) => a.trim()) || [],
            '[data-technology]': '<li></li>',
            '[data-technology] li': skills.split(',').map((a) => a.trim()) || [],
        })
        return { statusCode: 200, body }
    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}