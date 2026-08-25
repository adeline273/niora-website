"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import Image from "next/image";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const ACCENT = "#8E6C2E";
const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";

const eyebrow: React.CSSProperties = {
  fontFamily: sans,
  fontSize: 12.5,
  fontWeight: 600,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: ACCENT,
  margin: 0,
};

const container: React.CSSProperties = { maxWidth: 1180, margin: "0 auto" };
const sectionPad = "clamp(70px,11vh,128px) clamp(34px,6vw,96px)";

const DEMO_ITEMS = [
  { title: "Inventory signals", desc: "Near-expiry and low-stock lines surfaced before they disrupt supply.", rect: { left: 0.7, top: 29, width: 31.9, height: 68 } },
  { title: "Finance cycle", desc: "Procurement spend reconciled against managed lines and reorder timing.", rect: { left: 34, top: 29, width: 32.5, height: 68 } },
  { title: "Operations status", desc: "Ordering and tender activity tracked across the workspace.", rect: { left: 68, top: 29, width: 31.9, height: 68 } },
];

const HORIZON_ITEMS = [
  { title: "Hospitals & health systems", desc: "Plan inventory with confidence and reduce reactive purchasing.", cx: 150, cy: 88 },
  { title: "Suppliers & manufacturers", desc: "Coordinate capacity against demand that is visible ahead of time.", cx: 213, cy: 163 },
  { title: "Financing partners", desc: "Underwrite procurement against a shared, accountable record.", cx: 101, cy: 208 },
];

export default function Home() {
  const [demoSelected, setDemoSelected] = useState(0);
  const [horizonSelected, setHorizonSelected] = useState(0);
  const jsonLd = [organizationJsonLd(), websiteJsonLd()];

  const sel = DEMO_ITEMS[demoSelected];
  const highlightStyle: React.CSSProperties = {
    position: "absolute",
    left: sel.rect.left + "%",
    top: sel.rect.top + "%",
    width: sel.rect.width + "%",
    height: sel.rect.height + "%",
    border: `2px solid ${ACCENT}`,
    borderRadius: 8,
    boxShadow: "0 0 0 2000px rgba(21,17,13,.48)",
    transition: "all .4s cubic-bezier(.4,0,.2,1)",
    pointerEvents: "none",
  };

  return (
    <div style={{ background: "#F4F1EA", color: "#2A2521", fontFamily: sans, minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* Hero */}
      <section id="top" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center", background: "#15110D" }}>
        <video autoPlay muted loop playsInline preload="auto" poster="/assets/hero-poster.png" aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, filter: "saturate(.9) contrast(1.02) brightness(.88)" }}>
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(21,17,13,.62)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1180, margin: "0 auto", padding: "clamp(124px,20vh,210px) clamp(34px,6vw,96px) clamp(96px,16vh,168px)" }}>
          <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(40px,5.6vw,78px)", lineHeight: 1.06, letterSpacing: "-.018em", color: "#F7F2E7", margin: "0 0 30px", maxWidth: "17ch", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
            Infrastructure for reliable medicine procurement.
          </h1>
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(18px,1.8vw,23px)", lineHeight: 1.55, color: "#D8CEBC", margin: "0 0 40px", maxWidth: "48ch", textWrap: "pretty" as React.CSSProperties["textWrap"] }}>
            Niora builds pharmaceutical procurement infrastructure for hospitals and health systems, starting in Ghana. We connect inventory visibility, demand forecasting, purchasing, financing, supplier coordination, ordering, delivery, and accountability into one coordinated system.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 30px" }}>
            <a href="/signup"
              style={{ fontFamily: sans, fontWeight: 600, fontSize: 15, letterSpacing: ".01em", color: "#15110D", background: "#E9C589", padding: "12px 24px", borderRadius: 8, textDecoration: "none", transition: "background .3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F2D69E")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E9C589")}>
              Request platform access
            </a>
            <a href="/platform"
              style={{ fontFamily: sans, fontWeight: 500, fontSize: 15, letterSpacing: ".01em", color: "#EFE7D4", textDecoration: "none", borderBottom: "1px solid rgba(239,231,212,.4)", paddingBottom: 3, transition: "border-color .3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "rgba(239,231,212,.95)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(239,231,212,.4)")}>
              Explore the platform
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ padding: sectionPad }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(32px,4.6vw,58px)", lineHeight: 1.14, letterSpacing: "-.012em", color: "#28231E", margin: "0 0 clamp(44px,6vh,64px)", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
            When procurement becomes hard to predict,{" "}
            <em style={{ fontStyle: "italic", borderBottom: `1px solid ${ACCENT}`, paddingBottom: 2 }}>uncertainty spreads through the system</em>.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "clamp(24px,3vw,32px)" }}>
            <div style={{ background: "#ECE3CF", borderRadius: 10, padding: "clamp(28px,3vw,36px)" }}>
              <h3 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(19px,1.7vw,23px)", lineHeight: 1.25, letterSpacing: "-.005em", color: "#221D18", margin: "0 0 14px" }}>Planning is fragmented.</h3>
              <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.66, color: "#4C463D", margin: 0 }}>Demand, inventory, purchasing, and financing are managed across disconnected systems and manual workflows. Institutions struggle to maintain a clear picture of future needs.</p>
            </div>
            <div style={{ background: "#ECE3CF", borderRadius: 10, padding: "clamp(28px,3vw,36px)" }}>
              <h3 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(19px,1.7vw,23px)", lineHeight: 1.25, letterSpacing: "-.005em", color: "#221D18", margin: "0 0 14px" }}>Institutions lose their footing.</h3>
              <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.66, color: "#4C463D", margin: 0 }}>Hospitals struggle to plan inventory. Suppliers face delayed payments and fluctuating demand.</p>
            </div>
            <div style={{ background: "#ECE3CF", borderRadius: 10, padding: "clamp(28px,3vw,36px)" }}>
              <h3 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(19px,1.7vw,23px)", lineHeight: 1.25, letterSpacing: "-.005em", color: "#221D18", margin: "0 0 14px" }}>Purchasing turns reactive.</h3>
              <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.66, color: "#4C463D", margin: 0 }}>Buying becomes reactive rather than proactive, leaving a system that is less reliable for everyone who depends on it.</p>
            </div>
          </div>

          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(26px,3.2vw,38px)", lineHeight: 1.42, color: "#221D18", margin: "clamp(56px,7vh,80px) auto 0", textAlign: "center", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
            Niora develops infrastructure that helps make procurement more predictable, transparent, and accountable.
          </p>
        </div>
      </section>

      {/* In the Field */}
      <section aria-label="In the field" style={{ position: "relative", overflow: "hidden", background: "#28231E" }}>
        <Image src="/assets/field-photo.png" alt="Night distribution: stock being moved into a supply point"
          fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 46%", opacity: 0.5 }} loading="lazy" />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(28,23,18,.62)" }} />
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "clamp(110px,22vh,220px) clamp(34px,6vw,96px)" }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(34px,4.8vw,60px)", lineHeight: 1.1, letterSpacing: "-.014em", color: "#F4EFE2", margin: "0 0 22px", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
            Stronger institutions are built on{" "}
            <em style={{ fontStyle: "italic", borderBottom: "1px solid #D8B477", paddingBottom: 2 }}>predictable systems</em>.
          </h2>
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(18px,1.9vw,23px)", lineHeight: 1.5, color: "#D9CFBC", margin: 0, maxWidth: "44ch", textWrap: "pretty" as React.CSSProperties["textWrap"] }}>
            Niora is the coordination layer between institutions and suppliers, connecting procurement, financing, and delivery into a more reliable system.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" style={{ padding: sectionPad, scrollMarginTop: 72 }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(280px,380px)", columnGap: "clamp(48px,7vw,100px)", rowGap: 40, alignItems: "center" }} className="approach-grid">
            <div>
              <p style={{ ...eyebrow, marginBottom: 20 }}>Our Approach</p>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px,3.8vw,48px)", lineHeight: 1.16, letterSpacing: "-.012em", color: "#28231E", margin: "0 0 28px", maxWidth: "16ch", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
                Built as market infrastructure.
              </h2>
              <p style={{ fontFamily: sans, fontSize: 19, lineHeight: 1.68, color: "#3A342C", margin: 0, maxWidth: "52ch", textWrap: "pretty" as React.CSSProperties["textWrap"] }}>
                Pharmaceutical markets depend on reliable coordination between hospitals, pharmacies, suppliers, financiers, and regulators. We build the infrastructure that improves how those markets operate, beginning with medicine procurement in Ghana.
              </p>
            </div>
            <figure className="approach-photo" style={{ margin: 0 }}>
              <div style={{ borderRadius: 6, overflow: "hidden" }}>
                <Image src="/assets/pharmacy-dakar.png"
                  alt="A pharmacy at street level in Dakar, where reliable supply meets the people who depend on it"
                  width={890} height={1124}
                  style={{ display: "block", width: "100%", height: "auto", aspectRatio: "4/5", objectFit: "cover" }} loading="lazy" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Advisors band */}
      <section style={{ padding: "clamp(36px,5vh,56px) clamp(34px,6vw,96px)" }}>
        <div style={container}>
          <div style={{ background: "#DCD0BE", borderRadius: 20, padding: "clamp(44px,6vh,68px) clamp(36px,5vw,64px)" }}>
            <p style={{ ...eyebrow, marginBottom: 24 }}>Advisors &amp; Collaborators</p>
            <p style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.28, color: "#221D18", margin: "0 0 36px", maxWidth: "32ch", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
              Our work is shaped by{" "}
              <em style={{ fontStyle: "italic" }}>clinicians, pharmacists, and procurement leaders</em>{" "}
              across health systems.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 40px", fontFamily: sans, fontSize: "clamp(15px,1.4vw,18px)", color: "#5A5240" }}>
              {["Korle-Bu Teaching Hospital", "The Trust Hospital", "Stanford University", "Palace Pharmacy"].map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform demo */}
      <section style={{ padding: sectionPad }}>
        <div style={container}>
          <div style={{ maxWidth: 900, marginBottom: "clamp(40px,6vh,64px)" }}>
            <p style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.4, color: "#221D18", margin: 0, textWrap: "balance" as React.CSSProperties["textWrap"] }}>
              <a href="/platform" style={{ color: "inherit", textDecorationColor: "rgba(142,108,46,.45)", textUnderlineOffset: 5 }}>Our platform</a>{" "}
              shows the{" "}
              <em style={{ fontStyle: "italic" }}>operational layer</em>{" "}
              of our infrastructure, where inventory, financing, and ordering are reconciled into a single, accountable record.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(220px,280px) 1fr", gap: "clamp(36px,6vw,72px)", alignItems: "center" }} className="platform-grid">
            <div>
              {DEMO_ITEMS.map((item, i) => {
                const active = i === demoSelected;
                return (
                  <div key={item.title}
                    style={{ borderTop: i === 0 ? "none" : "1px solid #DDD1B6", padding: "20px 0", cursor: "pointer" }}
                    onClick={() => setDemoSelected(i)}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0, background: active ? ACCENT : "transparent", border: `1.5px solid ${active ? ACCENT : "#B9AD8E"}`, transition: "background .25s ease", display: "inline-block" }} />
                      <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 17, color: active ? "#221D18" : "#6B6252", margin: 0, transition: "color .25s ease" }}>{item.title}</p>
                    </div>
                    {active && (
                      <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.6, color: "#5A5247", margin: "8px 0 0" }}>{item.desc}</p>
                    )}
                  </div>
                );
              })}
            </div>

            <figure style={{ margin: 0 }}>
              <div style={{ position: "relative", overflow: "hidden", background: "#FBF9F3", border: "1px solid #DDD1B6", borderRadius: 7 }}>
                <Image src="/assets/niora-overview.png" alt="Niora workspace operations overview: inventory, finance, and ordering"
                  width={1200} height={800}
                  style={{ display: "block", width: "100%", height: "auto" }} loading="lazy" />
                <div style={highlightStyle} />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" style={{ padding: sectionPad, scrollMarginTop: 72 }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(160px,290px) minmax(0,1fr)", columnGap: "clamp(40px,6vw,120px)", rowGap: 24, alignItems: "start" }} className="asym-grid">
            <div>
              <p style={{ ...eyebrow, margin: 0 }}>Research</p>
            </div>
            <div>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.5vw,44px)", lineHeight: 1.14, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 26px", maxWidth: "20ch", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
                <a href="/research" style={{ color: "inherit", textDecorationColor: "rgba(142,108,46,.45)", textUnderlineOffset: 5 }}>Evidence through implementation.</a>
              </h2>
              <p style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.72, color: "#4C463D", margin: "0 0 40px", maxWidth: "60ch", textWrap: "pretty" as React.CSSProperties["textWrap"] }}>
                We work alongside health systems and academic collaborators to study pharmaceutical procurement as it functions in practice. By combining real-world implementation with research, we generate evidence that informs both better products and stronger procurement systems.
              </p>
              <div style={{ borderTop: "1px solid #DDD1B6" }}>
                {[
                  { publisher: "World Bank", title: "The enforcement of commercial contracts in Ghana", href: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/243141468251416080" },
                  { publisher: "Ministry of Health", title: "Ghana Health Supply Chain Master Plan 2025–2029", href: "https://www.moh.gov.gh/wp-content/uploads/2025/02/Ghana_HSCMP_2025-2029_Final-Print-Version_17January2025.pdf" },
                  { publisher: "Stanford CIGH", title: "International collaboration takes on global antibiotic shortages", href: "https://globalhealth.stanford.edu/sash/sash-scholar-dr-joycelyn-dame-and-stanford-undergraduate-adeline-liao-collaborate-to-reduce-drug-stockouts-in-ghanas-largest-hospitals.html/" },
                ].map(({ publisher, title, href }) => (
                  <ResearchRow key={title} publisher={publisher} title={title} href={href} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Horizon */}
      <section style={{ padding: sectionPad }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(160px,290px) minmax(0,1fr)", columnGap: "clamp(40px,6vw,120px)", rowGap: 24, alignItems: "start" }} className="asym-grid">
            <div>
              <p style={{ ...eyebrow, margin: "0 0 clamp(22px,3vh,32px)" }}>The Horizon</p>
              <div style={{ position: "relative", aspectRatio: "1", maxWidth: 280, background: "radial-gradient(circle at 50% 46%, rgba(142,108,46,.14), rgba(142,108,46,0) 62%)" }}>
                <svg viewBox="0 0 300 300" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                  <circle cx="150" cy="150" r="118" fill="none" stroke="#C9BE9E" strokeWidth="1.3" />
                  <ellipse cx="150" cy="150" rx="68" ry="118" fill="none" stroke="#D3C9AC" strokeWidth="1" />
                  <ellipse cx="150" cy="150" rx="28" ry="118" fill="none" stroke="#D3C9AC" strokeWidth="1" />
                  <line x1="150" y1="32" x2="150" y2="268" stroke="#D3C9AC" strokeWidth="1" />
                  <ellipse cx="150" cy="150" rx="118" ry="30" fill="none" stroke="#D3C9AC" strokeWidth="1" />
                  {HORIZON_ITEMS.map((node, i) => {
                    const active = i === horizonSelected;
                    return (
                      <circle key={node.title} cx={node.cx} cy={node.cy} r={active ? 6 : 4}
                        fill={active ? ACCENT : "#F4F1EA"} stroke={active ? ACCENT : "#9A8E73"}
                        strokeWidth="1.5" onClick={() => setHorizonSelected(i)}
                        style={{ cursor: "pointer", transition: "r .25s ease, fill .25s ease" }} />
                    );
                  })}
                </svg>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.5vw,44px)", lineHeight: 1.14, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 26px", maxWidth: "18ch", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
                A long-term infrastructure problem.
              </h2>
              <p style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.72, color: "#4C463D", margin: "0 0 18px", maxWidth: "54ch", textWrap: "pretty" as React.CSSProperties["textWrap"] }}>
                Reliable procurement is foundational to effective health systems. Over time, it shapes how medicines move, how suppliers allocate resources, how hospitals manage uncertainty, and how systems respond to changing demand.
              </p>
              <div style={{ borderTop: "1px solid #DDD1B6" }}>
                {HORIZON_ITEMS.map((item, i) => {
                  const active = i === horizonSelected;
                  return (
                    <div key={item.title}
                      style={{ borderTop: i === 0 ? "none" : "1px solid #DDD1B6", padding: "18px 0", cursor: "pointer" }}
                      onClick={() => setHorizonSelected(i)}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: active ? ACCENT : "transparent", border: `1.5px solid ${active ? ACCENT : "#B9AD8E"}`, transition: "background .25s ease", display: "inline-block" }} />
                        <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 15, letterSpacing: ".01em", color: active ? "#221D18" : "#6B6252", margin: 0, transition: "color .25s ease" }}>{item.title}</p>
                      </div>
                      <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.6, color: "#5A5247", margin: "6px 0 0 19px", maxWidth: "30ch" }}>{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ position: "relative", overflow: "hidden", padding: "clamp(96px,17vh,184px) clamp(34px,6vw,96px)", background: "#241F1A", scrollMarginTop: 72 }}>
        <Image src="/assets/contact-bg.png" alt="" aria-hidden="true" fill sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "72% 38%", opacity: 0.4 }} loading="lazy" />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(28,23,18,.72)" }} />
        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto" }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(32px,4.6vw,58px)", lineHeight: 1.08, letterSpacing: "-.014em", color: "#F4EFE2", margin: "0 0 30px", maxWidth: "18ch", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
            The foundation for reliable procurement.
          </h2>
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(19px,2vw,24px)", lineHeight: 1.5, color: "#D9CFBC", margin: "0 0 44px", maxWidth: "40ch" }}>
            Infrastructure for procurement that is predictable, trusted, and built for long-term operation.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "14px 28px" }}>
            <span style={{ fontFamily: sans, fontSize: 15, color: "#B6AB97" }}>For collaboration and inquiries</span>
            <a href="mailto:operations@niorasystems.com" className="contact-email"
              style={{ fontFamily: serif, fontSize: "clamp(20px,2.4vw,27px)", color: "#E9C589", textDecoration: "none", borderBottom: "1px solid rgba(233,197,137,.4)", paddingBottom: 2, transition: "border-color .25s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "rgba(233,197,137,.95)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(233,197,137,.4)")}>
              operations@niorasystems.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #DDD1B6", padding: "clamp(44px,7vh,72px) clamp(34px,6vw,96px) clamp(36px,5vh,56px)" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "minmax(200px,280px) repeat(3,minmax(120px,1fr))", gap: "32px 40px" }} className="footer-grid">
          <div>
            <p style={{ fontFamily: sans, fontWeight: 700, fontSize: 16, color: "#221D18", margin: "0 0 14px" }}>Niora Systems</p>
            <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: "#857B6C", margin: 0 }}>Infrastructure for reliable medicine procurement.</p>
          </div>
          <div>
            <p style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, color: "#221D18", margin: "0 0 16px" }}>Site</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["/approach", "Approach"], ["/markets/ghana", "Ghana"], ["/research", "Research"], ["/careers", "Careers"], ["/contact", "Contact"]].map(([href, label]) => (
                <FooterLink key={href} href={href}>{label}</FooterLink>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, color: "#221D18", margin: "0 0 16px" }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <FooterLink href="mailto:operations@niorasystems.com">operations@niorasystems.com</FooterLink>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, color: "#221D18", margin: "0 0 16px" }}>Locations</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: sans, fontSize: 14.5, color: "#857B6C" }}>
              <span>Accra</span>
              <span>Stanford</span>
            </div>
          </div>
        </div>
        <div style={{ ...container, marginTop: "clamp(36px,5vh,56px)", paddingTop: 22, borderTop: "1px solid #E4D9C2", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {[
                  { href: "https://www.linkedin.com/company/niora-systems/", label: "LinkedIn", icon: <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/></svg> },
              { href: "https://www.instagram.com/niorasystems/", label: "Instagram", icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
              { href: "https://x.com/NioraSystems", label: "X", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { href: "https://www.youtube.com/@NioraSystems", label: "YouTube", icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ color: "#9A8E73", textDecoration: "none", display: "flex", alignItems: "center", transition: "color .2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2A2521")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9A8E73")}
              >{icon}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ResearchRow({ publisher, title, href }: { publisher: string; title: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="research-row"
      style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: 24, alignItems: "baseline", padding: "20px 4px", borderBottom: "1px solid #DDD1B6", textDecoration: "none", color: "#2A2521", transition: "background .3s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#EEE6D5")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
      <span style={{ fontFamily: "var(--font-franklin), system-ui, sans-serif", fontSize: 13.5, color: "#9A8E73", letterSpacing: ".02em", lineHeight: 1.4 }}>{publisher}</span>
      <span style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, fontWeight: 400, color: "#28231E" }}>{title}</span>
      <span className="research-tag" style={{ fontFamily: "var(--font-franklin), system-ui, sans-serif", fontSize: 14, color: ACCENT, whiteSpace: "nowrap" }}>Reference →</span>
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href}
      style={{ fontSize: 14.5, color: "#857B6C", textDecoration: "none", fontFamily: "var(--font-franklin), system-ui, sans-serif" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#857B6C")}>
      {children}
    </a>
  );
}
