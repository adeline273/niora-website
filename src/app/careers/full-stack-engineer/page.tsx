import Link from "next/link";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-source-sans), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const sectionLabel: React.CSSProperties = {
  fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: ".13em",
  textTransform: "uppercase", color: "#9A8E73", margin: "0 0 12px",
};

const body: React.CSSProperties = {
  fontFamily: sans, fontSize: 16, lineHeight: 1.75, color: "#4C463D", margin: "0 0 28px",
};

const ul: React.CSSProperties = {
  fontFamily: sans, fontSize: 16, lineHeight: 1.75, color: "#4C463D",
  margin: "0 0 32px", paddingLeft: 22, display: "flex" as React.CSSProperties["display"],
  flexDirection: "column" as React.CSSProperties["flexDirection"], gap: 6,
};

export default function FullStackEngineerPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans, WebkitFontSmoothing: "antialiased" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(28px,5vh,56px) clamp(22px,4vw,48px) clamp(80px,12vh,128px)" }}>

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: "clamp(40px,6vh,64px)", flexWrap: "wrap" }}>
          <Link href="/" style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, color: "#2A2521", textDecoration: "none" }}>Niora</Link>
          <Link href="/careers" style={{ fontFamily: sans, fontSize: 14, color: "#857B6C", textDecoration: "none" }}>← Back to careers</Link>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 280px", gap: "clamp(40px,5vw,80px)", alignItems: "start" }} className="jd-grid">

          {/* Main content */}
          <div>
            {/* Role header */}
            <div style={{ marginBottom: "clamp(36px,5vh,52px)" }}>
              <p style={{ fontFamily: sans, fontSize: 12.5, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: ACCENT, margin: "0 0 16px" }}>Engineering</p>
              <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(32px,4.5vw,52px)", lineHeight: 1.08, letterSpacing: "-.018em", color: "#28231E", margin: "0 0 20px" }}>
                Full-Stack Engineer
              </h1>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 14px" }}>
                {["Remote", "Accra, Ghana", "Full-time"].map((tag, i, arr) => (
                  <span key={tag} style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontFamily: sans, fontSize: 15, color: "#6A6152" }}>{tag}</span>
                    {i < arr.length - 1 && <span style={{ color: "#C4B89E" }}>·</span>}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ height: 1, background: "#DDD1B6", marginBottom: "clamp(32px,5vh,48px)" }} />

            {/* About */}
            <p style={sectionLabel}>About Niora Systems</p>
            <p style={body}>
              Niora Systems is building institutional procurement, payments, and financing infrastructure for institutions in emerging markets, starting with healthcare. Our platform helps hospitals and suppliers manage procurement, contract enforcement, payments, and supplier coordination through a unified digital system — making purchasing more reliable, transparent, and auditable.
            </p>
            <p style={{ ...body, marginBottom: 40 }}>
              We are currently deploying our platform with healthcare partners in Ghana, including Korle-Bu Teaching Hospital and Trust Hospital. Our long-term vision is to build the infrastructure layer for institutional commerce across emerging markets, beginning with healthcare procurement.
            </p>

            <div style={{ height: 1, background: "#E4D9C2", marginBottom: "clamp(28px,4vh,40px)" }} />

            {/* The Role */}
            <p style={sectionLabel}>The Role</p>
            <p style={{ ...body, marginBottom: 40 }}>
              We are looking for a Full-Stack Engineer to contribute to the design and execution of Niora's core platform. You will be working with our Lead Engineer in a small, high-ownership team and responsible for building and iterating on software used in our live deployments.
            </p>
            <p style={{ ...body, marginBottom: 40 }}>
              This role is ideal for someone who wants end-to-end ownership of a real system, to work close to users and operations, and to build infrastructure that is used in real institutions. You'll join at an early stage, helping shape the product itself. Engineers at Niora work directly with users, influence product direction, and see their work deployed in live operational environments.
            </p>

            <div style={{ height: 1, background: "#E4D9C2", marginBottom: "clamp(28px,4vh,40px)" }} />

            {/* What You'll Do */}
            <p style={sectionLabel}>What You'll Do</p>
            <ul style={ul}>
              <li>Contribute to the design and development of Niora's core platform, including procurement workflows, supplier management, payment orchestration, contract enforcement, and role-based access controls.</li>
              <li>Design and build frontend features while collaborating on full-stack architecture and backend integrations with our Lead Engineer.</li>
              <li>Work closely with operations and hospital stakeholders to translate real-world workflows into robust software.</li>
              <li>Oversee testing, debugging, and stabilization during pilot deployments.</li>
            </ul>

            <div style={{ height: 1, background: "#E4D9C2", marginBottom: "clamp(28px,4vh,40px)" }} />

            {/* What We're Looking For */}
            <p style={sectionLabel}>What We're Looking For</p>
            <ul style={ul}>
              <li>Strong experience building production software (full-stack with frontend-heavy expertise).</li>
              <li>Collaborative and able to work closely with a team and other developers.</li>
              <li>Comfort owning ambiguous problems and designing systems from first principles.</li>
              <li>Interest or experience in enterprise software, procurement systems, fintech, logistics, healthcare, or emerging markets.</li>
              <li>Ability to write clean, maintainable, well-documented code.</li>
              <li>Good judgment: knowing when to build simply and when to design for scale.</li>
            </ul>

            <div style={{ height: 1, background: "#E4D9C2", marginBottom: "clamp(28px,4vh,40px)" }} />

            {/* Work Environment */}
            <p style={sectionLabel}>Work Environment</p>
            <ul style={{ ...ul, marginBottom: 0 }}>
              <li>Primarily remote/hybrid, with in-person work sessions and on-the-ground responsibilities in Accra, Ghana.</li>
              <li>Small team, high trust, high autonomy.</li>
              <li>Direct collaboration with the founder, operators, and hospital partners.</li>
            </ul>
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: 32 }} className="jd-sidebar">
            <div style={{ background: "#FCFBF7", border: "1px solid #DAD0BA", borderRadius: 14, padding: "28px 24px", marginBottom: 16 }}>
              <p style={{ fontFamily: serif, fontSize: 20, fontWeight: 400, color: "#28231E", margin: "0 0 6px" }}>Full-Stack Engineer</p>
              <p style={{ fontFamily: sans, fontSize: 13.5, color: "#7C7263", margin: "0 0 22px" }}>Niora Systems</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {[
                  { label: "Location", value: "Remote · Accra, Ghana" },
                  { label: "Type", value: "Full-time" },
                  { label: "Team", value: "Engineering" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontFamily: sans, fontSize: 11.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#A99E8B" }}>{label}</span>
                    <span style={{ fontFamily: sans, fontSize: 14, color: "#4C463D" }}>{value}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://forms.gle/hSLHo3yrvsGvEKb86"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, fontFamily: sans, fontWeight: 600, fontSize: 15, color: "#F4EFE2", background: "#15110D", padding: "13px 20px", borderRadius: 10, textDecoration: "none", transition: "background .3s ease", textAlign: "center" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#2A2019")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#15110D")}
              >
                Apply for this role →
              </a>
            </div>

            <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: "#9A8E73", margin: 0 }}>
              Questions? Email us at{" "}
              <a href="mailto:operations@niorasystems.com" style={{ color: ACCENT, textDecoration: "none", borderBottom: "1px solid rgba(142,108,46,.35)" }}>
                operations@niorasystems.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .jd-grid { grid-template-columns: 1fr !important; }
          .jd-sidebar { position: static !important; order: -1; }
        }
      `}</style>
    </div>
  );
}
