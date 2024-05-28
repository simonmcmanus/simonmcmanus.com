const fs = require('fs');
const sizlate = require('sizlate');
const markup = fs.readFileSync(require.resolve('./cv1.html'), { encoding: 'utf8' });



exports.handler = async(event) => {
    console.log('incoming')

    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return { statusCode: 404 }
    }



    console.log('ap8 ok')

    return { statusCode: 200, body: 'aa' };
    try {

        const { skills, strengths, summary } = JSON.parse(event.body)
        const skillsArr = skills.split(',').map((a) => a.trim())
        const strengthsArr = strengths.split(',').map((a) => a.trim())


        // if (skills === '' || strengths === '' || summary === '') {
        //     console.log('error: not enough data')
        //     return { statusCode: 400, body: 'no-url' }
        // }

        const rendered = sizlate.render(markup, {
            '.profile': summary || '',
            '[data-strengths] li': [],
            '[data-strengths] li': skillsArr || [],
            '[data-technology] li': [],
            '[data-technology] li': strengthsArr || [],

        })
        console.log('..', skillsArr)
        console.log('..', strengthsArr)
        console.log('..', summary)
        return { statusCode: 200, body: rendered }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}