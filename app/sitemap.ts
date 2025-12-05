import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Main pages
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

    // Product detail pages (KO)
    {
      url: "https://sekyungtex.co.kr/ko/products/golf",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://sekyungtex.co.kr/ko/products/baseball",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://sekyungtex.co.kr/ko/products/ski",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://sekyungtex.co.kr/ko/products/safety",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://sekyungtex.co.kr/ko/products/fishery",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}