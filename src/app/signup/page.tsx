"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const labelStyle: React.CSSProperties = {
  fontFamily: sans, fontSize: 12, fontWeight: 600,
  letterSpacing: ".09em", textTransform: "uppercase", color: "#7C7263",
};

const inputBase: React.CSSProperties = {
  fontFamily: sans, fontSize: 16, color: "#2A2521",
  background: "#FBF9F3", border: "1px solid #D8CBA8",
  borderRadius: 9, padding: "12px 14px", outline: "none",
  width: "100%", transition: "border-color .2s ease, box-shadow .2s ease",
  appearance: "none" as React.CSSProperties["appearance"],
};

const textareaBase: React.CSSProperties = { ...inputBase, resize: "vertical" as React.CSSProperties["resize"], minHeight: 104, lineHeight: 1.55 };

const errStyle: React.CSSProperties = { fontFamily: sans, fontSize: 12.5, color: "#B4462F" };

interface Errors {
  name?: string; email?: string; org?: string; orgType?: string;
  role?: string; country?: string; orgSize?: string; useCase?: string; consent?: string;
}

export default function SignupPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const focusStyle = (name: string): React.CSSProperties =>
    focusedField === name
      ? { borderColor: ACCENT, boxShadow: "0 0 0 3px rgba(142,108,46,.13)" }
      : {};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const f = formRef.current;
    if (!f) return;

    const get = (n: string) => (f.elements.namedItem(n) as HTMLInputElement)?.value?.trim() ?? "";
    const name = get("name"), email = get("email"), org = get("org"), orgType = get("orgType");
    const role = get("role"), country = get("country"), orgSize = get("orgSize"), useCase = get("useCase");
    const referral = get("referral");
    const consent = (f.elements.namedItem("consent") as HTMLInputElement)?.checked;

    const err: Errors = {};
    if (!name) err.name = "Please enter your full name.";
    if (!email) err.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Enter a valid email address.";
    if (!org) err.org = "Please enter your organization.";
    if (!orgType) err.orgType = "Please select an organization type.";
    if (!role) err.role = "Please enter your role or title.";
    if (!country) err.country = "Please enter your city and country.";
    if (!orgSize) err.orgSize = "Please select an organization size.";
    if (!useCase) err.useCase = "Please tell us how you plan to use the platform.";
    if (!consent) err.consent = "Please confirm the statement above to continue.";

    if (Object.keys(err).length) {
      setErrors(err);
      const firstKey = (["name","email","org","orgType","role","country","orgSize","useCase","consent"] as const)
        .find(k => err[k]);
      if (firstKey) {
        const el = f.elements.namedItem(firstKey) as HTMLElement;
        el?.focus();
      }
      return;
    }

    setErrors({});
    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, org, orgType, role, country, orgSize, useCase, referral }),
      });

      if (!res.ok) throw new Error("server");

      setSubmittedName(name.split(" ")[0] || name);
      setSubmittedEmail(email);
      setSubmitted(true);
      f.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setServerError("Something went wrong — please try again or email us directly at operations@niorasystems.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F4F1EA", color: "#2A2521", fontFamily: sans }}>
      <Nav forceSolid />
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(108px,14vh,140px) clamp(22px,4vw,48px) clamp(48px,7vh,80px)" }}>

        {/* Heading */}
        <div style={{ maxWidth: "60ch", marginBottom: "clamp(26px,4vh,40px)" }}>
          <h1 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(38px,5.5vw,64px)", letterSpacing: "-.02em", color: "#221D18", margin: "0 0 16px" }}>
            Request access
          </h1>
          <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.6, color: "#6A6152", margin: 0, maxWidth: "56ch" }}>
            The Niora platform is granted to verified organizations only. Complete the form and our team will confirm your eligibility before providing access.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 290px", gap: "clamp(22px,2.6vw,34px)", alignItems: "start" }} className="access-grid">

          {/* Form card */}
          <div style={{ background: "#FCFBF7", borderRadius: 16, boxShadow: "0 18px 44px -34px rgba(42,37,33,.4)", padding: "clamp(26px,3.4vw,44px)" }}>

            {submitted ? (
              <div style={{ animation: "nioraAFade .5s ease both" }}>
                <div aria-hidden="true" style={{ width: 52, height: 52, borderRadius: "50%", background: "#EAF2E9", border: "1px solid #C4DCC0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <span style={{ color: "#3D7A46", fontSize: 24, lineHeight: 1 }}>✓</span>
                </div>
                <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,36px)", lineHeight: 1.1, letterSpacing: "-.015em", color: "#28231E", margin: "0 0 16px" }}>
                  Your request has been received.
                </h2>
                <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(17px,1.8vw,21px)", lineHeight: 1.5, color: "#4C463D", margin: "0 0 26px", maxWidth: "46ch" }}>
                  Thank you, {submittedName}. Our team will review your organization's eligibility and reply to{" "}
                  <strong style={{ fontWeight: 500, color: "#28231E" }}>{submittedEmail}</strong> within two business days.
                </p>
                <div style={{ borderTop: "1px solid #E4D9C2", paddingTop: 22, maxWidth: "48ch" }}>
                  <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.65, color: "#6A6152", margin: "0 0 20px" }}>
                    If your request is time-sensitive, reach our operations team directly at{" "}
                    <a href="mailto:operations@niorasystems.com" style={{ color: ACCENT, textDecoration: "none", borderBottom: "1px solid rgba(142,108,46,.4)" }}>
                      operations@niorasystems.com
                    </a>.
                  </p>
                  <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: sans, fontWeight: 600, fontSize: 15, color: "#F4EFE2", background: "#15110D", padding: "12px 22px", borderRadius: 12, textDecoration: "none" }}>
                    Return to homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 20px" }} className="form-row">
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelStyle}>Full name *</span>
                    <input name="name" type="text" autoComplete="name" placeholder="Ama Owusu"
                      style={{ ...inputBase, ...focusStyle("name") }}
                      onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} />
                    {errors.name && <span style={errStyle}>{errors.name}</span>}
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelStyle}>Email address *</span>
                    <input name="email" type="email" autoComplete="email" placeholder="you@organization.org"
                      style={{ ...inputBase, ...focusStyle("email") }}
                      onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} />
                    {errors.email && <span style={errStyle}>{errors.email}</span>}
                  </label>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 20px" }} className="form-row">
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelStyle}>Organization *</span>
                    <input name="org" type="text" autoComplete="organization" placeholder="Ministry of Health, Ghana"
                      style={{ ...inputBase, ...focusStyle("org") }}
                      onFocus={() => setFocusedField("org")} onBlur={() => setFocusedField(null)} />
                    {errors.org && <span style={errStyle}>{errors.org}</span>}
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelStyle}>Organization type *</span>
                    <select name="orgType" required defaultValue=""
                      style={{ ...inputBase, ...focusStyle("orgType"), backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%238E6C2E' stroke-width='1.6' fill='none' stroke-linecap='round'/></svg>")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 38, cursor: "pointer" }}
                      onFocus={() => setFocusedField("orgType")} onBlur={() => setFocusedField(null)}>
                      <option value="" disabled>Select one…</option>
                      <option>Health facility (hospital, health system, or pharmacy)</option>
                      <option>Supplier / Distributor</option>
                      <option>Ministry / Government agency</option>
                    </select>
                    {errors.orgType && <span style={errStyle}>{errors.orgType}</span>}
                  </label>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 20px" }} className="form-row">
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelStyle}>Role / title *</span>
                    <input name="role" type="text" autoComplete="organization-title" placeholder="Head of Procurement"
                      style={{ ...inputBase, ...focusStyle("role") }}
                      onFocus={() => setFocusedField("role")} onBlur={() => setFocusedField(null)} />
                    {errors.role && <span style={errStyle}>{errors.role}</span>}
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={labelStyle}>City &amp; country *</span>
                    <input name="country" type="text" autoComplete="address-level2" placeholder="Accra, Ghana"
                      style={{ ...inputBase, ...focusStyle("country") }}
                      onFocus={() => setFocusedField("country")} onBlur={() => setFocusedField(null)} />
                    {errors.country && <span style={errStyle}>{errors.country}</span>}
                  </label>
                </div>

                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>How many people does your organization serve? *</span>
                  <select name="orgSize" required defaultValue=""
                    style={{ ...inputBase, ...focusStyle("orgSize"), backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%238E6C2E' stroke-width='1.6' fill='none' stroke-linecap='round'/></svg>")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 38, cursor: "pointer" }}
                    onFocus={() => setFocusedField("orgSize")} onBlur={() => setFocusedField(null)}>
                    <option value="" disabled>Select a range…</option>
                    <option>Fewer than 10,000</option>
                    <option>10,000 – 100,000</option>
                    <option>100,000 – 1 million</option>
                    <option>1 – 10 million</option>
                    <option>More than 10 million</option>
                    <option>Not sure</option>
                  </select>
                  {errors.orgSize && <span style={errStyle}>{errors.orgSize}</span>}
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>How do you intend to use the platform? *</span>
                  <textarea name="useCase" rows={4} placeholder="Briefly describe your organization's role in procurement and what you're hoping to coordinate through Niora."
                    style={{ ...textareaBase, ...focusStyle("useCase") }}
                    onFocus={() => setFocusedField("useCase")} onBlur={() => setFocusedField(null)} />
                  {errors.useCase && <span style={errStyle}>{errors.useCase}</span>}
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>How did you hear about Niora? <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, color: "#A99E8B" }}>(optional)</span></span>
                  <input name="referral" type="text" placeholder="Colleague, event, publication…"
                    style={{ ...inputBase, ...focusStyle("referral") }}
                    onFocus={() => setFocusedField("referral")} onBlur={() => setFocusedField(null)} />
                </label>

                <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", marginTop: 2 }}>
                  <input name="consent" type="checkbox" style={{ flex: "none", marginTop: 3, width: 17, height: 17, accentColor: ACCENT, cursor: "pointer" }} />
                  <span style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.55, color: "#6A6152" }}>
                    I confirm that I am authorized to represent this organization and that the information provided is accurate.
                  </span>
                </label>
                {errors.consent && <span style={{ ...errStyle, marginTop: -14 }}>{errors.consent}</span>}

                {serverError && (
                  <p style={{ fontFamily: sans, fontSize: 14, color: "#B4462F", background: "#FDF2F0", borderRadius: 8, padding: "12px 16px", margin: 0 }}>
                    {serverError}
                  </p>
                )}

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 22px", marginTop: 6, paddingTop: 20, borderTop: "1px solid #E4D9C2" }}>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: sans, fontWeight: 600, fontSize: 15.5, letterSpacing: ".01em", color: "#F4EFE2", background: loading ? "#4A4540" : "#15110D", border: "none", padding: "14px 28px", borderRadius: 12, cursor: loading ? "not-allowed" : "pointer", transition: "background .3s ease" }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#2A2019"; }}
                    onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#15110D"; }}
                  >
                    {loading ? "Submitting…" : "Submit request →"}
                  </button>
                  <span style={{ fontFamily: sans, fontSize: 13, color: "#9A8E73" }}>We'll reply within two business days.</span>
                </div>
              </form>
            )}
          </div>

          {/* Side bubbles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }} className="aside-col">
            {[
              { title: "Verified institutions only", body: "Every request is reviewed manually to protect the integrity of shared procurement data." },
              { title: "Reviewed within two business days", body: "Our team confirms eligibility and follows up by email with next steps." },
              { title: "Used only to verify eligibility", body: "Your details are never shared and are used solely to assess your request." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: "#EDE8DC", borderRadius: 13, padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 7 }}>
                  <span aria-hidden="true" style={{ flex: "none", width: 7, height: 7, borderRadius: "50%", background: "#E9C589" }} />
                  <p style={{ fontFamily: sans, fontSize: 14.5, fontWeight: 600, color: "#28231E", margin: 0 }}>{title}</p>
                </div>
                <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.55, color: "#7C7263", margin: 0 }}>{body}</p>
              </div>
            ))}
            <p style={{ fontFamily: sans, fontSize: 13.5, color: "#9A8E73", margin: "6px 0 0" }}>
              Already a member? Check your email for your sign-in link.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes nioraAFade { from { opacity:0; transform:translateY(9px) } to { opacity:1; transform:translateY(0) } }
        input::placeholder, textarea::placeholder { color:#B3A891; opacity:1 }
        select:invalid { color:#B3A891 }
        @media (max-width:900px) {
          .access-grid { grid-template-columns: minmax(0,1fr) !important; }
          .aside-col { flex-direction: row !important; flex-wrap: wrap !important; }
          .aside-col > div { flex: 1 1 220px; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
