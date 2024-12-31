const bluesky = require('./bluesky')
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


    const updates = [];
    const updatedLinks = links.map((link) => {
        if (link && link.notify && link.notify.bluesky === 'pending') {
            console.log('found one')

            updates.push(async() => {
                console.log('notify bluesky')
                    // this is prob not gonna do what we want.
                await bluesky(link);
            })

            link.notify.bluesky = 'done';
        }
        return link;
    })

    await Promise.all(updates)

    await s3.putObject({
        Bucket: params.Bucket,
        Key: params.Key,
        Body: JSON.stringify(updatedLinks, null, 4)
    }).promise()
    console.log('context', context)
    return
};