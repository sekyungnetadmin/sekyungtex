export default async function sitemap() {
  return [
    {
      url: "https://sekyungtex.co.kr/en",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://sekyungtex.co.kr/ko",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}