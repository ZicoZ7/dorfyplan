import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dorfyplan',
  assetPrefix: '/dorfyplan',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
