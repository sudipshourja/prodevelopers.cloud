import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/solutions/:slug",
        destination: "https://prodevelopers.tech/work/:slug",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://prodevelopers.tech/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
