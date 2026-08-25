import type { MetadataRoute } from "next";
import { canonicalUrl, publicRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: canonicalUrl(route.path),
    lastModified: new Date("2026-08-25"),
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority ?? 0.5,
  }));
}
