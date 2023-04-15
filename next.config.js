/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  // images: { domains: ["raw.githubuser.com"] },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        // port: "",
        // pathname: "/PokeAPI/**",
      },
    ],
    minimumCacheTTL: 1500000
  },
};

module.exports = nextConfig
