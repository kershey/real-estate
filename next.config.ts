import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The contact page moved to the brief's "Let's Talk" route.
      { source: '/contact', destination: '/lets-talk', permanent: true },
    ];
  },
  devIndicators: false,
};

export default nextConfig;
