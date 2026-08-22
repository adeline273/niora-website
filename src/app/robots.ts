import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/platform",
          "/markets/ghana",
          "/solutions/hospitals",
          "/solutions/suppliers",
          "/research",
          "/careers",
          "/careers/full-stack-engineer",
          "/signup",
        ],
        disallow: ["/api/", "/_next/", "/dashboard/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
