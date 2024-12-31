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
        // could only update links which were added before the build was triggered to ensure they are published when tweeted
        if (link && link.notify && link.notify.bluesky === 'pending') {

            updates.push(link)
            link.notify.bluesky = 'done';
        }
        return link;
    })

    for (const update of updates) {
        console.log(update.title)
        await bluesky(update);

    }


    await s3.putObject({
        Bucket: params.Bucket,
        Key: params.Key,
        Body: JSON.stringify(updatedLinks, null, 4)
    }).promise()
    return
};