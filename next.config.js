/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    // Add your environment variables here
    MONGODB_URI: 'mongodb+srv://hoang:hoang2008@cluster0.ffpcsco.mongodb.net/?retryWrites=true&w=majority',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
