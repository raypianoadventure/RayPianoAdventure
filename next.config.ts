import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/RayPianoAdventure',
  assetPrefix: '/RayPianoAdventure',
};

export default nextConfig;
