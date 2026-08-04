"use client";

import Link from "next/link";
import { useState } from "react";
import Nav from "@/components/Nav";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const ALL_ROLES = [
  { title: "Full-Stack Engineer", team: "Engineering", location: "Accra", href: "/careers/full-stack-engineer" },
];

const FAQ = [
  {
    question: "What is it like working at Niora?",
    paragraphs: [
      "The purpose of Niora was to bring together the people, expertise, and resources needed to solve difficult problems. We believe that meaningful problems are rarely solved within a single discipline, so our team brings together expertise across engineering, pharmacy, health economics, and operations to build systems that are actually implemented.",
      "Ownership is real here. The people building the product are the same people shaping how it is implemented. We don't believe that, in the age of technology, building software alone is enough. You also need to understand the system you're building for and be able to carry that implementation into the real world.",
      "That's why our team spans Stanford University and healthcare institutions across Ghana. We work closely with researchers, pharmacists, hospitals, and on-the-ground operators because we believe the best systems are built where they will ultimately be used.",
      "We're also a small and close-knit team. We work hard, but we genuinely enjoy working together. We spend time debating ideas, learning from one another, and building friendships alongside the company.",
    ],
  },
  {
    question: "What do you look for when hiring?",
    paragraphs: [
      "We optimize for agency, judgment, reliability, responsibility, and professionalism.",
      "We're looking for builders—people who naturally take ownership rather than wait to be told what to do. We care far more about how you think, learn, and execute than whether you've done the exact same job before.",
      "Because our team works closely with hospitals, suppliers, researchers, and institutional partners, every team member represents the company. We expect people to communicate well, exercise good judgment, and take responsibility for the work they own.",
      "We're building something ambitious. That requires people who are equally ambitious about the quality of their work.",
    ],
  },
  {
    question: "What does a normal week look like?",
    paragraphs: [
      "Our team meets regularly to discuss company direction, product decisions, and strategy. Once we're aligned, each person has substantial autonomy over how they execute.",
      "Engineers design and build. Partnerships work directly with hospitals and stakeholders. Researchers and domain experts bring operational and economic insight into product decisions. Throughout the process, ideas move freely across disciplines because we believe better systems emerge when engineering, operations, and domain expertise inform one another.",
      "There is very little micromanagement. Everyone knows what they own, and everyone is trusted to lead it.",
    ],
  },
  {
    question: "What does ownership look like?",
    paragraphs: [
      "Ownership at Niora means leading problems from understanding to implementation.",
      "If you see a better way to solve something, we want to hear it. If you believe a product decision should change, you're expected to make the case for it. Engineers aren't here simply to implement specifications—they help shape what gets built in the first place.",
      "As the company grows, we're also open to exceptional people becoming part of the core team. For the right person, meaningful equity and leadership is absolutely on the table.",
    ],
  },
  {
    question: "What is the long-term vision of the company?",
    paragraphs: [
      "We're building the infrastructure behind institutional procurement in emerging markets, beginning with healthcare and our first deployments in Ghana.",
      "From the start, we've designed the company with international scale in mind. Our goal isn't simply to build software—it is to build the systems that make procurement markets more reliable, coordinated, and resilient across emerging markets.",
      "This is only the beginning.",
    ],
  },
];

export default function CareersPage() {
  const [teamFilter, setTeamFilter] = useState("All Teams");
  const [officeFilter, setOfficeFilter] = useState("All Offices");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const roles = ALL_ROLES.filter((r) => {
    const q = search.trim().toLowerCase();
    return (
      (teamFilter === "All Teams" || r.team === teamFilter) &&
      (officeFilter === "All Offices" || r.location === officeFilter) &&
      (!q || r.title.toLowerCase().includes(q))
    );
  });

  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans }}>
      <Nav forceSolid activeLink="careers" />

      <main style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(108px,14vh,140px) clamp(24px,5vw,64px) clamp(80px,10vh,120px)" }}>
        <h1 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(38px,5.5vw,64px)", letterSpacing: "-.02em", color: "#221D18", margin: "0 0 clamp(32px,5vh,48px)" }}>
          Join our team
        </h1>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, margin: "0 0 clamp(44px,6vh,64px)" }}>
          <select value={teamFilter} onChange={(e) => setTeamFilter(e.target.value)}
            style={{ fontFamily: sans, fontSize: 15, color: "#2A2521", background: "#FBF9F3", border: "1px solid #D8CBA8", borderRadius: 8, padding: "12px 18px", minWidth: 180, cursor: "pointer" }}>
            <option value="All Teams">All Teams</option>
            <option value="Engineering">Engineering</option>
            <option value="Operations">Operations</option>
            <option value="Partnerships">Partnerships</option>
          </select>
          <select value={officeFilter} onChange={(e) => setOfficeFilter(e.target.value)}
            style={{ fontFamily: sans, fontSize: 15, color: "#2A2521", background: "#FBF9F3", border: "1px solid #D8CBA8", borderRadius: 8, padding: "12px 18px", minWidth: 180, cursor: "pointer" }}>
            <option value="All Offices">All Offices</option>
            <option value="Accra">Accra</option>
            <option value="Stanford">Stanford</option>
            <option value="Remote">Remote</option>
          </select>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search roles"
            style={{ fontFamily: sans, fontSize: 15, color: "#2A2521", background: "#FBF9F3", border: "1px solid #D8CBA8", borderRadius: 8, padding: "12px 18px", minWidth: 220, flex: 1 }} />
        </div>

        {/* Table header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 140px 100px", padding: "0 4px 12px", borderBottom: "1px solid #DDD1B6" }} className="careers-table-header">
          {["Role", "Team", "Location"].map((col) => (
            <span key={col} style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#9A8E73" }}>{col}</span>
          ))}
          <span />
        </div>

        {/* Role rows */}
        {roles.map((role) => (
          <Link key={role.href} href={role.href} className="careers-row"
            style={{ display: "grid", gridTemplateColumns: "1fr 160px 140px 100px", alignItems: "center", padding: "22px 4px", borderBottom: "1px solid #DDD1B6", textDecoration: "none", color: "inherit" }}>
            <span style={{ fontFamily: serif, fontSize: 20, color: "#28231E" }}>{role.title}</span>
            <span style={{ fontFamily: sans, fontSize: 14.5, color: "#857B6C" }}>{role.team}</span>
            <span style={{ fontFamily: sans, fontSize: 14.5, color: "#857B6C" }}>{role.location}</span>
            <span style={{ justifySelf: "end", fontFamily: sans, fontSize: 14, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>View role →</span>
          </Link>
        ))}

        {roles.length === 0 && (
          <p style={{ fontFamily: sans, fontSize: 15, color: "#857B6C", margin: "32px 4px 0" }}>No roles match your filters.</p>
        )}

        {/* Footer note */}
        <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.65, color: "#9A8E73", marginTop: "clamp(48px,7vh,72px)", maxWidth: "46ch" }}>
          Don't see a role that fits? Reach us at{" "}
          <a href="mailto:operations@niorasystems.com" style={{ color: ACCENT, textDecoration: "none", borderBottom: "1px solid rgba(142,108,46,.35)" }}>
            operations@niorasystems.com
          </a>.
        </p>

        {/* How we think */}
        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "clamp(40px,6vw,96px)", margin: "clamp(96px,13vh,140px) 0 0" }} className="how-we-think-grid">
          <div>
            <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(30px,3.6vw,42px)", letterSpacing: "-.02em", color: "#221D18", margin: "0 0 16px" }}>
              How we think
            </h2>
            <p style={{ fontFamily: serif, fontSize: 19, lineHeight: 1.5, color: "#4A443B", margin: 0, maxWidth: 320 }}>
              The principles that shape how we build our team and our company.
            </p>
          </div>
          <div>
            {FAQ.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ borderBottom: "1px solid #DDD1B6" }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "26px 4px", cursor: "pointer", width: "100%", background: "none", border: "none", textAlign: "left" }}
                  >
                    <span style={{ fontFamily: sans, fontWeight: 600, fontSize: 19, color: "#221D18" }}>{item.question}</span>
                    <span style={{ fontFamily: sans, fontSize: 22, color: "#857B6C", flexShrink: 0 }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 4px 30px", display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
                      {item.paragraphs.map((para, j) => (
                        <p key={j} style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.7, color: "#4A443B", margin: 0 }}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #DDD1B6", padding: "clamp(28px,4vh,40px) clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
        </div>
      </footer>

      <style>{`
        .careers-row { transition: background .18s ease; }
        .careers-row:hover { background: #EDE6D6; }
        @media (max-width: 860px) {
          .how-we-think-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .careers-table-header { display: none !important; }
          .careers-row {
            grid-template-columns: 1fr auto !important;
            grid-template-rows: auto auto auto;
            row-gap: 4px !important;
          }
          .careers-row span:nth-child(1) { grid-column: 1; }
          .careers-row span:nth-child(2) { grid-column: 1; font-size: 13px !important; color: #9A8E73 !important; }
          .careers-row span:nth-child(3) { grid-column: 1; font-size: 13px !important; }
          .careers-row span:nth-child(4) { grid-column: 2; grid-row: 1 / 4; align-self: center; }
        }
      `}</style>
    </div>
  );
}
