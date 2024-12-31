const AWS = require("aws-sdk")

const s3 = new AWS.S3({
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
})


const getS3 = async(filename) => {


    const s3Objects = await s3.getObject({
        Key: filename,
        Bucket: 'netlify-files',
    }).promise();
    return JSON.parse(s3Objects.Body.toString('utf-8'))
}