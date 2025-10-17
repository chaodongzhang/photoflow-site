import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonicalize host: redirect www to apex
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gophotoflow.com" }],
        destination: "https://gophotoflow.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
