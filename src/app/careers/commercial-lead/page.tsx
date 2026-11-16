"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const ROLE_PARAGRAPHS = [
  "We are looking for a Commercial Lead to drive supplier acquisition and commercial growth at Niora. You will be responsible for turning existing supplier relationships and new opportunities into active customers, managing the sales process from initial outreach through onboarding and recurring transactions.",
  "You'll join at an early stage, working directly with the founder and our team to build Niora's commercial operations. This is a hands-on sales role with significant ownership, not a marketing or advisory position. You'll be expected to speak directly with suppliers, understand their businesses, negotiate agreements, and close deals.",
  "This role is ideal for someone who has demonstrated success in B2B sales and wants the opportunity to build a commercial operation from the ground up. As Niora expands, you'll have the opportunity to shape our sales strategy, develop new markets, and grow into a broader commercial leadership role.",
];

const SECTIONS = [
  {
    heading: "What you'll do",
    items: [
      "Own supplier acquisition from initial outreach and existing introductions through negotiations, onboarding, and activation.",
      "Build relationships with pharmaceutical wholesalers, distributors, manufacturers, and their commercial decision-makers.",
      "Manage and convert an existing pipeline of supplier leads, ensuring consistent follow-up and progress toward commercial agreements.",
      "Demonstrate Niora's platform, understand suppliers' commercial needs, and communicate how our systems can improve their operations.",
      "Negotiate commercial terms, close supplier agreements, and drive recurring platform usage and revenue.",
      "Develop a structured sales process, track pipeline performance, and identify opportunities to improve conversion and expand our supplier network.",
      "Work closely with our founder, partnerships, and engineering teams to translate supplier feedback into product and commercial improvements.",
    ],
  },
  {
    heading: "What we're looking for",
    items: [
      "Demonstrated experience in B2B sales, business development, or account management, with a track record of personally closing deals.",
      "Strong commercial judgment and an understanding of how businesses make purchasing and operational decisions.",
      "Experience selling software, fintech, enterprise services, or commercial solutions to businesses. Experience in pharmaceutical distribution or healthcare is a plus.",
      "Ability to independently manage leads, conduct sales conversations, negotiate agreements, and follow through to completion.",
      "Excellent communication and relationship-building skills, particularly with business owners and senior commercial decision-makers.",
      "Organized, persistent, and comfortable being accountable for measurable sales outcomes.",
      "Ambition to build and eventually lead a commercial function, with the willingness to do hands-on sales work from day one.",
    ],
  },
  {
    heading: "Work Environment",
    items: [
      "Based in Accra, Ghana, with remote work and regular in-person meetings with suppliers and partners.",
      "Small team, high trust, high autonomy, and direct accountability for commercial results.",
      "Direct collaboration with the founder, partnerships team, and institutional customers.",
      "Opportunity to take ownership of supplier growth at an early-stage company and help build its commercial operations as we expand into new markets.",
    ],
  },
];

const h3Style: React.CSSProperties = { fontFamily: sans, fontWeight: 700, fontSize: 15, letterSpacing: ".02em", color: "#221D18", margin: "0 0 14px" };
const bodyStyle: React.CSSProperties = { fontFamily: sans, fontSize: 16, lineHeight: 1.75, color: "#4C463D" };
const listStyle: React.CSSProperties = { margin: "0 0 clamp(32px,4.5vh,44px)", padding: "0 0 0 20px", fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#4C463D", listStyleType: "disc" };
const divider = <div style={{ height: 1, background: "#E4D9C2", margin: "clamp(28px,4vh,40px) 0" }} />;

export default function CommercialLeadPage() {
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
          Commercial Lead
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", margin: "0 0 clamp(40px,6vh,56px)", fontFamily: sans, fontSize: 14.5, color: "#857B6C" }}>
          <span>Business Development</span>
          <span>·</span>
          <span>Accra, Ghana · Hybrid</span>
          <span>·</span>
          <span>Full-time</span>
        </div>

        <div style={{ borderTop: "1px solid #DDD1B6", paddingTop: "clamp(28px,4vh,40px)" }}>

          {/* Intro */}
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.55, color: "#3A342C", margin: "0 0 clamp(32px,4.5vh,44px)", maxWidth: "56ch" }}>
            Niora Systems is building institutional procurement, payments, and financing infrastructure for institutions in emerging markets, starting with healthcare. Our platform helps hospitals and suppliers manage procurement, contract enforcement, payments, and supplier coordination through a unified digital system — making purchasing more reliable, transparent, and auditable.
          </p>

          <p style={{ ...bodyStyle, margin: "0 0 clamp(32px,4.5vh,44px)" }}>
            We are currently deploying our platform with healthcare partners in Ghana, including Korle-Bu Teaching Hospital and Trust Hospital. Our long-term vision is to build the infrastructure layer for institutional commerce across emerging markets, beginning with healthcare procurement.
          </p>

          {divider}

          {/* The Role */}
          <h3 style={h3Style}>The Role</h3>
          {ROLE_PARAGRAPHS.map((text, i) => (
            <p key={i} style={{ ...bodyStyle, margin: i === ROLE_PARAGRAPHS.length - 1 ? "0 0 clamp(32px,4.5vh,44px)" : "0 0 20px" }}>
              {text}
            </p>
          ))}

          {SECTIONS.map(({ heading, items }, i) => (
            <div key={heading}>
              {divider}
              <h3 style={h3Style}>{heading}</h3>
              <ul style={i === SECTIONS.length - 1 ? { ...listStyle, margin: "0 0 clamp(40px,6vh,56px)" } : listStyle}>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <a
            href="https://forms.gle/4q2h55swE4pLw8Jc6"
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
