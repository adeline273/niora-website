"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const INTRO = [
  "We are currently deploying our platform with leading healthcare institutions in Ghana, including Korle-Bu Teaching Hospital and Trust Hospital. Our long-term ambition is to build the transaction infrastructure for institutional commerce across emerging markets, making it easier for businesses to establish trust, access financing, and transact across borders.",
  "We're an early-stage company working on an unusually ambitious problem at the intersection of technology, economics, global health, and international development. We're looking for someone who can help us tell that story and bring it to the people and institutions who should hear it.",
];

const ROLE_PARAGRAPHS = [
  "We are looking for a Communications & Strategic Engagement Intern to work directly with Niora's founder and CEO on the company's external communications, media relations, public positioning, and strategic opportunities.",
  "You'll help shape how Niora's work is communicated to journalists, investors, industry leaders, and the broader public. This includes identifying and pitching compelling stories to major publications, researching speaking opportunities and conferences, developing communications materials, and helping articulate our company's long-term vision.",
  "This is not a conventional social media internship. You'll be working on the communications and public positioning of an early-stage company building commercial infrastructure in one of the world's most challenging and interesting markets.",
  "You'll have the independence to develop ideas, pursue opportunities, and help determine which stories are worth telling. You'll work directly with the founder, have visibility into the strategic decisions behind building a company, and have the opportunity to see your work translate into real media coverage, speaking engagements, and relationships.",
  "This role is ideal for a curious, intellectually ambitious student interested in journalism, strategic communications, economics, international affairs, or entrepreneurship. We're looking for someone who enjoys understanding complicated ideas and finding compelling ways to communicate them.",
];

type Item = string | { label: string; text: string };

const SECTIONS: { heading: string; items: Item[]; after?: string }[] = [
  {
    heading: "What you'll do",
    items: [
      { label: "Media relations and PR", text: "Identify journalists, editors, publications, and podcasts covering entrepreneurship, emerging markets, global health, economic development, and financial infrastructure. Research their work and develop thoughtful, personalized pitches." },
      { label: "Speaking engagements and opportunities", text: "Research and pursue relevant conferences, panels, fellowships, awards, interviews, and speaking opportunities for Niora's founder." },
      { label: "Company narrative and positioning", text: "Work directly with the founder to develop compelling narratives about Niora's technology, commercial ambitions, and the broader economic problems we're addressing." },
      { label: "Fundraising communications", text: "Help prepare and refine investor-facing materials, founder profiles, company descriptions, and communications that clearly articulate Niora's long-term vision and commercial opportunity." },
      { label: "Thought leadership", text: "Research and develop ideas for essays, articles, interviews, and commentary on global commerce, pharmaceutical markets, institutional development, and emerging-market economies." },
      { label: "Strategic research and outreach", text: "Identify influential people, organizations, and platforms that could help bring Niora's work to a wider audience, and help develop opportunities for meaningful engagement." },
      { label: "Communications execution", text: "Draft outreach emails, media pitches, speaking applications, press materials, and other written communications, and help coordinate follow-ups and external conversations." },
    ],
  },
  {
    heading: "What we're looking for",
    items: [
      "Exceptional writing and communication skills, with an ability to make complex ideas clear, interesting, and accessible.",
      "Strong intellectual curiosity and an interest in understanding how businesses, economies, and institutions work.",
      "Good editorial judgment: an instinct for what makes a story interesting, what different audiences care about, and how to communicate ideas without unnecessary jargon or exaggeration.",
      "Resourcefulness and initiative. You're comfortable independently researching opportunities, finding the right people to contact, and figuring out how to make things happen.",
      "Strong organizational skills and the ability to manage multiple outreach efforts, deadlines, and opportunities.",
      "An interest in journalism, public relations, strategic communications, entrepreneurship, economics, or international affairs.",
      "Comfort working directly with a founder in a small, fast-moving team where you'll have substantial independence and ownership.",
    ],
    after: "Previous experience in journalism, media relations, communications, or startups is welcome but not required. We care much more about your judgment, writing ability, curiosity, and initiative.",
  },
  {
    heading: "Work Environment",
    items: [
      "Remote, part-time, with flexible hours that can accommodate an academic schedule.",
      "Unpaid internship, with an emphasis on substantive experience, direct mentorship, and ownership of meaningful projects.",
      "Direct collaboration with the founder and partnerships team.",
      "Exposure to early-stage company strategy, fundraising, international business, and institutional partnerships.",
      "Opportunity to build a portfolio of published writing, communications materials, and successful media or speaking outreach.",
      "Significant autonomy to propose and pursue your own ideas.",
    ],
    after: "We're especially excited about people who have unusual intellectual interests, enjoy following stories that others overlook, and are willing to pursue ambitious ideas independently.",
  },
];

const h3Style: React.CSSProperties = { fontFamily: sans, fontWeight: 700, fontSize: 15, letterSpacing: ".02em", color: "#221D18", margin: "0 0 14px" };
const bodyStyle: React.CSSProperties = { fontFamily: sans, fontSize: 16, lineHeight: 1.75, color: "#4C463D" };
const listStyle: React.CSSProperties = { margin: "0 0 clamp(32px,4.5vh,44px)", padding: "0 0 0 20px", fontFamily: sans, fontSize: 16.5, lineHeight: 1.75, color: "#4C463D", listStyleType: "disc" };
const divider = <div style={{ height: 1, background: "#E4D9C2", margin: "clamp(28px,4vh,40px) 0" }} />;

export default function CommunicationsInternPage() {
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
          Communications &amp; Strategic Engagement Intern
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", margin: "0 0 clamp(40px,6vh,56px)", fontFamily: sans, fontSize: 14.5, color: "#857B6C" }}>
          <span>Communications &amp; Public Relations</span>
          <span>·</span>
          <span>Remote</span>
          <span>·</span>
          <span>Part-time · Unpaid</span>
        </div>

        <div style={{ borderTop: "1px solid #DDD1B6", paddingTop: "clamp(28px,4vh,40px)" }}>

          {/* Intro */}
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.55, color: "#3A342C", margin: "0 0 clamp(32px,4.5vh,44px)", maxWidth: "56ch" }}>
            Niora Systems is building institutional procurement, payments, and financing infrastructure for businesses in emerging markets, starting with healthcare. Our platform helps hospitals and suppliers manage procurement, contract enforcement, payments, and supplier coordination — creating verifiable transaction histories that make businesses more reliable commercial partners.
          </p>

          {INTRO.map((text, i) => (
            <p key={i} style={{ ...bodyStyle, margin: i === INTRO.length - 1 ? "0 0 clamp(32px,4.5vh,44px)" : "0 0 20px" }}>
              {text}
            </p>
          ))}

          {divider}

          {/* The Role */}
          <h3 style={h3Style}>The Role</h3>
          {ROLE_PARAGRAPHS.map((text, i) => (
            <p key={i} style={{ ...bodyStyle, margin: i === ROLE_PARAGRAPHS.length - 1 ? "0 0 clamp(32px,4.5vh,44px)" : "0 0 20px" }}>
              {text}
            </p>
          ))}

          {SECTIONS.map(({ heading, items, after }, i) => {
            const isLast = i === SECTIONS.length - 1;
            const endMargin = isLast ? "0 0 clamp(40px,6vh,56px)" : "0 0 clamp(32px,4.5vh,44px)";
            return (
              <div key={heading}>
                {divider}
                <h3 style={h3Style}>{heading}</h3>
                <ul style={{ ...listStyle, margin: after ? "0 0 24px" : endMargin }}>
                  {items.map((item) =>
                    typeof item === "string" ? (
                      <li key={item}>{item}</li>
                    ) : (
                      <li key={item.label}><strong style={{ fontWeight: 600, color: "#2A2521" }}>{item.label}:</strong> {item.text}</li>
                    ),
                  )}
                </ul>
                {after && <p style={{ ...bodyStyle, margin: endMargin }}>{after}</p>}
              </div>
            );
          })}

          {/* CTA */}
          <a
            href="https://forms.gle/AWA1ns7kSewtnzmM7"
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
