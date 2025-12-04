/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "sekyungnet.com" },
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
    NEXT_PUBLIC_SITE_NAME: "SAFITEX by Sekyung Net",
    NEXT_PUBLIC_CONTACT_EMAIL: "info@sekyungnet.com",
  },
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    localeDetection: false,   // 자동 감지 OFF
  },

};

export default nextConfig;