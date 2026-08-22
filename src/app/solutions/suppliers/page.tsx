import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/solutions/suppliers"));

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const capabilities = [
  ["Institutional demand visibility", "Coordinate capacity against demand that is visible ahead of time."],
  ["Procurement coordination", "Work from clearer procurement workflows rather than disconnected manual follow-up."],
  ["Order visibility", "Understand order status as part of the same procurement operating layer."],
  ["Payment coordination", "Align fulfillment with payment and financing workflows where those processes are part of the procurement cycle."],
  ["Fulfillment reliability", "Support more predictable purchasing and delivery coordination for institutional medicine supply."],
];

export default function SupplierSolutionPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans }}>
      <Nav forceSolid />
      <main>
        <section style={{ padding: "clamp(118px,16vh,168px) clamp(28px,6vw,96px) clamp(74px,10vh,112px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <p style={eyebrow}>Suppliers and manufacturers</p>
            <h1 style={heroTitle}>Pharmaceutical supplier coordination for institutional procurement.</h1>
            <p style={heroCopy}>
              Niora helps suppliers and manufacturers coordinate with hospitals and health systems through better demand visibility, order tracking, payment coordination, and fulfillment workflows.
            </p>
          </div>
        </section>

        <section style={{ padding: "0 clamp(28px,6vw,96px) clamp(86px,12vh,132px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", borderTop: "1px solid #DDD1B6" }}>
            {capabilities.map(([title, body]) => (
              <article key={title} style={{ display: "grid", gridTemplateColumns: "minmax(220px,360px) 1fr", gap: "clamp(24px,5vw,72px)", padding: "28px 0", borderBottom: "1px solid #DDD1B6" }} className="seo-two-col">
                <h2 style={rowTitle}>{title}</h2>
                <p style={rowCopy}>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ padding: "0 clamp(28px,6vw,96px) clamp(86px,12vh,132px)" }}>
          <div style={{ maxWidth: 980, margin: "0 auto", background: "#DCD0BE", borderRadius: 8, padding: "clamp(34px,5vw,58px)" }}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.16, margin: "0 0 18px", color: "#221D18" }}>
              Part of a more accountable procurement system.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.72, color: "#4C463D", margin: "0 0 28px", maxWidth: "60ch" }}>
              Supplier coordination is connected to the same operating record as hospital inventory planning, purchasing, financing, ordering, and delivery.
            </p>
            <Link href="/platform" style={cta}>See the platform</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #DDD1B6", padding: "32px clamp(28px,6vw,96px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "14px 28px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
        <Link href="/markets/ghana" style={footerLink}>Ghana market</Link>
      </div>
    </footer>
  );
}

const eyebrow: CSSProperties = { fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: ACCENT, margin: "0 0 20px" };
const heroTitle: CSSProperties = { fontFamily: serif, fontWeight: 400, fontSize: "clamp(40px,5.4vw,72px)", lineHeight: 1.06, color: "#221D18", margin: "0 0 26px", maxWidth: "18ch", textWrap: "balance" };
const heroCopy: CSSProperties = { fontFamily: serif, fontWeight: 300, fontSize: "clamp(19px,2vw,25px)", lineHeight: 1.5, color: "#4A443B", margin: 0, maxWidth: "58ch", textWrap: "pretty" };
const rowTitle: CSSProperties = { fontFamily: sans, fontWeight: 700, fontSize: 20, lineHeight: 1.3, color: "#221D18", margin: 0 };
const rowCopy: CSSProperties = { fontSize: 16, lineHeight: 1.7, color: "#4C463D", margin: 0, maxWidth: "62ch" };
const cta: CSSProperties = { display: "inline-flex", color: "#F4EFE2", background: "#15110D", borderRadius: 999, padding: "12px 22px", fontSize: 14.5, fontWeight: 600, textDecoration: "none" };
const footerLink: CSSProperties = { fontSize: 14, color: "#857B6C", textDecoration: "none" };
