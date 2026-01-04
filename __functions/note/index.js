import { getStore } from "@netlify/blobs";

const imageStore = getStore({ name: "netlify-images" });

export default async (req, context) => {
  const path = context.params.path.join('/');
  
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
