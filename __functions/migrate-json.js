// netlify/functions/migrate-json.js
// CommonJS version — use `require` so Netlify's default function runtime accepts it.

const AWS = require("aws-sdk");
const { getStore } = require("@netlify/blobs");

// --- CONFIG ---

const  siteID= '8d67539e-95ea-4f87-9d6e-c2a217927582';
const token = "nfp_uHorK51oZbZKiFbRXsdVeEj7wfwVqaFZ9ce1"
const Bucket = "netlify-files"; // <- change to your real S3 bucket name
const jsonStore = getStore({ name: "netlify-json", siteID, token});

const s3 = new AWS.S3({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
  region: process.env.MY_AWS_REGION || undefined,
});

// Utility: list all JSON files from S3 (handles pagination)
async function listJsonFiles() {
  let continuationToken = undefined;
  const all = [];

  do {
    const res = await s3
      .listObjectsV2({
        Bucket,
        ContinuationToken: continuationToken,
      })
      .promise();

    if (res && res.Contents) {
      all.push(...res.Contents.filter((f) => f.Key && f.Key.endsWith(".json")));
    }

    continuationToken = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (continuationToken);

  return all;
}

exports.handler = async function (event, context) {
  try {
    const jsonFiles = await listJsonFiles();

    if (!jsonFiles.length) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "No JSON files found in S3." }),
      };
    }

    const migrated = [];

    for (const file of jsonFiles) {
      console.log(`Downloading ${file.Key} from S3...`);

      // Get file from S3
      const obj = await s3
        .getObject({
          Bucket,
          Key: file.Key,
        })
        .promise();

      const bodyString = obj.Body.toString("utf-8");
      let parsedJSON;
      try {
        parsedJSON = JSON.parse(bodyString);
      } catch (parseErr) {
        console.error(`Skipping ${file.Key} — invalid JSON:`, parseErr.message);
        migrated.push({ filename: file.Key, status: "skipped_invalid_json" });
        continue;
      }

      console.log(`Uploading ${file.Key} → Netlify Blobs...`);

      const fileData = await jsonStore.set(file.Key, JSON.stringify(parsedJSON, null, 2), {
        metadata: { contentType: "application/json" },
      });

      migrated.push({
        filename: file.Key,
        url: fileData.url,
        status: "migrated",
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Migrated ${migrated.filter(m => m.status === 'migrated').length} files`,
        migrated,
      }),
    };
  } catch (err) {
    console.error("Migration error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};