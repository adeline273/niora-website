import type { Metadata } from "next";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/signup"));

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
