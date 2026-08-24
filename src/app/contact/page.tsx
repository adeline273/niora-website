"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const LABEL: React.CSSProperties = {
  display: "flex", flexDirection: "column", gap: 9,
};
const LABEL_TEXT: React.CSSProperties = {
  fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: ".1em",
  textTransform: "uppercase", color: "#8A8071",
};
const INPUT: React.CSSProperties = {
  fontFamily: sans, fontSize: 15.5, color: "#2A2521",
  background: "#FFFDF8", border: "1px solid #DDD1B6",
  borderRadius: 9, padding: "13px 15px",
  transition: "border-color .2s ease", width: "100%",
};

const CONFIG = {
  general: {
    title: "General inquiries",
    blurb: "Partnerships, research collaboration, press, and everything that does not fit elsewhere.",
    formTitle: "Send a general inquiry",
    formNote: "Tell us who you are and what you are working on. Our team will respond to your inquiry promptly.",
    selectLabel: "Nature of inquiry",
    options: ["Partnership", "Research collaboration", "Supplier or distributor", "Press or speaking", "Other"],
    messageLabel: "How can we help?",
    placeholder: "A few sentences about your organization and what you are hoping to explore.",
    submit: "Send inquiry",
  },
  support: {
    title: "Support",
    blurb: "Help for teams already running Niora — accounts, data, orders, and technical issues.",
    formTitle: "Contact support",
    formNote: "For live operational issues, include your institution and a detailed description of your issue.",
    selectLabel: "Priority",
    options: ["General question", "Order or delivery issue", "Account or access problem", "Urgent — service disruption"],
    messageLabel: "Describe the issue",
    placeholder: "What happened, when it started, and which part of the workflow is affected.",
    submit: "Submit request",
  },
  access: {
    title: "Request access",
    blurb: "For hospitals, pharmacies, and suppliers who want to onboard onto the platform.",
    formTitle: "Request platform access",
    formNote: "Onboarding starts with our sign-up form. Our team will follow up with next steps.",
    selectLabel: "Organization type",
    options: ["Hospital or clinic", "Pharmacy", "Supplier or manufacturer", "Financing partner", "Ministry or agency"],
    messageLabel: "About your organization",
    placeholder: "Facility size, current procurement process, and what you would like Niora to solve.",
    submit: "Request access",
  },
} as const;

type Purpose = keyof typeof CONFIG;

export default function ContactPage() {
  const [purpose, setPurpose] = useState<Purpose>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [detail, setDetail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cfg = CONFIG[purpose];

  const selectPurpose = (p: Purpose) => {
    setPurpose(p);
    setDetail("");
    setSent(false);
    setError("");
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ purpose, name, email, org, detail: detail || cfg.options[0], message }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Something went wrong — please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#F4F1EA", color: "#2A2521", fontFamily: sans, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav forceSolid activeLink="contact" />

      <main style={{ flex: 1, maxWidth: 1180, width: "100%", margin: "0 auto", padding: "clamp(108px,14vh,140px) clamp(24px,5vw,64px) clamp(88px,11vh,132px)" }}>

        {/* Heading */}
        <div style={{ maxWidth: 720 }}>
          <h1 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(38px,5.5vw,64px)", lineHeight: 1.04, letterSpacing: "-.025em", color: "#221D18", margin: "0 0 24px" }}>
            Get in touch with Niora
          </h1>
          <p style={{ fontFamily: serif, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.55, color: "#4A443B", margin: 0 }}>
            Whether you are exploring a partnership, need help with an existing deployment, or want access to the platform, our team will respond to your inquiry within 24–48 hours.
          </p>
        </div>

        {/* Purpose cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, margin: "clamp(48px,7vh,76px) 0 0" }}>
          {(Object.keys(CONFIG) as Purpose[]).map((key) => {
            const on = purpose === key;
            return (
              <div key={key} onClick={() => selectPurpose(key)}
                style={{ padding: "26px 26px 24px", borderRadius: 14, cursor: "pointer", transition: "background .2s ease, border-color .2s ease",
                  background: on ? "#DED5C2" : "#FBF9F3", border: `1px solid ${on ? "#DED5C2" : "#E3DBCC"}` }}>
                <span style={{ fontFamily: serif, fontSize: 23, color: "#221D18", display: "block", margin: "0 0 10px" }}>{CONFIG[key].title}</span>
                <span style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.6, color: "#5C554A", display: "block" }}>{CONFIG[key].blurb}</span>
              </div>
            );
          })}
        </div>

        {/* Form + aside */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr minmax(280px,340px)", gap: "clamp(40px,6vw,88px)", alignItems: "start", margin: "clamp(56px,8vh,88px) 0 0" }} className="contact-grid">

          {/* Form card */}
          <div style={{ background: "#FBF9F3", border: "1px solid #E3DBCC", borderRadius: 16, padding: "clamp(28px,3.4vw,44px)" }}>
            <h2 style={{ fontFamily: sans, fontWeight: 600, fontSize: 22, letterSpacing: "-.01em", color: "#221D18", margin: "0 0 8px" }}>{cfg.formTitle}</h2>
            <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.6, color: "#7C7264", margin: "0 0 32px", maxWidth: "52ch" }}>{cfg.formNote}</p>

            {sent ? (
              <div style={{ background: "#EDE8DC", borderRadius: 12, padding: 28 }}>
                <span style={{ fontFamily: serif, fontSize: 22, color: "#221D18", display: "block", margin: "0 0 8px" }}>Thank you — your message is on its way.</span>
                <span style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.6, color: "#5C554A", display: "block" }}>We reply to every inquiry, usually within two business days.</span>
              </div>
            ) : purpose === "access" ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20 }}>
                <Link href="/signup"
                  style={{ fontFamily: sans, fontSize: 15, fontWeight: 600, letterSpacing: ".01em", color: "#F4EFE2", background: "#15110D", padding: "14px 30px", borderRadius: 999, textDecoration: "none", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#15110D")}
                >
                  Go to the access form →
                </Link>
                <span style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.6, color: "#8A8071", maxWidth: "48ch" }}>
                  Prefer to talk first? Email{" "}
                  <a href="mailto:operations@niorasystems.com" style={{ color: ACCENT, textDecoration: "none", fontWeight: 600 }}>operations@niorasystems.com</a>
                  {" "}for any questions or inquiries.
                </span>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 22 }}>
                  <label style={LABEL}>
                    <span style={LABEL_TEXT}>Full name</span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ama Mensah" style={INPUT} />
                  </label>
                  <label style={LABEL}>
                    <span style={LABEL_TEXT}>Work email</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@hospital.org" style={INPUT} />
                  </label>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 22 }}>
                  <label style={LABEL}>
                    <span style={LABEL_TEXT}>Organization</span>
                    <input type="text" value={org} onChange={(e) => setOrg(e.target.value)} placeholder="Institution or company" style={INPUT} />
                  </label>
                  <label style={LABEL}>
                    <span style={LABEL_TEXT}>{cfg.selectLabel}</span>
                    <div style={{ position: "relative" }}>
                      <select value={detail || cfg.options[0]} onChange={(e) => setDetail(e.target.value)}
                        style={{ ...INPUT, paddingRight: 38, cursor: "pointer", appearance: "none" }}>
                        {cfg.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                      <span style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", fontSize: 11, color: "#9A8E73", pointerEvents: "none" }}>▾</span>
                    </div>
                  </label>
                </div>

                <label style={LABEL}>
                  <span style={LABEL_TEXT}>{cfg.messageLabel}</span>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={cfg.placeholder} rows={6}
                    style={{ ...INPUT, lineHeight: 1.6, resize: "vertical", minHeight: 120 }} />
                </label>

                {error && (
                  <p style={{ fontFamily: sans, fontSize: 14, color: "#B4462F", background: "#FDF2F0", borderRadius: 8, padding: "12px 16px", margin: 0 }}>{error}</p>
                )}

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginTop: 6 }}>
                  <span style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: "#8A8071", maxWidth: "34ch" }}>We use your details only to respond to this inquiry.</span>
                  <button onClick={handleSubmit} disabled={loading}
                    style={{ fontFamily: sans, fontSize: 15, fontWeight: 600, letterSpacing: ".01em", color: "#F4EFE2", background: loading ? "#4A4540" : "#15110D", border: "none", padding: "14px 30px", borderRadius: 999, cursor: loading ? "not-allowed" : "pointer", whiteSpace: "nowrap", transition: "background .2s ease" }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = ACCENT; }}
                    onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = loading ? "#4A4540" : "#15110D"; }}
                  >
                    {loading ? "Sending…" : cfg.submit}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Aside */}
          <aside style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "0 0 26px", borderBottom: "1px solid #DDD1B6" }}>
              <span style={{ display: "block", fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 12px" }}>Direct</span>
              <a href="mailto:operations@niorasystems.com" style={{ display: "block", fontFamily: serif, fontSize: 19, color: "#221D18", textDecoration: "none", margin: "0 0 6px" }}>operations@niorasystems.com</a>
              <span style={{ display: "block", fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: "#7C7264" }}>General and partnership inquiries.</span>
            </div>
            <div style={{ padding: "26px 0", borderBottom: "1px solid #DDD1B6" }}>
              <span style={{ display: "block", fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 12px" }}>Support</span>
              <a href="mailto:support@niorasystems.com" style={{ display: "block", fontFamily: serif, fontSize: 19, color: "#221D18", textDecoration: "none", margin: "0 0 6px" }}>support@niorasystems.com</a>
              <span style={{ display: "block", fontFamily: sans, fontSize: 14, lineHeight: 1.6, color: "#7C7264" }}>Existing deployments. Weekdays, 8:00–18:00 GMT.</span>
            </div>
            <div style={{ padding: "26px 0 0" }}>
              <span style={{ display: "block", fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 12px" }}>Working with us</span>
              <Link href="/careers" style={{ display: "block", fontFamily: sans, fontSize: 15, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>See open roles →</Link>
            </div>
          </aside>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #DDD1B6", padding: "clamp(28px,4vh,40px) clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
          <div style={{ display: "flex", gap: 26 }}>
            {[["/approach", "Approach"], ["/#research", "Research"], ["/careers", "Careers"]].map(([href, label]) => (
              <Link key={href} href={href} style={{ fontFamily: sans, fontSize: 14, color: "#857B6C", textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        input:focus, textarea:focus, select:focus { outline: none; border-color: #8E6C2E !important; }
        ::placeholder { color: #A99C82; opacity: 1; }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
