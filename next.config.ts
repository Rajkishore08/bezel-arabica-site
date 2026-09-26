import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "bezelarabia.com",
      },
      {
        protocol: "https",
        hostname: "www.bezelarabia.com",
      },
    ],
  },
};

export default nextConfig;
