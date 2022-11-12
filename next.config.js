/** @type {import('next').NextConfig} */
let nextConfig;

nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    SALT: 10,
    SECRET: "123456789", // This is the secret used to encrypt the JWT token
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "123456789",
    // Add your environment variables here
    MONGODB_URI:
      "mongodb+srv://hoang:hoang2008@cluster0.ffpcsco.mongodb.net/?retryWrites=true&w=majority",
    GOOGLE_CLIENT_ID:
      "369882789668-219vdfc8vefcmrst96hf0882oul2tfqh.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
