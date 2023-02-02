/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    allowFutureImage: true,
    domains: ["upload.wikimedia.org"]
  }
}

module.exports = nextConfig
