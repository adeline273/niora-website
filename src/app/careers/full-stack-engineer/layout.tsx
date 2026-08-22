import type { Metadata } from "next";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/careers/full-stack-engineer"));

export default function FullStackEngineerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
