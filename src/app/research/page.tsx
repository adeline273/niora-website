import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import { getRoute, routeMetadata } from "@/lib/seo";

export const metadata: Metadata = routeMetadata(getRoute("/research"));

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const references = [
  {
    publisher: "World Bank",
    title: "The enforcement of commercial contracts in Ghana",
    href: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/243141468251416080",
    summary: "Reference material for understanding commercial coordination and contract enforcement in Ghana.",
  },
  {
    publisher: "Ministry of Health",
    title: "Ghana Health Supply Chain Master Plan 2025-2029",
    href: "https://www.moh.gov.gh/wp-content/uploads/2025/02/Ghana_HSCMP_2025-2029_Final-Print-Version_17January2025.pdf",
    summary: "Public health supply-chain planning context for Ghana's medicine and health commodity systems.",
  },
  {
    publisher: "Stanford CIGH",
    title: "International collaboration takes on global antibiotic shortages",
    href: "https://globalhealth.stanford.edu/sash/sash-scholar-dr-joycelyn-dame-and-stanford-undergraduate-adeline-liao-collaborate-to-reduce-drug-stockouts-in-ghanas-largest-hospitals.html/",
    summary: "A public note on research collaboration around drug stockouts in Ghana's largest hospitals.",
  },
];

export default function ResearchPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans }}>
      <Nav forceSolid activeLink="research" />
      <main>
        <section style={{ padding: "clamp(118px,16vh,168px) clamp(28px,6vw,96px) clamp(76px,11vh,118px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <p style={eyebrow}>Research</p>
            <h1 style={heroTitle}>Evidence through implementation.</h1>
            <p style={heroCopy}>
              Niora studies pharmaceutical procurement as it functions in practice, combining implementation with research to inform better products and stronger procurement systems.
            </p>
          </div>
        </section>

        <section style={{ padding: "0 clamp(28px,6vw,96px) clamp(86px,12vh,132px)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(240px,340px) 1fr", gap: "clamp(36px,7vw,92px)" }} className="seo-two-col">
            <aside>
              <h2 style={sideTitle}>A foundation for future notes.</h2>
              <p style={sideCopy}>
                This research index preserves the current references and leaves room for future original research notes on medicine stockouts, demand forecasting, procurement financing, inventory visibility, and institutional purchasing.
              </p>
            </aside>
            <div style={{ borderTop: "1px solid #DDD1B6" }}>
              {references.map((item) => (
                <article key={item.title} style={{ padding: "24px 0", borderBottom: "1px solid #DDD1B6" }}>
                  <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 9px" }}>{item.publisher}</p>
                  <h2 style={rowTitle}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecorationColor: "rgba(142,108,46,.4)", textUnderlineOffset: 4 }}>
                      {item.title}
                    </a>
                  </h2>
                  <p style={rowCopy}>{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer style={{ borderTop: "1px solid #DDD1B6", padding: "32px clamp(28px,6vw,96px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <span style={{ fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
        </div>
      </footer>
    </div>
  );
}

const eyebrow: CSSProperties = { fontFamily: sans, fontSize: 12.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: ACCENT, margin: "0 0 20px" };
const heroTitle: CSSProperties = { fontFamily: serif, fontWeight: 400, fontSize: "clamp(40px,5.4vw,72px)", lineHeight: 1.06, color: "#221D18", margin: "0 0 26px", maxWidth: "14ch", textWrap: "balance" };
const heroCopy: CSSProperties = { fontFamily: serif, fontWeight: 300, fontSize: "clamp(19px,2vw,25px)", lineHeight: 1.5, color: "#4A443B", margin: 0, maxWidth: "58ch", textWrap: "pretty" };
const sideTitle: CSSProperties = { fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.16, color: "#28231E", margin: "0 0 18px" };
const sideCopy: CSSProperties = { fontSize: 16, lineHeight: 1.7, color: "#5A5247", margin: 0 };
const rowTitle: CSSProperties = { fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px,2.5vw,30px)", lineHeight: 1.2, color: "#28231E", margin: "0 0 10px" };
const rowCopy: CSSProperties = { fontSize: 15.5, lineHeight: 1.7, color: "#4C463D", margin: 0, maxWidth: "62ch" };
