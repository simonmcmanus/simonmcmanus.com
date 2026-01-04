import { getStore } from "@netlify/blobs";

const imageStore = getStore({ name: "netlify-images" });

export default async (req, context) => {
  // Extract path from the URL
  const url = new URL(req.url);
  const path = url.pathname.replace('/note/', '');
  
  console.log('Request URL:', req.url);
  console.log('Pathname:', url.pathname);
  console.log('Extracted path:', path);
  console.log('Context params:', JSON.stringify(context.params));
  
  if (!path) {
    return new Response("Path not specified", { status: 400 });
  }
  
  try {
    const blob = await imageStore.get(path, { type: "arrayBuffer" });
    
    if (!blob) {
      return new Response("Not found", { status: 404 });
    }
    
    const metadata = await imageStore.getMetadata(path);
    const contentType = metadata?.contentType || "image/jpeg";
    
    return new Response(blob, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  } catch (error) {
    console.error("Error serving image:", error);
    return new Response("Error serving image", { status: 500 });
  }
};
