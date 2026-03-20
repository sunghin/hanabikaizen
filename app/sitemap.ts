import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.seo.siteUrl,
      lastModified: new Date()
    }
  ];
}
