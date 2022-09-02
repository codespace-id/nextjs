/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint:{
    dirs:['pages','utils','modules','configs','components']
  }
}

module.exports = nextConfig
