"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

export default function FullStackEngineerPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans }}>
      <Nav forceSolid activeLink="careers" />

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(108px,14vh,140px) clamp(24px,5vw,64px) clamp(80px,10vh,120px)" }}>
        <Link
          href="/careers"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, color: "#5A5247", textDecoration: "none", margin: "0 0 clamp(32px,5vh,48px)", fontFamily: sans }}
        >
          ← Back to Careers
        </Link>

        <h1 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(32px,4.4vw,48px)", letterSpacing: "-.015em", color: "#221D18", margin: "0 0 18px" }}>
          Full-Stack Engineer
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", margin: "0 0 clamp(40px,6vh,56px)", fontFamily: sans, fontSize: 14.5, color: "#857B6C" }}>
          <span>Engineering</span>
          <span>·</span>
          <span>Remote · Accra, Ghana</span>
          <span>·</span>
          <span>Full-time</span>
        </div>

        <div style={{ borderTop: "1px solid #DDD1B6", paddingTop: "clamp(28px,4vh,40px)" }}>

          {/* Intro */}
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.55, color: "#3A342C", margin: "0 0 clamp(32px,4.5vh,44px)", maxWidth: "56ch" }}>
            Niora Systems is building institutional procurement, payments, and financing infrastructure for institutions in emerging markets, starting with healthcare. Our platform helps hospitals and suppliers manage procurement, contract enforcement, payments, and supplier coordination through a unified digital system — making purchasing more reliable, transparent, and auditable.
          </p>

          <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.75, color: "#4C463D", margin: "0 0 clamp(32px,4.5vh,44px)" }}>
            We are currently deploying our platform with healthcare partners in Ghana, including Korle-Bu Teaching Hospital and Trust Hospital. Our long-term vision is to build the infrastructure layer for institutional commerce across emerging markets, beginning with healthcare procurement.
          </p>

          <div style={{ height: 1, background: "#E4D9C2", margin: "clamp(28px,4vh,40px) 0" }} />

          {/* The Role */}
          <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, letterSpacing: ".02em", color: "#221D18", margin: "0 0 14px" }}>The Role</h2>
          <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.75, color: "#4C463D", margin: "0 0 20px" }}>
            We are looking for a Full-Stack Engineer to contribute to the design and execution of Niora&apos;s core platform. You will be working with our Lead Engineer in a small, high-ownership team and responsible for building and iterating on software used in our live deployments.
          </p>
          <p style={{ fontFamily: sans, fontSize: 16, lineHeight: 1.75, color: "#4C463D", margin: "0 0 clamp(32px,4.5vh,44px)" }}>
            This role is ideal for someone who wants end-to-end ownership of a real system, to work close to users and operations, and to build infrastructure that is used in real institutions. You&apos;ll join at an early stage, helping shape the product itself. Engineers at Niora work directly with users, influence product direction, and see their work deployed in live operational environments.
          </p>

          <div style={{ height: 1, background: "#E4D9C2", margin: "clamp(28px,4vh,40px) 0" }} />

          {/* What you will do */}
          <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, letterSpacing: ".02em", color: "#221D18", margin: "0 0 14px" }}>What you&apos;ll do</h2>
          <ul style={{ margin: "0 0 clamp(32px,4.5vh,44px)", padding: "0 0 0 20px", fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#4C463D", listStyleType: "disc" }}>
            <li>Contribute to the design and development of Niora&apos;s core platform, including procurement workflows, supplier management, payment orchestration, contract enforcement, and role-based access controls.</li>
            <li>Design and build frontend features while collaborating on full-stack architecture and backend integrations with our Lead Engineer.</li>
            <li>Work closely with operations and hospital stakeholders to translate real-world workflows into robust software.</li>
            <li>Oversee testing, debugging, and stabilization during pilot deployments.</li>
          </ul>

          <div style={{ height: 1, background: "#E4D9C2", margin: "clamp(28px,4vh,40px) 0" }} />

          {/* What we are looking for */}
          <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, letterSpacing: ".02em", color: "#221D18", margin: "0 0 14px" }}>What we&apos;re looking for</h2>
          <ul style={{ margin: "0 0 clamp(32px,4.5vh,44px)", padding: "0 0 0 20px", fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#4C463D", listStyleType: "disc" }}>
            <li>Strong experience building production software (full-stack with frontend-heavy expertise).</li>
            <li>Collaborative and able to work closely with a team and other developers.</li>
            <li>Comfort owning ambiguous problems and designing systems from first principles.</li>
            <li>Interest or experience in enterprise software, procurement systems, fintech, logistics, healthcare, or emerging markets.</li>
            <li>Ability to write clean, maintainable, well-documented code.</li>
            <li>Good judgment: knowing when to build simply and when to design for scale.</li>
          </ul>

          <div style={{ height: 1, background: "#E4D9C2", margin: "clamp(28px,4vh,40px) 0" }} />

          {/* Work Environment */}
          <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, letterSpacing: ".02em", color: "#221D18", margin: "0 0 14px" }}>Work Environment</h2>
          <ul style={{ margin: "0 0 clamp(40px,6vh,56px)", padding: "0 0 0 20px", fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#4C463D", listStyleType: "disc" }}>
            <li>Primarily remote/hybrid, with in-person work sessions and on-the-ground responsibilities in Accra, Ghana.</li>
            <li>Small team, high trust, high autonomy.</li>
            <li>Direct collaboration with the founder, operators, and hospital partners.</li>
          </ul>

          {/* CTA */}
          <a
            href="https://forms.gle/hSLHo3yrvsGvEKb86"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", fontFamily: sans, fontWeight: 600, fontSize: 15, color: "#F4EFE2", background: "#15110D", textDecoration: "none", padding: "14px 28px", borderRadius: 999 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#15110D")}
          >
            Apply for this role
          </a>

          <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: "#9A8E73", margin: "20px 0 0" }}>
            Questions? Email us at{" "}
            <a href="mailto:operations@niorasystems.com" style={{ color: ACCENT, textDecoration: "none", borderBottom: "1px solid rgba(142,108,46,.35)" }}>
              operations@niorasystems.com
            </a>
          </p>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #DDD1B6", padding: "clamp(28px,4vh,40px) clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
        </div>
      </footer>
    </div>
  );
}
