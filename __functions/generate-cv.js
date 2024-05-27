exports.handler = async(event) => {
    console.log('incoming')

    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return { statusCode: 404 }
    }


    try {

        const { skills, strengths, summary } = JSON.parse(event.body)


        if (skills === '' || strengths === '' || summary === '') {
            console.log('error: not enough data')
            return { statusCode: 400, body: 'no-url' }
        }

        console.log('..', skills, strengths, summary)
        return { statusCode: 200, body: 'done' }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}