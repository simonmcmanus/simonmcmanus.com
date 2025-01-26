
const sizlate = require('sizlate');
const fs = require('fs');
const markup = fs.readFileSync(require.resolve('../../static/cv.html'), { encoding: 'utf8' });
exports.handler = async(event) => {

    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return { statusCode: 404 }
    }
    try {
        const { skills, strengths, summary } = JSON.parse(event.body)

        console.log(JSON.parse(event.body))
        const body = sizlate.render(markup, {
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