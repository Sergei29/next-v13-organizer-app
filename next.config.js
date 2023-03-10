/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["bcrypt"],
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"], variable: "--font-inter" },
      },
    ],
  },
};

module.exports = nextConfig;
