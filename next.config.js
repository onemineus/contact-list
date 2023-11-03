/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.testhouse.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
