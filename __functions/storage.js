// Netlify Storage adapter with the same interface as the original S3 module
// Requires Netlify's built-in storage API (@netlify/blobs)

import { getStore } from "@netlify/blobs";
import mime from "mime-types";


// Create a store (bucket equivalent). You can rename this if needed.
// Separate stores
const jsonStore = getStore({ name: "netlify-json" });
const imageStore = getStore({ name: "netlify-images" });


export const get = async (filename) => {
    const blob = await jsonStore.get(filename, { type: "json" });
    console.log(blob)
    return blob; // already parsed JSON
};


export const put = async (filename, contents) => {
    await jsonStore.set(filename, JSON.stringify(contents, null, 4), {
        metadata: { contentType: "application/json" },
    });
    return {
        ok: true,
        url: jsonStore.getPublicUrl(filename),
    };
};


// Upload binary images
// Upload binary images with automatic MIME detection + public URL



export const upload = async (body, filename, contentType) => {
    const detected = contentType || mime.lookup(filename) || "application/octet-stream";
    await imageStore.set(filename, body, {
        metadata: { contentType: detected },
    });
    return {
        ok: true,
        url: imageStore.getPublicUrl(filename),
        contentType: detected,
    };
};