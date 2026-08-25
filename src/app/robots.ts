import type { MetadataRoute } from "next";
import { publicRoutes, SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: publicRoutes.map((route) => route.path),
        disallow: ["/api/", "/_next/", "/dashboard/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
