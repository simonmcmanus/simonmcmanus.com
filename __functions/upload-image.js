const AWS = require("aws-sdk");
const { Buffer } = require("buffer");

const s3 = new AWS.S3({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Netlify passes the raw base64 body by default
    const body = Buffer.from(event.body, event.isBase64Encoded ? "base64" : "utf8");
    const contentType = event.headers["content-type"] || event.headers["Content-Type"] || "image/jpeg";
    const filename = `upload-${Date.now()}.jpg`;

    const Bucket = 'netlify-files';
    const params = {
      Bucket,
      Key: filename,
      Body: body,
      ContentType: contentType,
    };

    await s3.upload(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Upload successful",
        key: filename,
        url: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`,
      }),
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Upload failed" }),
    };
  }
};
