import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/platform"));

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const steps = [
  ["Inventory signals", "Niora brings stock, near-expiry, and low-stock signals into view before they disrupt medicine availability."],
  ["Demand planning", "Hospitals and procurement teams can plan purchasing around clearer forecasts and institutional demand."],
  ["Procurement workflows", "Purchasing activity is coordinated through a shared operating layer rather than fragmented manual handoffs."],
  ["Supplier coordination", "Suppliers and manufacturers can coordinate fulfillment against demand that is visible ahead of time."],
  ["Financing and payment workflows", "Procurement spend, payment timing, and financing coordination can be reconciled against the same record."],
  ["Ordering and delivery", "Orders and delivery status are tracked as part of the procurement system, not as disconnected follow-up work."],
  ["Accountable records", "The platform creates a more auditable view of procurement decisions, order history, and operational status."],
];

export default function PlatformPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans }}>
      <Nav forceSolid activeLink="platform" />
      <main>
        <section style={{ padding: "clamp(118px,16vh,168px) clamp(28px,6vw,96px) clamp(70px,10vh,104px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <p style={eyebrow}>Platform</p>
            <h1 style={heroTitle}>A coordinated system for pharmaceutical procurement.</h1>
            <p style={heroCopy}>
              Niora connects inventory visibility, demand forecasting, procurement, supplier coordination, financing, ordering, delivery, and accountable records for institutional medicine procurement.
            </p>
          </div>
        </section>

        <section style={{ padding: "0 clamp(28px,6vw,96px) clamp(86px,12vh,132px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(240px,360px) 1fr", gap: "clamp(36px,7vw,92px)" }} className="seo-two-col">
            <aside>
              <h2 style={sideTitle}>Built for institutional coordination.</h2>
              <p style={sideCopy}>
                The platform is designed for the operational work that sits between hospitals, pharmacies, suppliers, financing partners, and procurement teams.
              </p>
              <Link href="/signup" style={cta}>Request access</Link>
            </aside>
            <div style={{ borderTop: "1px solid #DDD1B6" }}>
              {steps.map(([title, body]) => (
                <article key={title} style={{ padding: "24px 0", borderBottom: "1px solid #DDD1B6" }}>
                  <h2 style={rowTitle}>{title}</h2>
                  <p style={rowCopy}>{body}</p>
                </article>
              ))}
            </div>
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
        <Link href="/markets/ghana" style={footerLink}>Pharmaceutical procurement in Ghana</Link>
      </div>
    </footer>
  );
}

const eyebrow: CSSProperties = { fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: ACCENT, margin: "0 0 20px" };
const heroTitle: CSSProperties = { fontFamily: serif, fontWeight: 400, fontSize: "clamp(40px,5.4vw,72px)", lineHeight: 1.06, color: "#221D18", margin: "0 0 26px", maxWidth: "15ch", textWrap: "balance" };
const heroCopy: CSSProperties = { fontFamily: serif, fontWeight: 300, fontSize: "clamp(19px,2vw,25px)", lineHeight: 1.5, color: "#4A443B", margin: 0, maxWidth: "54ch", textWrap: "pretty" };
const sideTitle: CSSProperties = { fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.16, color: "#28231E", margin: "0 0 18px" };
const sideCopy: CSSProperties = { fontSize: 16, lineHeight: 1.7, color: "#5A5247", margin: "0 0 26px" };
const rowTitle: CSSProperties = { fontFamily: sans, fontWeight: 700, fontSize: 20, color: "#221D18", margin: "0 0 8px" };
const rowCopy: CSSProperties = { fontSize: 16, lineHeight: 1.7, color: "#4C463D", margin: 0, maxWidth: "66ch" };
const cta: CSSProperties = { display: "inline-flex", color: "#F4EFE2", background: "#15110D", borderRadius: 999, padding: "12px 22px", fontSize: 14.5, fontWeight: 600, textDecoration: "none" };
const footerLink: CSSProperties = { fontSize: 14, color: "#857B6C", textDecoration: "none" };
