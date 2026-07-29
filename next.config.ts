import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useTypeScriptCli: true,
  },
  output: "standalone",
};

export default nextConfig;
