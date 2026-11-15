import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Full-Stack Engineer role was closed; send old links to the careers listing.
      { source: "/careers/full-stack-engineer", destination: "/careers", permanent: false },
    ];
  },
};

export default nextConfig;
