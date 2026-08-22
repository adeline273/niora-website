import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/solutions/hospitals"));

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const capabilities = [
  ["Inventory visibility", "Surface low-stock and near-expiry medicine lines earlier, so procurement teams can act with more context."],
  ["Demand planning", "Support hospital inventory forecasting and purchasing decisions with a clearer view of expected need."],
  ["Proactive purchasing", "Move from reactive buying toward planned medicine procurement workflows across teams."],
  ["Supplier coordination", "Coordinate institutional orders with suppliers through shared operational visibility."],
  ["Financing workflows", "Connect procurement planning with payment and financing coordination where appropriate."],
  ["Delivery visibility", "Track ordering and delivery status alongside the procurement record."],
  ["Auditability", "Maintain accountable records that help institutions understand procurement decisions and order history."],
];

export default function HospitalSolutionPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans }}>
      <Nav forceSolid activeLink="hospitals" />
      <main>
        <section style={{ padding: "clamp(118px,16vh,168px) clamp(28px,6vw,96px) clamp(74px,10vh,112px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <p style={eyebrow}>Hospitals and health systems</p>
            <h1 style={heroTitle}>Hospital pharmaceutical procurement with clearer operating visibility.</h1>
            <p style={heroCopy}>
              Niora supports hospital and health-system procurement teams as they plan inventory, coordinate suppliers, manage purchasing workflows, and maintain accountable records for medicine procurement.
            </p>
          </div>
        </section>

        <section style={{ padding: "0 clamp(28px,6vw,96px) clamp(86px,12vh,132px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 18 }}>
            {capabilities.map(([title, body]) => (
              <article key={title} style={{ background: "#ECE3CF", borderRadius: 8, padding: "24px 26px" }}>
                <h2 style={cardTitle}>{title}</h2>
                <p style={cardCopy}>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ background: "#28231E", padding: "clamp(74px,10vh,112px) clamp(28px,6vw,96px)" }}>
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px,4vw,50px)", lineHeight: 1.12, color: "#F4EFE2", margin: "0 0 20px" }}>
              Designed for procurement teams working inside real health systems.
            </h2>
            <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(18px,2vw,23px)", lineHeight: 1.52, color: "#D9CFBC", margin: "0 0 34px", maxWidth: "56ch" }}>
              The system is built for coordination across pharmacy, procurement, finance, operations, and supplier relationships.
            </p>
            <Link href="/signup" style={darkCta}>Request access</Link>
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
        <Link href="/solutions/suppliers" style={footerLink}>Supplier coordination</Link>
      </div>
    </footer>
  );
}

const eyebrow: CSSProperties = { fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: ACCENT, margin: "0 0 20px" };
const heroTitle: CSSProperties = { fontFamily: serif, fontWeight: 400, fontSize: "clamp(40px,5.4vw,72px)", lineHeight: 1.06, color: "#221D18", margin: "0 0 26px", maxWidth: "17ch", textWrap: "balance" };
const heroCopy: CSSProperties = { fontFamily: serif, fontWeight: 300, fontSize: "clamp(19px,2vw,25px)", lineHeight: 1.5, color: "#4A443B", margin: 0, maxWidth: "58ch", textWrap: "pretty" };
const cardTitle: CSSProperties = { fontFamily: sans, fontWeight: 700, fontSize: 19, lineHeight: 1.3, color: "#221D18", margin: "0 0 10px" };
const cardCopy: CSSProperties = { fontSize: 15.5, lineHeight: 1.68, color: "#4C463D", margin: 0 };
const darkCta: CSSProperties = { display: "inline-flex", color: "#15110D", background: "#E9C589", borderRadius: 999, padding: "12px 22px", fontSize: 14.5, fontWeight: 600, textDecoration: "none" };
const footerLink: CSSProperties = { fontSize: 14, color: "#857B6C", textDecoration: "none" };
