import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useTypeScriptCli: true,
  },
  output: "standalone",
  allowedDevOrigins: ["staging.agiggletech.win"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `**.ufs.sh`,
        pathname: "/f/**",
      },
    ],
  },
};

export default nextConfig;
