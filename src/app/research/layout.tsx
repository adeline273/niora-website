import type { Metadata } from "next";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/research"));

export default function ResearchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
