"use client";

import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import CoordinationDiagram from "@/components/CoordinationDiagram";
import CompoundingNetwork from "@/components/CompoundingNetwork";
import PlatformFigure from "@/components/PlatformFigure";

const ACCENT = "#8E6C2E";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-source-sans), system-ui, sans-serif";

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

const asymGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(160px,290px) minmax(0,1fr)",
  columnGap: "clamp(40px,6vw,120px)",
  rowGap: 24,
  alignItems: "start",
};

const sectionPad = "clamp(70px,11vh,128px) clamp(34px,6vw,96px)";

export default function Home() {
  return (
    <div style={{ background: "#F4F1EA", color: "#2A2521", fontFamily: sans, minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section id="top" style={{ padding: "clamp(54px,10vh,118px) clamp(34px,6vw,96px) clamp(48px,8vh,92px)" }}>
        <div style={container}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))", gap: "clamp(40px,6vw,84px)", alignItems: "center" }}>
            <div>
              <ScrollReveal delay={80}>
                <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(40px,4.8vw,74px)", lineHeight: 1.05, letterSpacing: "-.018em", color: "#23201B", margin: "0 0 30px", maxWidth: "15ch", textWrap: "balance" as React.CSSProperties["textWrap"] }}>
                  Infrastructure for reliable medicine procurement.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <p style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(19px,1.9vw,25px)", lineHeight: 1.5, color: "#3A342C", margin: "0 0 34px", paddingLeft: 20, borderLeft: `2px solid ${ACCENT}`, maxWidth: "40ch" }}>
                  Niora is the coordination layer between institutions and suppliers — connecting procurement, financing, and delivery into a more reliable system.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={220}>
                <p style={{ margin: "0 0 30px" }}>
                  <a
                    href="#approach"
                    style={{ color: ACCENT, textDecoration: "none", fontFamily: sans, fontWeight: 500, fontSize: 16, letterSpacing: ".01em" }}
                    onMouseEnter={(e) => { e.currentTarget.style.textDecoration = "underline"; e.currentTarget.style.textUnderlineOffset = "5px"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.textDecoration = "none"; }}
                  >
                    Read our approach&nbsp;&nbsp;→
                  </a>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={280}>
                <div style={{ display: "flex", gap: 16, alignItems: "center", fontFamily: sans, fontSize: 11.5, letterSpacing: ".15em", textTransform: "uppercase", color: "#9A8E73" }}>
                  <span>DEVELOPED FOR TRUST, RELIABILITY, AND SCALE</span>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={180} style={{ justifySelf: "center", width: "100%", maxWidth: 480 }}>
              <CoordinationDiagram />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ padding: sectionPad, borderTop: "1px solid #DDD1B6" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "baseline", gap: 18, margin: "0 0 16px" }}>
              <span style={{ fontFamily: serif, fontSize: 30, lineHeight: 1, color: ACCENT }}>01</span>
              <span style={eyebrow}>The Problem</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.5vw,44px)", lineHeight: 1.14, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 clamp(40px,6vh,60px)", maxWidth: "22ch" }}>
              When procurement becomes hard to predict, uncertainty spreads through the system.
            </h2>
          </ScrollReveal>

          <div className="problem-cards" style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", justifyContent: "center", gap: 0 }}>
            {/* Card 01 — Cause */}
            <ScrollReveal delay={60} className="problem-card" style={{ flex: "1 1 240px", minWidth: 208 }}>
              <article style={{ background: "#ECE3CF", border: "1px solid #DBCDAE", borderRadius: 14, padding: "clamp(26px,2.4vw,34px)", display: "flex", flexDirection: "column", gap: 18, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: serif, fontSize: 26, color: ACCENT }}>01</span>
                  <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#9A8E73" }}>Cause</span>
                </div>
                <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px,2vw,27px)", lineHeight: 1.18, color: "#28231E", margin: 0 }}>Planning is fragmented.</h3>
                <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.66, color: "#4C463D", margin: 0 }}>Demand, inventory, purchasing, and financing are often managed across disconnected systems and manual workflows. Institutions struggle to maintain a clear picture of future needs.</p>
                <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid #D6C8A8", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <span style={{ fontFamily: sans, fontSize: 10.5, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "#9A8E73" }}>Leads to</span>
                  <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 16, color: "#5A5240" }}>Planning breaks down</span>
                </div>
              </article>
            </ScrollReveal>

            {/* Arrow 1→2 */}
            <ScrollReveal delay={180} className="problem-arrow">
              <div aria-hidden="true" style={{ flex: "0 0 auto", alignSelf: "center", position: "relative", width: "clamp(22px,2.4vw,56px)", height: 24 }}>
                <span style={{ position: "absolute", left: 2, right: 12, top: "50%", height: 1, background: "linear-gradient(90deg,rgba(142,108,46,.15),rgba(142,108,46,.55))" }} />
                <span style={{ position: "absolute", right: 6, top: "50%", width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: `7px solid ${ACCENT}`, animation: "nioraArrow 2.6s ease-in-out infinite" }} />
                <span style={{ position: "absolute", top: "50%", marginTop: -2.5, width: 5, height: 5, borderRadius: "50%", background: ACCENT, animation: "nioraFlow 3.4s ease-in-out infinite .2s" }} />
              </div>
            </ScrollReveal>

            {/* Card 02 — Effect */}
            <ScrollReveal delay={260} className="problem-card" style={{ flex: "1 1 240px", minWidth: 208 }}>
              <article style={{ background: "#ECE3CF", border: "1px solid #DBCDAE", borderRadius: 14, padding: "clamp(26px,2.4vw,34px)", display: "flex", flexDirection: "column", gap: 18, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: serif, fontSize: 26, color: ACCENT }}>02</span>
                  <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#9A8E73" }}>Effect</span>
                </div>
                <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px,2vw,27px)", lineHeight: 1.18, color: "#28231E", margin: 0 }}>Institutions lose their footing.</h3>
                <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.66, color: "#4C463D", margin: 0 }}>Hospitals struggle to plan inventory. Suppliers face delayed payments and fluctuating demand.</p>
                <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid #D6C8A8", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <span style={{ fontFamily: sans, fontSize: 10.5, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "#9A8E73" }}>Leads to</span>
                  <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 16, color: "#5A5240" }}>Reactive purchasing</span>
                </div>
              </article>
            </ScrollReveal>

            {/* Arrow 2→3 */}
            <ScrollReveal delay={380} className="problem-arrow">
              <div aria-hidden="true" style={{ flex: "0 0 auto", alignSelf: "center", position: "relative", width: "clamp(22px,2.4vw,56px)", height: 24 }}>
                <span style={{ position: "absolute", left: 2, right: 12, top: "50%", height: 1, background: "linear-gradient(90deg,rgba(142,108,46,.15),rgba(142,108,46,.55))" }} />
                <span style={{ position: "absolute", right: 6, top: "50%", width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: `7px solid ${ACCENT}`, animation: "nioraArrow 2.6s ease-in-out infinite" }} />
                <span style={{ position: "absolute", top: "50%", marginTop: -2.5, width: 5, height: 5, borderRadius: "50%", background: ACCENT, animation: "nioraFlow 3.4s ease-in-out infinite 1.9s" }} />
              </div>
            </ScrollReveal>

            {/* Card 03 — Result (dark) */}
            <ScrollReveal delay={460} className="problem-card" style={{ flex: "1 1 240px", minWidth: 208 }}>
              <article style={{ background: "#28231E", border: "1px solid #28231E", borderRadius: 14, padding: "clamp(26px,2.4vw,34px)", display: "flex", flexDirection: "column", gap: 18, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: serif, fontSize: 26, color: "#D8B477" }}>03</span>
                  <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#A99B82" }}>Result</span>
                </div>
                <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px,2vw,27px)", lineHeight: 1.18, color: "#F4EFE2", margin: 0 }}>Purchasing turns reactive.</h3>
                <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.66, color: "#C7BCA6", margin: 0 }}>Buying becomes reactive rather than proactive — leaving a system that is less reliable for everyone who depends on it.</p>
                <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid #463E33", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <span style={{ fontFamily: sans, fontSize: 10.5, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "#A99B82" }}>Outcome</span>
                  <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 16, color: "#D8B477" }}>Lower reliability</span>
                </div>
              </article>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(20px,2.2vw,27px)", lineHeight: 1.5, color: "#3A342C", margin: "clamp(40px,6vh,60px) auto 0", maxWidth: "46ch", textAlign: "center" }}>
              Niora develops infrastructure that helps make procurement more predictable, transparent, and accountable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" style={{ padding: sectionPad, borderTop: "1px solid #DDD1B6", scrollMarginTop: 72 }}>
        <div style={container}>
          <div className="asym-grid" style={asymGrid}>
            <ScrollReveal>
              <div className="section-label" style={{ display: "flex", flexDirection: "column" }}>
                <div className="section-num" style={{ fontFamily: serif, fontSize: 30, fontWeight: 400, lineHeight: 1, color: ACCENT, margin: "0 0 12px" }}>02</div>
                <p style={eyebrow}>Our Approach</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.5vw,44px)", lineHeight: 1.14, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 26px", maxWidth: "18ch" }}>
                Built alongside health systems.
              </h2>
              <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(20px,2.2vw,26px)", lineHeight: 1.5, color: "#3A342C", margin: "0 0 26px", maxWidth: "34ch" }}>
                Procurement is often treated as an administrative process. In practice, it is one of the systems that determines whether medicines reach patients when they are needed.
              </p>
              <p className="body-text-lg" style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.72, color: "#4C463D", margin: 0, maxWidth: "60ch" }}>
                We believe durable infrastructure emerges from understanding how procurement functions in practice, including how decisions are made, how constraints are managed, and where uncertainty enters the system. We work to understand existing processes and strengthen the mechanisms that support reliability.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Advisors band */}
      <section style={{ background: "#ECE3CF", borderTop: "1px solid #D8CBA8", borderBottom: "1px solid #D8CBA8", padding: "clamp(52px,8vh,86px) clamp(34px,6vw,96px)" }}>
        <div style={container}>
          <ScrollReveal>
            <p style={{ ...eyebrow, marginBottom: 24 }}>Advisors &amp; Collaborators</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(21px,2.4vw,30px)", lineHeight: 1.42, color: "#33301F", margin: "0 0 36px", maxWidth: "30ch" }}>
              Our work is shaped by clinicians, pharmacists, and procurement leaders across health systems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 26px", fontFamily: serif, fontSize: "clamp(16px,1.6vw,20px)", color: "#5A5240" }}>
              {["Korle-Bu Teaching Hospital", "The Trust Hospital", "Stanford University", "Open Contracting Partnership"].map((name, i, arr) => (
                <>
                  <span key={name}>{name}</span>
                  {i < arr.length - 1 && <span key={`dot-${i}`} style={{ width: 5, height: 5, borderRadius: "50%", background: ACCENT, opacity: .6 }} />}
                </>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The System in Practice */}
      <section style={{ padding: sectionPad, borderTop: "1px solid #DDD1B6" }}>
        <div style={container}>
          <div style={{ maxWidth: 680, marginBottom: "clamp(40px,6vh,64px)" }}>
            <ScrollReveal><p style={eyebrow}>The System in Practice</p></ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.5vw,44px)", lineHeight: 1.14, letterSpacing: "-.01em", color: "#28231E", margin: "18px 0 24px", maxWidth: "20ch" }}>
                Coordination, made visible.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.72, color: "#4C463D", margin: 0, maxWidth: "62ch" }}>
                Our system shows the operational layer our infrastructure where inventory, financing, and ordering are reconciled into a single, accountable record.
              </p>
            </ScrollReveal>
          </div>
          <PlatformFigure />
        </div>
      </section>

      {/* Research */}
      <section id="research" style={{ padding: sectionPad, borderTop: "1px solid #DDD1B6", scrollMarginTop: 72 }}>
        <div style={container}>
          <div className="asym-grid" style={asymGrid}>
            <ScrollReveal>
              <div className="section-label" style={{ display: "flex", flexDirection: "column" }}>
                <div className="section-num" style={{ fontFamily: serif, fontSize: 30, fontWeight: 400, lineHeight: 1, color: ACCENT, margin: "0 0 12px" }}>03</div>
                <p style={eyebrow}>Research</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.5vw,44px)", lineHeight: 1.14, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 26px", maxWidth: "20ch" }}>
                Studying procurement as it functions in practice.
              </h2>
              <p className="body-text-lg" style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.72, color: "#4C463D", margin: "0 0 40px", maxWidth: "60ch" }}>
                We document how procurement decisions are coordinated and executed, and publish selected findings from our work with health systems. Our research treats procurement as a systems problem requiring coordination, transparency, and trust.
              </p>
              <div style={{ borderTop: "1px solid #DDD1B6" }}>
                {[
                  { year: "2026", title: "On the predictability of hospital procurement" },
                  { year: "2025", title: "Coordinating demand and supply across health systems" },
                  { year: "2025", title: "Financing, delays, and the reliability of access" },
                ].map(({ year, title }) => (
                  <ResearchRow key={title} year={year} title={title} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Horizon */}
      <section style={{ padding: sectionPad, borderTop: "1px solid #DDD1B6" }}>
        <div style={container}>
          <div className="asym-grid" style={asymGrid}>
            <ScrollReveal>
              <div className="section-label" style={{ display: "flex", flexDirection: "column" }}>
                <div className="section-num" style={{ fontFamily: serif, fontSize: 30, fontWeight: 400, lineHeight: 1, color: ACCENT, margin: "0 0 12px" }}>04</div>
                <p style={eyebrow}>The Horizon</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.5vw,44px)", lineHeight: 1.14, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 26px", maxWidth: "18ch" }}>
                A long-term infrastructure problem.
              </h2>
              <p className="body-text-lg" style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.72, color: "#4C463D", margin: "0 0 18px", maxWidth: "54ch" }}>
                Reliable procurement is foundational to effective health systems. Over time, it shapes how medicines move, how suppliers allocate resources, how hospitals manage uncertainty, and how systems respond to changing demand.
              </p>
              <p className="body-text-lg" style={{ fontFamily: sans, fontSize: 18, lineHeight: 1.72, color: "#4C463D", margin: 0, maxWidth: "54ch" }}>
                Lasting improvement isn't better forecasting alone. It is infrastructure that participants can plan around, trust, and operate within.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <CompoundingNetwork />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "clamp(80px,14vh,160px) clamp(34px,6vw,96px)", borderTop: "1px solid #D8CBA8", background: "#ECE3CF", scrollMarginTop: 72 }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <ScrollReveal><p style={{ ...eyebrow, marginBottom: 26 }}>Partnerships and Institutional Engagement</p></ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(34px,5.2vw,66px)", lineHeight: 1.06, letterSpacing: "-.016em", color: "#23201B", margin: "0 0 30px", maxWidth: "18ch" }}>
              The foundation of reliable health systems.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic", fontSize: "clamp(20px,2.2vw,27px)", lineHeight: 1.5, color: "#3A342C", margin: "0 0 44px", maxWidth: "40ch" }}>
              Procurement systems that participants can plan around, trust, and operate within — consistently.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "14px 28px" }}>
              <span style={{ fontFamily: sans, fontSize: 15, color: "#6F665B" }}>For collaboration and inquiries</span>
              <a
                href="mailto:operations@niorasystems.com"
                className="contact-email"
                style={{ fontFamily: serif, fontSize: "clamp(22px,2.6vw,30px)", color: ACCENT, textDecoration: "none", borderBottom: "1px solid rgba(142,108,46,.4)", paddingBottom: 2, transition: "border-color .3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "rgba(142,108,46,.95)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(142,108,46,.4)")}
              >
                operations@niorasystems.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #DDD1B6", padding: "clamp(44px,7vh,72px) clamp(34px,6vw,96px) clamp(36px,5vh,56px)" }}>
        <div style={{ ...container, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "32px 48px" }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ fontFamily: serif, fontSize: 22, color: "#2A2521" }}>Niora</span>
            </div>
            <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: "#857B6C", margin: 0 }}>Infrastructure for reliable medicine procurement.</p>
          </div>
          <nav className="footer-nav" style={{ display: "flex", gap: "clamp(28px,5vw,64px)", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["#approach", "Approach"], ["#research", "Research"], ["#contact", "Contact"]].map(([href, label]) => (
                <FooterLink key={href} href={href}>{label}</FooterLink>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <FooterLink href="mailto:operations@niorasystems.com">operations@niorasystems.com</FooterLink>
              <span style={{ fontSize: 14, color: "#857B6C" }}>Accra · San Francisco</span>
            </div>
          </nav>
        </div>
        <div style={{ ...container, marginTop: "clamp(36px,5vh,56px)", paddingTop: 22, borderTop: "1px solid #E4D9C2", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
        </div>
      </footer>
    </div>
  );
}

function ResearchRow({ year, title }: { year: string; title: string }) {
  const sans = "var(--font-source-sans), system-ui, sans-serif";
  const serif = "var(--font-newsreader), Georgia, serif";
  return (
    <a
      href="#contact"
      className="research-row"
      style={{ display: "grid", gridTemplateColumns: "78px 1fr auto", gap: 24, alignItems: "baseline", padding: "20px 4px", borderBottom: "1px solid #DDD1B6", textDecoration: "none", color: "#2A2521", transition: "background .3s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#EEE6D5")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
    >
      <span style={{ fontFamily: sans, fontSize: 14, color: "#9A8E73", letterSpacing: ".04em" }}>{year}</span>
      <span style={{ fontFamily: serif, fontSize: 20, fontWeight: 400, color: "#28231E" }}>{title}</span>
      <span className="research-tag" style={{ fontFamily: sans, fontSize: 14, color: ACCENT, whiteSpace: "nowrap" }}>Working note →</span>
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const sans = "var(--font-source-sans), system-ui, sans-serif";
  return (
    <a
      href={href}
      style={{ fontSize: 14, color: "#4A443B", textDecoration: "none", fontFamily: sans }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#8E6C2E")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#4A443B")}
    >
      {children}
    </a>
  );
}
