import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://boris3d.online",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
