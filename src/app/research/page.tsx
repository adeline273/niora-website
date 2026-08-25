"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const MEASURES = [
  {
    body: "Whether implementation is associated with fewer and shorter medicine stockouts across the study sites.",
    note: "Tracked per medicine, per site, against the baseline period.",
  },
  {
    body: "How procurement lead times and payment delays change before and after implementation, and whether those changes differ between the two hospital settings.",
    note: "Measured from requisition to delivery, and from invoice to payment.",
  },
  {
    body: "Whether forecasting based on procurement history improves procurement efficiency and medicine availability, followed by assessment of the payment intervention and its effect on financial predictability and medicine access.",
    note: "Phase one evaluates forecasting; phase two evaluates payment.",
  },
];

const INVESTIGATORS = [
  {
    name: "Dr. Charles Ofei-Palm",
    role: "Principal Investigator",
    institution: "Korle-Bu Teaching Hospital",
    bio: "Director of Pharmacy at Korle Bu Teaching Hospital and a Consultant Pharmacist in Public Health. His work spans hospital pharmacy practice, medicines use and pharmaceutical care, including published research on the availability, cost and rational use of medicines in Ghana. In this study, he serves as Principal Investigator and institutional lead at Korle Bu, providing expertise in hospital pharmacy operations and procurement systems.",
  },
  {
    name: "Dr. Joycelyn Dame",
    role: "Principal Investigator",
    institution: "Korle-Bu Teaching Hospital",
    bio: "Senior Lecturer in Child Health at the University of Ghana Medical School and a Consultant Paediatrician and Paediatric Infectious Disease Specialist at Korle Bu Teaching Hospital. Her research includes pediatric infectious diseases, HIV, antimicrobial resistance and antimicrobial stewardship. In this study, she provides clinical and ethical oversight, including guidance on patient safety and research compliance.",
  },
  {
    name: "Chuck Aryeetey",
    role: "Pharmacist and Research Co-lead",
    institution: "The Trust Hospital",
    bio: "Chuck Aryeetey is a pharmacist at The Trust Hospital and a member of the study team. He leads study design, reporting and implementation, coordinates work across the two study sites, and oversees data collection, analysis and manuscript preparation.",
  },
  {
    name: "Bright Kodua",
    role: "Research Co-lead",
    institution: "The Trust Hospital",
    bio: "Bright Kodua is a public health and health informatics professional at The Trust Hospital. He serves as the institutional lead site supervisor for The Trust Hospital and liaison between the hospital and the wider study team.",
  },
];

export default function ResearchPage() {
  const [measure, setMeasure] = useState(0);
  const [inv, setInv] = useState<number>(0);

  const toggleInv = (n: number) => setInv(inv === n ? -1 : n);

  return (
    <div style={{ background: "#F4F1EA", color: "#2A2521", fontFamily: sans, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav forceSolid activeLink="research" />

      {/* Hero */}
      <section style={{ padding: "clamp(108px,14vh,140px) clamp(24px,5vw,64px) 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h1 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(38px,5.5vw,64px)", lineHeight: 1.1, letterSpacing: "-.02em", color: "#221D18", margin: "0 0 clamp(24px,4vh,34px)" }}>
            Our research
          </h1>
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(28px,4vw,50px)", lineHeight: 1.12, letterSpacing: "-.016em", color: "#221D18", margin: "0 0 clamp(26px,4vh,34px)", maxWidth: "26ch" }}>
            The effect of end-to-end procurement on <em style={{ fontStyle: "italic", fontWeight: 400 }}>medicine availability</em>.
          </p>
          <p style={{ fontFamily: serif, fontSize: "clamp(18px,1.8vw,21px)", lineHeight: 1.5, color: "#4A443B", margin: "0 0 clamp(40px,6vh,60px)", maxWidth: "60ch" }}>
            A prospective implementation study examining whether better demand forecasting and more predictable payment systems can reduce procurement delays and medicine stockouts in Ghanaian hospitals.
          </p>
        </div>
      </section>

      {/* Metadata strip */}
      <section style={{ padding: "0 clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 0 }}>
            {[
              { label: "Study team", value: <>Dr. Charles Ofei-Palm<br />Dr. Joycelyn Dame<br />Chuck Aryeetey<br />Bright Kodua</> },
              { label: "Setting", value: <>Korle-Bu Teaching Hospital,<br />Trust Hospital</> },
              { label: "Study period", value: "Beginning June 2026" },
              { label: "Niora's role", value: "Implementation partner" },
            ].map(({ label, value }, i, arr) => (
              <div key={label} style={{ borderTop: "1px solid #DDD1B6", padding: `18px ${i < arr.length - 1 ? "26px" : "0"} 24px 0` }}>
                <dt style={{ fontSize: 13.5, fontWeight: 600, color: "#8A7F6C", margin: "0 0 10px" }}>{label}</dt>
                <dd style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#3A342C" }}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Team photo */}
      <section style={{ padding: "clamp(64px,10vh,120px) clamp(24px,5vw,64px) 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", columnGap: "clamp(36px,5vw,64px)", rowGap: 28, alignItems: "end" }}>
          <figure style={{ margin: 0 }}>
            <Image
              src="/assets/research-team-korlebu.jpg"
              alt="The study and implementation team at the Department of Pharmacy, Korle-Bu Teaching Hospital"
              width={800}
              height={600}
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </figure>
          <figcaption style={{ paddingBottom: "clamp(8px,3vh,32px)" }}>
            <p style={{ fontFamily: sans, fontWeight: 600, fontSize: 17, lineHeight: 1.6, color: "#221D18", margin: "0 0 14px", maxWidth: "40ch" }}>
              Dr. Charles Ofei-Palm, Director of Pharmacy, with the Niora implementation team at Korle-Bu.
            </p>
            <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.7, color: "#4A443B", margin: 0, maxWidth: "42ch" }}>
              Korle Bu&apos;s pharmacy procures essential medicines for a 2,000-bed referral hospital serving millions of patients each year.
            </p>
          </figcaption>
        </div>
      </section>

      {/* Prose */}
      <section style={{ padding: "clamp(64px,10vh,120px) clamp(24px,5vw,64px) 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: "64ch" }}>
            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#3A342C", margin: "0 0 20px" }}>
              Medicine availability depends not only on whether medicines exist in the market, but on whether health facilities can anticipate demand, procure stock in time, and pay suppliers predictably.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#3A342C", margin: "0 0 20px" }}>
              In Ghana, hospitals operate within a pharmaceutical supply chain affected by weak forecasting, long procurement lead times, fragmented distribution, financing constraints, and delayed payments. Payment delays can constrain facilities&apos; ability to replenish medicines and can make suppliers less willing to extend favorable terms or continue supplying on credit.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#3A342C", margin: 0 }}>
              This study tests whether two interventions—better demand forecasting and more predictable procurement payments—can improve that cycle. The primary question is: do these changes lead to more efficient procurement and fewer or shorter medicine stockouts?
            </p>
          </div>
        </div>
      </section>

      {/* What the study measures — dark section */}
      <section style={{ background: "#221D18", marginTop: "clamp(70px,11vh,120px)", padding: "clamp(76px,13vh,130px) clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ fontFamily: sans, fontWeight: 600, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.14, letterSpacing: "-.02em", color: "#F4EFE2", margin: "0 0 clamp(36px,6vh,56px)", maxWidth: "24ch" }}>
            What the study measures
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", columnGap: "clamp(40px,6vw,80px)", rowGap: "clamp(32px,5vh,44px)", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #3E362E" }}>
              {[
                "Medicine availability",
                "Procurement and payment timelines",
                "Forecasting and procurement performance",
              ].map((label, n) => (
                <div
                  key={n}
                  onClick={() => setMeasure(n)}
                  style={{
                    display: "grid", gridTemplateColumns: "34px minmax(0,1fr)", alignItems: "baseline", gap: 12,
                    padding: "clamp(20px,3.4vh,28px) 0", borderBottom: "1px solid #3E362E", cursor: "pointer",
                    transition: "color .22s ease, opacity .22s ease",
                    color: measure === n ? "#F4EFE2" : "#B0A491",
                    opacity: measure === n ? 1 : 0.7,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#8E7A55", letterSpacing: ".02em" }}>
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(21px,2.3vw,28px)", lineHeight: 1.2, letterSpacing: "-.01em", margin: 0, color: "inherit" }}>
                    {label}
                  </h3>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: "clamp(20px,4vh,34px)" }}>
              <p style={{ fontFamily: sans, fontSize: "clamp(17px,1.7vw,19px)", lineHeight: 1.7, color: "#EDE6D8", margin: 0, maxWidth: "42ch" }}>
                {MEASURES[measure].body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Niora's role */}
      <section style={{ padding: "clamp(70px,11vh,120px) clamp(24px,5vw,64px) 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.16, letterSpacing: "-.02em", color: "#221D18", margin: "0 0 clamp(32px,5vh,46px)", maxWidth: "30ch" }}>
            Niora builds and deploys the intervention. The research team evaluates it independently.
          </h2>
          <div style={{ maxWidth: "64ch", display: "flex", flexDirection: "column", gap: 26 }}>
            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#3A342C", margin: 0 }}>
              Niora Systems is the study&apos;s <strong style={{ fontWeight: 600, color: "#221D18" }}>implementation partner</strong>. Under the protocol, Niora develops and deploys the forecasting and procurement intervention used at the study sites.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#3A342C", margin: 0 }}>
              The intervention is being introduced in <strong>two phases</strong>. The first deploys a procurement system with stock visibility and automated reorder alerts. The second introduces a payment system designed to create more predictable procurement payment schedules and reduce emergency purchasing volatility.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#3A342C", margin: 0 }}>
              Niora does <strong style={{ fontWeight: 600, color: "#221D18" }}>not</strong> design the study, collect the research data, analyze the results, interpret the findings, or control publication decisions. Those responsibilities remain with the independent research team.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#3A342C", margin: 0 }}>
              Findings are intended for peer-reviewed publication and presentation to participating hospitals, with a policy brief planned for Ghana&apos;s Ministry of Health and National Health Insurance Authority.
            </p>
          </div>
        </div>
      </section>

      {/* Investigators accordion */}
      <section style={{ padding: "clamp(64px,10vh,110px) clamp(24px,5vw,64px) 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ fontSize: 13.5, fontWeight: 600, color: "#8A7F6C", margin: "0 0 clamp(28px,4vh,40px)" }}>Investigators</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {INVESTIGATORS.map((person, n) => {
              const isOpen = inv === n;
              const isLast = n === INVESTIGATORS.length - 1;
              return (
                <div key={person.name} style={{ borderTop: "1px solid #DDD1B6", borderBottom: isLast ? "1px solid #DDD1B6" : "none" }}>
                  <div
                    onClick={() => toggleInv(n)}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "clamp(24px,3.6vh,32px) 0 clamp(16px,2.4vh,22px)", cursor: "pointer" }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", columnGap: "clamp(24px,4vw,56px)", rowGap: 6, alignItems: "baseline", flex: 1 }}>
                      <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: "clamp(20px,2.1vw,24px)", lineHeight: 1.22, letterSpacing: "-.015em", color: "#221D18", margin: 0 }}>{person.name}</h3>
                      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#6F6658", margin: 0 }}>
                        {person.role} <span style={{ color: "#A79B85" }}>·</span> {person.institution}
                      </p>
                    </div>
                    <span aria-hidden style={{
                      flex: "0 0 11px", width: 11, height: 11, position: "relative", display: "block",
                      background: isOpen
                        ? `linear-gradient(${ACCENT},${ACCENT}) center/11px 1.5px no-repeat`
                        : `linear-gradient(${ACCENT},${ACCENT}) center/11px 1.5px no-repeat, linear-gradient(${ACCENT},${ACCENT}) center/1.5px 11px no-repeat`,
                    }} />
                  </div>
                  {isOpen && (
                    <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.75, color: "#4A443B", margin: 0, padding: "0 40px clamp(30px,4vh,38px) 0", maxWidth: "62ch" }}>
                      {person.bio}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section style={{ padding: "clamp(70px,11vh,120px) clamp(24px,5vw,64px) clamp(76px,12vh,130px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", columnGap: "clamp(36px,5vw,72px)", rowGap: 28, alignItems: "end" }}>
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.26, letterSpacing: "-.01em", color: "#221D18", margin: 0, maxWidth: "26ch" }}>
            Niora partners with leading institutions to advance <em style={{ fontStyle: "italic", borderBottom: `1px solid #C08A2E`, paddingBottom: 2 }}>supply chains</em>.
          </p>
          <div>
            <p style={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.7, color: "#4A443B", margin: "0 0 20px", maxWidth: "38ch" }}>
              For research collaborations, institutional pilots, or questions about the study protocol.
            </p>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 16, fontWeight: 600, color: "#221D18", textDecoration: "none", borderBottom: "1px solid #221D18", paddingBottom: 4 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#221D18")}
            >
              Write to the team <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #DDD1B6", padding: "clamp(28px,4vh,40px) clamp(24px,5vw,64px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
          <div style={{ display: "flex", gap: 26 }}>
            {[["/approach", "Approach"], ["/research", "Research"], ["/careers", "Careers"], ["/contact", "Contact"]].map(([href, label]) => (
              <Link key={href} href={href} style={{ fontFamily: sans, fontSize: 14, color: "#857B6C", textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
