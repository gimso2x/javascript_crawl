/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
