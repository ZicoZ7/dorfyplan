/**
 * Helper function to get the correct asset path for GitHub Pages deployment
 * In development: returns /asset.jpg
 * In production: returns /dorfyplan/asset.jpg
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
