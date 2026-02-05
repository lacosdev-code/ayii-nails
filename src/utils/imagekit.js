
/**
 * ImageKit URL Helper
 * Optimizes images by using ImageKit's real-time features.
 */

// ⚠️ REPLACE THIS WITH YOUR IMAGEKIT URL ENDPOINT
export const IMAGEKIT_ENDPOINT = "https://ik.imagekit.io/ayii/";

export const getImageUrl = (path, transformations = {}) => {
    // If connection is not set or path is external, return as is
    if (!path) return "";
    if (path.startsWith("http")) return path;

    // Construct URL
    // Remove leading slash if present
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;

    // Basic optimization params
    const params = [];
    if (transformations.width) params.push(`w-${transformations.width}`);
    if (transformations.height) params.push(`h-${transformations.height}`);
    if (transformations.quality) params.push(`q-${transformations.quality}`);

    const tr = params.length > 0 ? `?tr=${params.join(",")}` : "";

    return `${IMAGEKIT_ENDPOINT}${cleanPath}${tr}`;
};
