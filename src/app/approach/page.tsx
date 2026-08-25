"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";

const serif = "var(--font-newsreader), Georgia, serif";
const sans = "var(--font-franklin), system-ui, sans-serif";
const ACCENT = "#8E6C2E";

const REGIONS_FAC = [
  { top: "1.5%", height: "56%" },
  { top: "58%", height: "41%" },
];
const REGIONS_SUP = [
  { top: "1.5%", height: "62%" },
  { top: "64%", height: "35%" },
];

export default function ApproachPage() {
  const [audience, setAudience] = useState<"facilities" | "suppliers">("facilities");
  const [anno, setAnno] = useState(0);
  const [annoS, setAnnoS] = useState(0);
  const rafRef = useRef<number | null>(null);
  const isFac = audience === "facilities";

  useEffect(() => {
    const pick = () => {
      const nodes = Array.from(document.querySelectorAll("[data-anno]")) as HTMLElement[];
      if (!nodes.length) return;
      const mid = window.innerHeight * 0.5;
      let best = 0, bestDist = Infinity;
      nodes.forEach((n) => {
        const r = n.getBoundingClientRect();
        const d = Math.abs((r.top + r.bottom) / 2 - mid);
        if (d < bestDist) { bestDist = d; best = Number(n.getAttribute("data-anno")); }
      });
      setAnno(best);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        pick();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    pick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [audience]);

  const r = REGIONS_FAC[anno] ?? REGIONS_FAC[0];
  const rs = REGIONS_SUP[annoS] ?? REGIONS_SUP[0];

  const annoBoxStyle: React.CSSProperties = {
    position: "absolute",
    left: "1.5%", right: "1.5%",
    top: r.top, height: r.height,
    border: `1.5px solid ${ACCENT}`,
    borderRadius: 6,
    boxShadow: "0 0 0 9999px rgba(247,244,237,.7)",
    pointerEvents: "none",
    transition: "top .45s cubic-bezier(.4,0,.2,1), height .45s cubic-bezier(.4,0,.2,1)",
  };

  const annoSBoxStyle: React.CSSProperties = {
    position: "absolute",
    left: "1%", right: "1%",
    top: rs.top, height: rs.height,
    border: `1.5px solid ${ACCENT}`,
    borderRadius: 6,
    boxShadow: "0 0 0 9999px rgba(247,244,237,.7)",
    pointerEvents: "none",
    transition: "top .45s cubic-bezier(.4,0,.2,1), height .45s cubic-bezier(.4,0,.2,1)",
  };

  const annoCardStyle = (i: number): React.CSSProperties => ({
    maxWidth: "38ch",
    transition: "opacity .4s ease, transform .4s ease",
    opacity: anno === i ? 1 : 0.34,
    transform: anno === i ? "translateY(0)" : "translateY(6px)",
  });

  const annoSCardStyle = (i: number): React.CSSProperties => ({
    cursor: "pointer",
    padding: "20px 22px",
    borderRadius: 12,
    transition: "background .25s ease, opacity .25s ease",
    background: annoS === i ? "#EAE1CD" : "transparent",
    opacity: annoS === i ? 1 : 0.62,
  });

  return (
    <div style={{ background: "#F4F1EA", color: "#2A2521", fontFamily: sans, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav forceSolid activeLink="approach" />

      {/* Hero */}
      <section style={{ padding: "clamp(140px,18vh,180px) 0 clamp(40px,5vh,56px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(34px,6vw,96px)" }}>
          <div style={{ maxWidth: 720 }}>
            <h1 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(38px,5.5vw,64px)", lineHeight: 1.04, letterSpacing: "-.025em", color: "#221D18", margin: "0 0 24px" }}>
              Our system
            </h1>
            <p style={{ fontFamily: serif, fontSize: "clamp(19px,2vw,23px)", lineHeight: 1.55, color: "#4A443B", margin: 0 }}>
              Niora gives hospitals and pharmacies one place to see what they need, order it from qualified suppliers, and hold every step of the transaction to a record everyone shares.
            </p>
          </div>
        </div>
      </section>

      {/* Dark photo section */}
      <section style={{ position: "relative", overflow: "hidden", background: "#28231E" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/ph-counter.png"
          alt=""
          aria-hidden
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.55 }}
        />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(28,23,18,.55)" }} />
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "clamp(72px,10vh,110px) clamp(34px,6vw,96px)" }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px,4.2vw,54px)", lineHeight: 1.14, letterSpacing: "-.014em", color: "#F4EFE2", margin: "0 0 22px", maxWidth: "30ch" }}>
            Facilities are short on <em style={{ fontStyle: "italic", borderBottom: "1px solid rgb(216, 180, 119)", paddingBottom: 2 }}>visibility</em>.
          </h2>
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(18px,1.9vw,23px)", lineHeight: 1.5, color: "#D9CFBC", margin: 0, maxWidth: "48ch" }}>
            They need to know what they will need before they run out, what suppliers can provide it and at what price, and what is happening across every order. Today, that information is fragmented across inventory records and supplier conversations.
          </p>
        </div>
      </section>

      {/* Interactive section */}
      <section style={{ padding: "clamp(70px,11vh,128px) clamp(34px,6vw,96px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          {/* Header + toggle */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 32, margin: "0 0 clamp(48px,7vh,76px)" }}>
            <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(24px,3vw,40px)", lineHeight: 1.1, letterSpacing: "-.02em", color: "#28231E", margin: 0, maxWidth: "22ch" }}>
              What changes when you run on Niora.
            </h2>
            <div style={{ display: "flex", gap: 8, background: "#E7DFCF", borderRadius: 999, padding: 6 }}>
              {(["facilities", "suppliers"] as const).map((tab) => (
                <button key={tab} onClick={() => setAudience(tab)}
                  style={{
                    fontSize: 14.5, fontWeight: 600, letterSpacing: ".01em",
                    padding: "10px 22px", borderRadius: 999, cursor: "pointer",
                    whiteSpace: "nowrap", border: "none",
                    transition: "background .2s ease, color .2s ease",
                    background: audience === tab ? "#15110D" : "transparent",
                    color: audience === tab ? "#F4EFE2" : "#6F6658",
                    fontFamily: sans,
                  }}>
                  {tab === "facilities" ? "For facilities" : "For suppliers"}
                </button>
              ))}
            </div>
          </div>

          {/* FACILITIES TAB */}
          {isFac && (
            <div>
              {/* 01 Plan your procurement */}
              <div style={{ display: "grid", gridTemplateColumns: "minmax(170px,21%) minmax(0,1fr) minmax(140px,17%)", columnGap: "clamp(20px,2.4vw,38px)", rowGap: 40, alignItems: "center", margin: "0 0 clamp(64px,9vh,110px)" }} className="approach-3col">
                <div>
                  <p style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 18px" }}>01</p>
                  <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.2, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 22px", maxWidth: "20ch" }}>Plan your procurement.</h3>
                  <p style={{ fontSize: 17, lineHeight: 1.68, color: "#3A342C", margin: 0 }}>Niora uses consumption and current stock to show what is likely to run out, when, and how much to reorder. Pharmacists can act before shortages happen instead of discovering them when stock is already gone.</p>
                </div>
                <figure style={{ margin: 0 }}>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3DBCC", borderRadius: 12, padding: 14, boxShadow: "0 18px 40px -28px rgba(34,29,24,.45)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "2px 4px 12px" }}>
                      <span style={{ width: 7, height: 7, borderRadius: 999, background: "#D9A13B", display: "inline-block" }} />
                      <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".13em", textTransform: "uppercase", color: "#9A8E73" }}>Stock tracker</span>
                    </div>
                    <div style={{ borderRadius: 7, overflow: "hidden", border: "1px solid #EFEAE0" }}>
                      <Image src="/assets/fac-stock-attention.png" alt="Stock lines needing attention: expired and expiring medicines flagged by status" width={800} height={400} style={{ display: "block", width: "100%", height: "auto" }} />
                    </div>
                  </div>
                </figure>
                <div style={{ display: "flex", alignItems: "stretch", gap: 14 }}>
                  <div aria-hidden style={{ flex: "0 0 10px", alignSelf: "stretch", borderLeft: "1.5px solid #C4B597", borderTop: "1.5px solid #C4B597", borderBottom: "1.5px solid #C4B597", borderRadius: "4px 0 0 4px" }} />
                  <p style={{ fontSize: 15, lineHeight: 1.68, color: "#6F6658", margin: 0, alignSelf: "center" }}>Administrators get a forward view of upcoming purchasing and costs, so procurement becomes something the facility can plan rather than repeatedly react to.</p>
                </div>
              </div>

              {/* 02 Compare the market */}
              <div style={{ margin: "0 0 clamp(64px,9vh,110px)" }}>
                <div style={{ maxWidth: "56ch", margin: "0 0 clamp(20px,4vh,36px)" }}>
                  <p style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 18px" }}>02</p>
                  <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.2, letterSpacing: "-.01em", color: "#28231E", margin: 0, maxWidth: "22ch" }}>Compare the market in one place.</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(260px,34%)", columnGap: "clamp(32px,5vw,72px)", rowGap: 36, alignItems: "center" }} className="approach-2col">
                  <figure style={{ margin: 0 }}>
                    <div style={{ background: "#FFFFFF", border: "1px solid #E3DBCC", borderRadius: 12, padding: 14, boxShadow: "0 18px 40px -28px rgba(34,29,24,.45)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "2px 4px 12px" }}>
                        <span style={{ width: 7, height: 7, borderRadius: 999, background: ACCENT, display: "inline-block" }} />
                        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".13em", textTransform: "uppercase", color: "#9A8E73" }}>Sourcing — supplier matches</span>
                      </div>
                      <div style={{ position: "relative", borderRadius: 7, overflow: "hidden", border: "1px solid #EFEAE0" }}>
                        <Image src="/assets/fac-quote-lines.png" alt="Requested medicines matched to suppliers with match quality and quoted price" width={800} height={400} style={{ display: "block", width: "100%", height: "auto" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", margin: "14px 0 0" }}>
                      <div style={{ position: "relative", maxWidth: "36ch", background: "#28231E", color: "#F1E9DA", borderRadius: 10, padding: "14px 18px", boxShadow: "0 16px 34px -20px rgba(34,29,24,.6)" }}>
                        <span aria-hidden style={{ position: "absolute", top: -6, right: "24%", width: 12, height: 12, background: "#28231E", transform: "rotate(45deg)", borderRadius: 2, display: "block" }} />
                        <p style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>More supplier choice, better purchasing decisions, and less time spent sourcing every order.</p>
                      </div>
                    </div>
                  </figure>
                  <div>
                    <p style={{ fontSize: 18, lineHeight: 1.68, color: "#3A342C", margin: 0, maxWidth: "52ch" }}>Send one requirement to qualified suppliers and compare price, availability, and lead time side by side. Instead of calling and messaging suppliers individually, procurement teams can see their options in one place and choose the best terms for each order.</p>
                  </div>
                </div>
              </div>

              {/* 03 Track every order — scroll annotation */}
              <div>
                <div style={{ maxWidth: "56ch", margin: "0 0 clamp(20px,4vh,40px)" }}>
                  <p style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 18px" }}>03</p>
                  <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.2, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 20px", maxWidth: "22ch" }}>Track every order through delivery.</h3>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(260px,340px) minmax(0,1fr)", columnGap: "clamp(24px,4vw,64px)", alignItems: "start" }} className="approach-3col-anno">
                  {/* Sticky panel */}
                  <div style={{ gridColumn: 2, gridRow: "1 / span 2", position: "sticky", top: 88, zIndex: 2 }}>
                    <div style={{ background: "#FFFFFF", border: "1px solid #E3DBCC", borderRadius: 12, padding: 14, boxShadow: "0 22px 48px -30px rgba(34,29,24,.5)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "2px 4px 12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 7, height: 7, borderRadius: 999, background: "#2F9E6B", display: "inline-block" }} />
                          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".13em", textTransform: "uppercase", color: "#9A8E73" }}>Order status</span>
                        </div>
                        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".08em", color: "#C0B49B" }}>{anno + 1} / 2</span>
                      </div>
                      <div style={{ position: "relative", borderRadius: 7, overflow: "hidden", border: "1px solid #EFEAE0" }}>
                        <Image src="/assets/fac-order-timeline.png" alt="Order timeline from sourcing through awarded, proforma, and receiving, with delivery details" width={600} height={800} style={{ display: "block", width: "100%", height: "auto" }} />
                        <div style={annoBoxStyle} />
                      </div>
                    </div>
                  </div>

                  {/* Anno 0 — left column */}
                  <div data-anno="0" style={{ gridColumn: 1, gridRow: 1, minHeight: "48vh", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <div style={annoCardStyle(0)}>
                      <p style={{ fontSize: 17, lineHeight: 1.68, color: "#3A342C", margin: 0 }}>Every order moves through one shared workflow—from supplier confirmation and dispatch to receipt, verification, invoice, and payment. Procurement teams always know what has been ordered, what is on the way, what actually arrived, and what remains outstanding.</p>
                    </div>
                  </div>

                  {/* Anno 1 — right column */}
                  <div data-anno="1" style={{ gridColumn: 3, gridRow: 2, minHeight: "48vh", display: "flex", alignItems: "center" }}>
                    <div style={annoCardStyle(1)}>
                      <p style={{ fontSize: 17, lineHeight: 1.68, color: "#3A342C", margin: 0 }}>When an order is received, verified quantities update inventory automatically, keeping the next purchasing decision grounded in what is actually on hand.</p>
                    </div>
                  </div>

                  <div aria-hidden style={{ gridColumn: "1 / -1", gridRow: 3, height: "20vh" }} />
                </div>
              </div>
            </div>
          )}

          {/* SUPPLIERS TAB */}
          {!isFac && (
            <div>
              {/* 01 Reach more buyers */}
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(260px,36%)", columnGap: "clamp(32px,5vw,72px)", rowGap: 36, alignItems: "center", margin: "0 0 clamp(64px,9vh,110px)" }} className="approach-2col">
                <figure style={{ margin: 0 }}>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E3DBCC", borderRadius: 12, padding: 14, boxShadow: "0 18px 40px -28px rgba(34,29,24,.45)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "2px 4px 12px" }}>
                      <span style={{ width: 7, height: 7, borderRadius: 999, background: ACCENT, display: "inline-block" }} />
                      <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".13em", textTransform: "uppercase", color: "#9A8E73" }}>A buyer choosing a vendor</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(220px,42%) minmax(0,1fr)", gap: 18, alignItems: "center" }}>
                      <div style={{ borderRadius: 7, overflow: "hidden", border: "1px solid #EFEAE0" }}>
                        <Image src="/assets/sup-vendor-match.png" alt="A facility choosing a vendor from catalog matches, with price and match strength" width={400} height={400} style={{ display: "block", width: "100%", height: "auto" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "4px 6px 4px 0" }}>
                        {[
                          "Your listing sits beside every other qualified quote.",
                          "Match strength and price are what the buyer weighs — not who they know.",
                          "Special requests route to you even when the item is outside your listed catalog.",
                        ].map((txt, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span aria-hidden style={{ flex: "0 0 26px", height: 1.5, background: "#C4B597", display: "block" }} />
                            <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "#5C554A" }}>{txt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </figure>
                <div>
                  <p style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 18px" }}>01</p>
                  <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.2, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 22px", maxWidth: "20ch" }}>Reach more institutional buyers.</h3>
                  <p style={{ fontSize: 17, lineHeight: 1.68, color: "#3A342C", margin: "0 0 20px" }}>Access purchasing demand from healthcare facilities beyond your existing sales network. Niora gives qualified suppliers a structured way to discover requirements, quote, and build new institutional relationships without relying entirely on individual sales relationships.</p>
                  <p style={{ fontSize: 15.5, lineHeight: 1.66, color: "#5A5240", margin: 0, padding: "2px 0 2px 16px", borderLeft: `2px solid #C08A2E` }}>More customers, without proportionally expanding your sales operation.</p>
                </div>
              </div>

              {/* 02 Plan your demand */}
              <div style={{ margin: "0 0 clamp(64px,9vh,110px)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(240px,30%) minmax(0,1fr)", columnGap: "clamp(32px,5vw,64px)", rowGap: 32, alignItems: "center" }} className="approach-2col">
                  <div>
                    <p style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 18px" }}>02</p>
                    <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.2, letterSpacing: "-.01em", color: "#28231E", margin: "0 0 20px", maxWidth: "20ch" }}>Plan your demand.</h3>
                    <p style={{ fontSize: 17, lineHeight: 1.68, color: "#3A342C", margin: 0 }}>See purchasing demand across the facilities you serve in one place, rather than reacting to scattered requests and last-minute orders. As purchasing history builds, Niora helps suppliers anticipate what products facilities will need, in what volumes, and when.</p>
                  </div>
                  <figure style={{ margin: 0 }}>
                    <div style={{ background: "#FFFFFF", border: "1px solid #E3DBCC", borderRadius: 12, padding: 14, boxShadow: "0 18px 40px -28px rgba(34,29,24,.45)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "2px 4px 12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 7, height: 7, borderRadius: 999, background: "#2F9E6B", display: "inline-block" }} />
                          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".13em", textTransform: "uppercase", color: "#9A8E73" }}>Incoming purchase orders</span>
                        </div>
                        <span style={{ fontSize: 11.5, color: "#C0B49B", letterSpacing: ".04em" }}>Accra Pharmacy · 4 open</span>
                      </div>
                      <div style={{ position: "relative", borderRadius: 7, overflow: "hidden", border: "1px solid #EFEAE0" }}>
                        <Image src="/assets/sup-po-list.png" alt="Purchase orders from facilities with status and total value" width={700} height={400} style={{ display: "block", width: "100%", height: "auto" }} />
                        <div aria-hidden style={{ position: "absolute", left: "70%", right: "1%", top: "3%", height: "94%", border: `1.5px solid ${ACCENT}`, borderRadius: 6 }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-start", margin: "14px 0 0" }}>
                      <div style={{ position: "relative", maxWidth: "40ch", background: "#EFE7D4", border: "1px solid #D8CBA8", borderRadius: 10, padding: "14px 18px" }}>
                        <span aria-hidden style={{ position: "absolute", top: -7, right: "16%", width: 12, height: 12, background: "#EFE7D4", borderLeft: "1px solid #D8CBA8", borderTop: "1px solid #D8CBA8", transform: "rotate(45deg)", display: "block" }} />
                        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#4C4436", margin: 0 }}>Committed value, order by order — so you can hold the right stock, plan imports, and stop capital sitting in the wrong inventory.</p>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>

              {/* 03 Know when you'll get paid — click annotation */}
              <div>
                <div style={{ maxWidth: "56ch", margin: "0 0 clamp(20px,4vh,36px)" }}>
                  <p style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#9A8E73", margin: "0 0 18px" }}>03</p>
                  <h3 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px,3vw,38px)", lineHeight: 1.2, letterSpacing: "-.01em", color: "#28231E", margin: 0, maxWidth: "22ch" }}>Know when you&apos;ll get paid.</h3>
                </div>
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16, margin: "0 0 26px" }}>
                    {[
                      { i: 0, text: "Every order, delivery, invoice, and payment sits on one shared transaction record. Niora verifies fulfillment, tracks what is due, and surfaces delays before unpaid invoices disappear into months of follow-up." },
                      { i: 1, text: "Over time, that verified payment history gives reliable buyers and suppliers something they rarely have today: a financial track record that can support better terms and access to financing." },
                    ].map(({ i, text }) => (
                      <div key={i} onClick={() => setAnnoS(i)} style={annoSCardStyle(i)}>
                        <p style={{ fontSize: 16.5, lineHeight: 1.66, color: "#3A342C", margin: 0 }}>{text}</p>
                      </div>
                    ))}
                  </div>
                  <figure style={{ margin: 0, width: "100%" }}>
                    <div style={{ background: "#FFFFFF", border: "1px solid #E3DBCC", borderRadius: 12, padding: 14, boxShadow: "0 18px 40px -28px rgba(34,29,24,.45)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "2px 4px 12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 7, height: 7, borderRadius: 999, background: "#D9A13B", display: "inline-block" }} />
                          <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".13em", textTransform: "uppercase", color: "#9A8E73" }}>Proforma — what is owed</span>
                        </div>
                        <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".08em", color: "#C0B49B" }}>
                          {annoS === 0 ? "Lines & fulfillment" : "Totals & history"}
                        </span>
                      </div>
                      <div style={{ position: "relative", borderRadius: 7, overflow: "hidden", border: "1px solid #EFEAE0" }}>
                        <Image src="/assets/sup-proforma-total.png" alt="Proforma lines with quantities, unit prices, and the proforma total" width={1000} height={500} style={{ display: "block", width: "100%", height: "auto" }} />
                        <div style={annoSBoxStyle} />
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(36px,5vh,56px) clamp(34px,6vw,96px) clamp(70px,11vh,120px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", background: "#DCD0BE", borderRadius: 20, padding: "clamp(48px,7vh,76px) clamp(36px,5vw,64px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", columnGap: "clamp(40px,6vw,88px)", rowGap: "clamp(32px,5vh,44px)", alignItems: "center" }}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.24, color: "#221D18", margin: 0, maxWidth: "26ch" }}>
              A single facility cannot fix procurement alone. It takes <em style={{ fontStyle: "italic" }}>shared infrastructure</em>.
            </h2>
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: "#4C4436", margin: "0 0 26px", maxWidth: "34ch" }}>Start procuring in minutes. Get approved to join the Niora platform.</p>
              <Link href="/signup"
                style={{ display: "inline-block", fontFamily: sans, fontWeight: 600, fontSize: 15, letterSpacing: ".01em", color: "#F4EFE2", background: "#15110D", padding: "14px 30px", borderRadius: 999, textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#15110D")}
              >
                Request access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #DDD1B6", padding: "clamp(28px,4vh,40px) clamp(34px,6vw,96px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: sans, fontSize: 13, color: "#9A8E73" }}>© 2026 Niora Systems</span>
          <div style={{ display: "flex", gap: 26 }}>
            {[["/approach", "Approach"], ["/research", "Research"], ["/careers", "Careers"], ["/contact", "Contact"]].map(([href, label]) => (
              <Link key={href} href={href} style={{ fontFamily: sans, fontSize: 14, color: "#857B6C", textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          .approach-3col { grid-template-columns: 1fr !important; }
          .approach-2col { grid-template-columns: 1fr !important; }
          .approach-3col-anno { grid-template-columns: 1fr !important; }
          .approach-3col-anno > div[style*="grid-column: 2"] { grid-column: 1 !important; grid-row: auto !important; position: relative !important; top: auto !important; }
          .approach-3col-anno > div[style*="grid-column: 1"] { grid-column: 1 !important; grid-row: auto !important; }
          .approach-3col-anno > div[style*="grid-column: 3"] { grid-column: 1 !important; grid-row: auto !important; }
        }
      `}</style>
    </div>
  );
}
