/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/apt",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/naverNews/:path*",
        destination: "https://land.naver.com/news/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
