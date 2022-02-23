const AWS = require("aws-sdk")

const s3 = new AWS.S3({
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
})

exports.handler = async(event, context) => {
    try {
        var params = {
            Key: "links.json",
            Bucket: 'netlify-files',
        }
        const s3Objects = await s3.getObject(params).promise();


        return {
            statusCode: 200,
            body: s3Objects.Body.toString('utf-8'),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    } catch (e) {
        return { statusCode: 500, body: e.message }
    }
}