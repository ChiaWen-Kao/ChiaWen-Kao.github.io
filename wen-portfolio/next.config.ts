import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // 02092025 Static export for GitHub pages
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
