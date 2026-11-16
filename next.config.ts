import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Full-Stack Engineer role was closed; send old links to the careers listing.
      { source: "/careers/full-stack-engineer", destination: "/careers", permanent: false },
      // Business Development Lead was renamed Commercial Lead.
      { source: "/careers/business-development-lead", destination: "/careers/commercial-lead", permanent: true },
    ];
  },
};

export default nextConfig;
