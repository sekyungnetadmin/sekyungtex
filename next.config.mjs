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

  // 설치서비스 페이지는 제품 페이지로 합쳐서 메인으로 연결
  async redirects() {
    return [{ source: "/ko/installation", destination: "/ko", permanent: true }];
  },

  env: {
    NEXT_PUBLIC_SITE_NAME: "Sekyung NET",
    NEXT_PUBLIC_CONTACT_EMAIL: "info@sekyungtex.co.kr",
  },
 

};

export default nextConfig;