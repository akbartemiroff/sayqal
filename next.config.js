/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sayqal/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/sayqal' : '',
  trailingSlash: true,
}

module.exports = nextConfig 