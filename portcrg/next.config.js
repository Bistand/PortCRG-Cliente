/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "images.pexels.com",
      "res.cloudinary.com"
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
