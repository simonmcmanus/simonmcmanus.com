const AWS = require("aws-sdk")

//const tweet = require('./tweet')
const bluesky = require('./bluesky')
const build = require('./build')
const { extractUniqueTags } = require('../lib/get-tags.js')
exports.handler = async(event) => {

    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return { statusCode: 404 }
    }

    const s3 = new AWS.S3({
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    })

    try {

        const body = JSON.parse(event.body)


        if (body.url === '') {
            console.log('error: no url')
            return { statusCode: 400, body: 'no-url' }
        }

        var params = {
            Key: "links.json",
            Bucket: 'netlify-files',
        }
        const s3Objects = await s3.getObject(params).promise();

        const links = JSON.parse(s3Objects.Body.toString('utf-8'))

        const alreadyAdded = links.some((link) => link.url === body.url)

        if (alreadyAdded) { // link already exists
            console.log('error: url exist')
            return { statusCode: 400, body: 'URL Already Saved' }
        }

        const input = {
            created: new Date(),
            url: body.url,
            title: body.title,
            summary: body.summary,
            tags: body.tags
        }
        console.log('in', input)

        links.push(input)

        const tags = extractUniqueTags(links)

        await s3.putObject({
            Bucket: params.Bucket,
            Key: params.Key,
            Body: JSON.stringify(links, null, 4)
        }).promise()


        await s3.putObject({
            Bucket: params.Bucket,
            Key: 'tags.json',
            Body: JSON.stringify(tags, null, 4)
        }).promise()

        await build()





        await bluesky(input)



        return { statusCode: 200, body: 'done' }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}