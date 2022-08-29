/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "images.pexels.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
