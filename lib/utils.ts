/**
 * Get the base path for assets
 * This handles both local development and GitHub Pages deployment
 */
export function getBasePath() {
  // In production (GitHub Pages), use the base path from environment
  // In development, use empty string
  return process.env.NODE_ENV === 'production' 
    ? (process.env.NEXT_PUBLIC_BASE_PATH || '')
    : '';
}

/**
 * Get the full path for a public asset
 * @param path - Path relative to /public (e.g., '/raymond-portrait.jpg')
 */
export function getAssetPath(path: string) {
  const basePath = getBasePath();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
