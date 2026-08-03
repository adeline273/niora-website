import Link from "next/link";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-source-sans), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

export default function CareersPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans, WebkitFontSmoothing: "antialiased" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(28px,5vh,56px) clamp(22px,4vw,48px) clamp(80px,12vh,128px)" }}>

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: "clamp(56px,9vh,96px)", flexWrap: "wrap" }}>
          <Link href="/" style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: "#2A2521", textDecoration: "none" }}>Niora</Link>
          <Link href="/" style={{ fontFamily: sans, fontSize: 14, color: "#857B6C", textDecoration: "none" }}>← Back to niorasystems.com</Link>
        </div>

        {/* Heading */}
        <div style={{ maxWidth: 760, marginBottom: "clamp(48px,8vh,80px)" }}>
          <p style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: ACCENT, margin: "0 0 18px" }}>Careers</p>
          <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(36px,5vw,60px)", lineHeight: 1.06, letterSpacing: "-.02em", color: "#28231E", margin: "0 0 22px" }}>
            Work at Niora.
          </h1>
          <p style={{ fontFamily: sans, fontSize: 17, lineHeight: 1.7, color: "#6A6152", margin: 0, maxWidth: "52ch" }}>
            We are a small team building infrastructure used in real institutions. We hire for ownership, judgment, and the ability to work close to users and operations.
          </p>
        </div>

        {/* Open roles */}
        <div>
          <p style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 0" }}>Open roles</p>
          <div style={{ borderTop: "1px solid #DDD1B6", marginTop: 16 }}>

            <Link
              href="/careers/full-stack-engineer"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "28px 0", borderBottom: "1px solid #DDD1B6", textDecoration: "none", color: "inherit", transition: "background .2s ease" }}
              className="role-row"
            >
              <div>
                <p style={{ fontFamily: serif, fontSize: "clamp(20px,2.2vw,26px)", fontWeight: 400, color: "#28231E", margin: "0 0 8px" }}>Full-Stack Engineer</p>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "5px 12px" }}>
                  <span style={{ fontFamily: sans, fontSize: 14, color: "#7C7263" }}>Remote</span>
                  <span style={{ color: "#C4B89E", fontSize: 12 }}>·</span>
                  <span style={{ fontFamily: sans, fontSize: 14, color: "#7C7263" }}>Accra, Ghana</span>
                  <span style={{ color: "#C4B89E", fontSize: 12 }}>·</span>
                  <span style={{ fontFamily: sans, fontSize: 14, color: "#7C7263" }}>Full-time</span>
                </div>
              </div>
              <span style={{ fontFamily: sans, fontSize: 14, fontWeight: 600, color: ACCENT, whiteSpace: "nowrap", flexShrink: 0 }}>View role →</span>
            </Link>

          </div>
        </div>

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
        @media (max-width: 600px) {
          .role-row { flex-direction: column; align-items: flex-start !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
}
