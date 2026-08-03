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

export default function CareersPage() {
  const [teamFilter, setTeamFilter] = useState("All Teams");
  const [officeFilter, setOfficeFilter] = useState("All Offices");
  const [search, setSearch] = useState("");

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
          <select
            value={teamFilter}
            onChange={(e) => setTeamFilter(e.target.value)}
            style={{ fontFamily: sans, fontSize: 15, color: "#2A2521", background: "#FBF9F3", border: "1px solid #D8CBA8", borderRadius: 8, padding: "12px 18px", minWidth: 180, cursor: "pointer" }}
          >
            <option value="All Teams">All Teams</option>
            <option value="Engineering">Engineering</option>
            <option value="Operations">Operations</option>
            <option value="Partnerships">Partnerships</option>
          </select>
          <select
            value={officeFilter}
            onChange={(e) => setOfficeFilter(e.target.value)}
            style={{ fontFamily: sans, fontSize: 15, color: "#2A2521", background: "#FBF9F3", border: "1px solid #D8CBA8", borderRadius: 8, padding: "12px 18px", minWidth: 180, cursor: "pointer" }}
          >
            <option value="All Offices">All Offices</option>
            <option value="Accra">Accra</option>
            <option value="Stanford">Stanford</option>
            <option value="Remote">Remote</option>
          </select>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search roles"
            style={{ fontFamily: sans, fontSize: 15, color: "#2A2521", background: "#FBF9F3", border: "1px solid #D8CBA8", borderRadius: 8, padding: "12px 18px", minWidth: 220, flex: 1 }}
          />
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
          <Link
            key={role.href}
            href={role.href}
            className="careers-row"
            style={{ display: "grid", gridTemplateColumns: "1fr 160px 140px 100px", alignItems: "center", padding: "22px 4px", borderBottom: "1px solid #DDD1B6", textDecoration: "none", color: "inherit" }}
          >
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
      </main>

      <footer style={{ borderTop: "1px solid #DDD1B6", padding: "clamp(28px,4vh,40px) clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
        </div>
      </footer>

      <style>{`
        .careers-row { transition: background .18s ease; }
        .careers-row:hover { background: #EDE6D6; }
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
