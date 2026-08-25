import type { Metadata } from "next";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/contact"));

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
