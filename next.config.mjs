/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "sekyungtex.co.kr" },
      { protocol: "http", hostname: "localhost" },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },

  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production",
  },

  env: {
    NEXT_PUBLIC_SITE_NAME: "Sekyung NET",
    NEXT_PUBLIC_CONTACT_EMAIL: "info@sekyungtex.co.kr",
  },
 

};

export default nextConfig;