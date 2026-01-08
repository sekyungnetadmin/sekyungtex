export default function robots() {
  return {
    rules: [
      // ✅ Baidu (중국) 차단
      {
        userAgent: "Baiduspider",
        disallow: "/",
      },
      // ✅ 그 외 검색엔진 허용 (Google, Bing 등)
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://sekyungtex.co.kr/sitemap.xml",
  };
}