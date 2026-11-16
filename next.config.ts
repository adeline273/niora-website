import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Full-Stack Engineer role was closed; send old links to the careers listing.
      { source: "/careers/full-stack-engineer", destination: "/careers", permanent: false },
      // Business Development Lead -> Commercial Lead -> Commercial Director.
      { source: "/careers/business-development-lead", destination: "/careers/commercial-director", permanent: true },
      { source: "/careers/commercial-lead", destination: "/careers/commercial-director", permanent: true },
    ];
  },
};

export default nextConfig;
