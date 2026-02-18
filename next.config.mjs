/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  trailingSlash: true,
  images: {
    remotePatterns: [new URL("https://okayuharuki.shop/**")],
  },
};

export default nextConfig;
