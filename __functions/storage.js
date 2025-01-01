const AWS = require("aws-sdk")


const Bucket = 'netlify-files';

const s3 = new AWS.S3({
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
})


const get = async(filename) => {
    const s3Objects = await s3.getObject({
        Key: filename,
        Bucket,
    }).promise();
    return JSON.parse(s3Objects.Body.toString('utf-8'))
}


const put = async(filename, contents) => {

    return await s3.putObject({
        Bucket,
        Key: filename,
        Body: JSON.stringify(contents, null, 4)
    }).promise()
}

module.exports = { put, get }