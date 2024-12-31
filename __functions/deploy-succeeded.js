const AWS = require("aws-sdk")

const s3 = new AWS.S3({
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
})

export default async(req, context) => {
    var params = {
        Key: "links.json",
        Bucket: 'netlify-files',
    }
    const s3Objects = await s3.getObject(params).promise();
    const links = JSON.parse(s3Objects.Body.toString('utf-8'))


    links.map(async(link) => {
        if (link && link.notify && link.notify.bluesky === 'pending') {
            console.log('notify bluesky')
            await bluesky(link);
            link.notify.bluesky = 'done';
        }
        return link;
    })
    console.log('context', context)
    return
};