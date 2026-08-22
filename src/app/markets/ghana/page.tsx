import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/markets/ghana"));

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const themes = [
  "Hospital inventory planning",
  "Medicine stockout risk",
  "Supplier coordination",
  "Procurement financing",
  "Ordering and delivery visibility",
  "Transparent procurement records",
];

export default function GhanaMarketPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans }}>
      <Nav forceSolid />
      <main>
        <section style={{ padding: "clamp(118px,16vh,168px) clamp(28px,6vw,96px) clamp(78px,11vh,120px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <p style={eyebrow}>Ghana</p>
            <h1 style={heroTitle}>Building more reliable pharmaceutical procurement systems in Ghana.</h1>
            <p style={heroCopy}>
              Niora is starting in Ghana, where our team works with healthcare institutions and procurement stakeholders from Accra to build infrastructure for medicine procurement, forecasting, ordering, delivery, financing coordination, and accountability.
            </p>
          </div>
        </section>

        <section style={{ padding: "0 clamp(28px,6vw,96px) clamp(86px,12vh,132px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(240px,390px) 1fr", gap: "clamp(36px,7vw,92px)" }} className="seo-two-col">
            <div>
              <h2 style={sectionTitle}>From fragmented workflows to shared operating visibility.</h2>
              <p style={bodyCopy}>
                Niora focuses on the coordination problems that shape pharmaceutical supply chains in Ghana: disconnected inventory views, delayed procurement signals, supplier uncertainty, payment coordination, and the operational work needed to keep essential medicines moving.
              </p>
              <Link href="/platform" style={cta}>Explore the platform</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
              {themes.map((theme) => (
                <article key={theme} style={{ background: "#ECE3CF", borderRadius: 8, padding: "22px 24px" }}>
                  <h2 style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.3, color: "#221D18", margin: 0 }}>{theme}</h2>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SimpleFooter />
    </div>
  );
}

function SimpleFooter() {
  return (
    <footer style={{ borderTop: "1px solid #DDD1B6", padding: "32px clamp(28px,6vw,96px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "14px 28px", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
        <Link href="/solutions/hospitals" style={footerLink}>Hospital procurement teams</Link>
      </div>
    </footer>
  );
}

const eyebrow: CSSProperties = { fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: ACCENT, margin: "0 0 20px" };
const heroTitle: CSSProperties = { fontFamily: serif, fontWeight: 400, fontSize: "clamp(40px,5.4vw,72px)", lineHeight: 1.06, color: "#221D18", margin: "0 0 26px", maxWidth: "17ch", textWrap: "balance" };
const heroCopy: CSSProperties = { fontFamily: serif, fontWeight: 300, fontSize: "clamp(19px,2vw,25px)", lineHeight: 1.5, color: "#4A443B", margin: 0, maxWidth: "58ch", textWrap: "pretty" };
const sectionTitle: CSSProperties = { fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.14, color: "#28231E", margin: "0 0 18px" };
const bodyCopy: CSSProperties = { fontSize: 16.5, lineHeight: 1.72, color: "#4C463D", margin: "0 0 28px" };
const cta: CSSProperties = { display: "inline-flex", color: "#F4EFE2", background: "#15110D", borderRadius: 999, padding: "12px 22px", fontSize: 14.5, fontWeight: 600, textDecoration: "none" };
const footerLink: CSSProperties = { fontSize: 14, color: "#857B6C", textDecoration: "none" };
