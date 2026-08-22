import type { Metadata } from "next";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/careers"));

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
