import Link from "next/link";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-source-sans), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

export default function CareersPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans, WebkitFontSmoothing: "antialiased" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(28px,5vh,56px) clamp(22px,5vw,64px) clamp(80px,12vh,128px)" }}>

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(48px,8vh,80px)", flexWrap: "wrap", gap: 16 }}>
          <Link href="/" style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: "#2A2521", textDecoration: "none" }}>Niora</Link>
          <Link href="/" style={{ fontFamily: sans, fontSize: 14, color: "#857B6C", textDecoration: "none" }}>← Back to niorasystems.com</Link>
        </div>

        {/* Header row */}
        <div style={{ marginBottom: "clamp(48px,7vh,72px)" }}>
          <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(40px,6vw,72px)", lineHeight: 1.04, letterSpacing: "-.022em", color: "#28231E", margin: 0 }}>
            Join our team.
          </h1>
        </div>

        {/* Table header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "0 24px", padding: "0 0 12px", borderBottom: "1px solid #2A2521" }} className="role-table-header">
          {["Team", "Role", "Location"].map(col => (
            <span key={col} style={{ fontFamily: sans, fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#7C7263" }}>{col}</span>
          ))}
          <span />
        </div>

        {/* Role row */}
        <Link
          href="/careers/full-stack-engineer"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "0 24px", alignItems: "center", padding: "26px 0", borderBottom: "1px solid #DDD1B6", textDecoration: "none", color: "inherit", transition: "background .18s ease" }}
          className="role-row"
        >
          <span style={{ fontFamily: sans, fontSize: 16, color: "#4C463D" }}>Engineering</span>
          <span style={{ fontFamily: serif, fontSize: 19, fontWeight: 400, color: "#28231E" }}>Full-Stack Engineer</span>
          <span style={{ fontFamily: sans, fontSize: 15, color: "#6A6152" }}>Remote · Accra, Ghana</span>
          <span style={{ fontFamily: sans, fontSize: 14, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap" }}>View role →</span>
        </Link>

        {/* Footer note */}
        <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.65, color: "#9A8E73", marginTop: "clamp(48px,7vh,72px)", maxWidth: "46ch" }}>
          Don't see a role that fits? Reach us at{" "}
          <a href="mailto:operations@niorasystems.com" style={{ color: ACCENT, textDecoration: "none", borderBottom: "1px solid rgba(142,108,46,.35)" }}>
            operations@niorasystems.com
          </a>.
        </p>
      </div>

      <style>{`
        .role-row:hover { background: #EDE6D6; }
        @media (max-width: 700px) {
          .role-table-header { display: none !important; }
          .role-row {
            grid-template-columns: 1fr auto !important;
            grid-template-rows: auto auto auto;
            row-gap: 4px !important;
          }
          .role-row span:nth-child(1) { grid-column: 1; font-size: 12px !important; color: #9A8E73 !important; }
          .role-row span:nth-child(2) { grid-column: 1; }
          .role-row span:nth-child(3) { grid-column: 1; }
          .role-row span:nth-child(4) { grid-column: 2; grid-row: 1 / 4; align-self: center; }
        }
      `}</style>
    </div>
  );
}
