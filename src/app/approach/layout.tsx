import type { Metadata } from "next";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/approach"));

export default function ApproachLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
