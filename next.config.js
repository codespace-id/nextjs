/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['pages', 'utils', 'modules', 'configs', 'components'],
  },
  output: 'standalone',
}

module.exports = nextConfig
