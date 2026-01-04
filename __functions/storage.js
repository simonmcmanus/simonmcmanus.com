// Netlify Storage adapter with the same interface as the original S3 module
// Requires Netlify's built-in storage API (@netlify/blobs)

import { getStore } from "@netlify/blobs";
import mime from "mime-types";


export const get = async (filename, context) => {
    const jsonStore = getStore({ name: "netlify-json", context });
    const blob = await jsonStore.get(filename, { type: "json" });
    console.log(blob)
    return blob; // already parsed JSON
};


export const put = async (filename, contents, context) => {
    const jsonStore = getStore({ name: "netlify-json", context });
    await jsonStore.set(filename, JSON.stringify(contents, null, 4), {
        metadata: { contentType: "application/json" },
    });
    return {
        ok: true,
        filename
    };
};





export const upload = async (body, filename, contentType, context) => {
    const imageStore = getStore({ name: "netlify-images", context });
    const detected = contentType || mime.lookup(filename) || "application/octet-stream";
    await imageStore.set(filename, body, {
        metadata: { contentType: detected },
    });
    return {
        ok: true,
        filename,
        contentType: detected,
    };
};