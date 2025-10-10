import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/his-global-conclave-edition-2',
  assetPrefix: '/his-global-conclave-edition-2/', // IMPORTANT for GitHub Pages
  images: { unoptimized: true },
};

export default nextConfig;
