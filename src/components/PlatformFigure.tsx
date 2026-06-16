"use client";

import Image from "next/image";
import { useCallback } from "react";

const ACCENT = "#8E6C2E";

const spots = [
  { id: "1", left: "16%", top: "88%", boxLeft: "2%", boxTop: "77%", boxW: "30%", boxH: "20%" },
  { id: "2", left: "47%", top: "40%", boxLeft: "34%", boxTop: "32%", boxW: "32%", boxH: "42%" },
  { id: "3", left: "80%", top: "40%", boxLeft: "68%", boxTop: "32%", boxW: "31%", boxH: "46%" },
];

const annotations = [
  { id: "1", title: "Inventory signals", body: "Near-expiry and low-stock lines surfaced before they disrupt supply." },
  { id: "2", title: "Finance cycle", body: "Procurement spend reconciled against managed lines and reorder timing." },
  { id: "3", title: "Operations status", body: "Ordering and tender activity tracked across the workspace." },
];

export default function PlatformFigure() {
  const setActive = useCallback((idx: string, on: boolean) => {
    document.querySelectorAll(`[data-spot="${idx}"]`).forEach((el) => {
      const e = el as HTMLElement;
      e.style.transform = `translate(-50%,-50%) scale(${on ? 1.18 : 1})`;
      e.style.borderColor = on ? ACCENT : "rgba(142,108,46,.55)";
    });
    document.querySelectorAll(`[data-box="${idx}"]`).forEach((el) => {
      (el as HTMLElement).style.opacity = on ? "1" : "0";
    });
    document.querySelectorAll(`[data-spotlink="${idx}"]`).forEach((el) => {
      (el as HTMLElement).style.color = on ? "#28231E" : "";
    });
  }, []);

  const handleFigEnter = useCallback(() => {
    const img = document.querySelector("[data-fig-img]") as HTMLElement;
    const veil = document.querySelector("[data-fig-veil]") as HTMLElement;
    if (veil) veil.style.opacity = "0";
    if (img) img.style.filter = "none";
  }, []);

  const handleFigLeave = useCallback(() => {
    const img = document.querySelector("[data-fig-img]") as HTMLElement;
    const veil = document.querySelector("[data-fig-veil]") as HTMLElement;
    if (veil) veil.style.opacity = "1";
    if (img) img.style.filter = "saturate(.9)";
  }, []);

  return (
    <div>
      {/* Annotation legend */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "clamp(20px,4vw,52px)", marginBottom: "clamp(34px,5vh,52px)" }}>
        {annotations.map(({ id, title, body }) => (
          <div
            key={id}
            data-spotlink={id}
            style={{ borderTop: "1px solid #DDD1B6", paddingTop: 18, transition: "color .3s ease", cursor: "default" }}
            onMouseEnter={() => setActive(id, true)}
            onMouseLeave={() => setActive(id, false)}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
              <span style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 19, color: ACCENT }}>{id}</span>
              <span style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 11.5, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "#9A8E73" }}>{title}</span>
            </div>
            <p style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 14.5, lineHeight: 1.6, color: "#5A5247", margin: 0 }}>{body}</p>
          </div>
        ))}
      </div>

      {/* Fig 01 */}
      <figure data-reveal data-rd="120" style={{ margin: 0 }}>
        <div
          style={{ position: "relative", background: "#FBF9F3", border: "1px solid #DDD1B6", borderRadius: 7, padding: "clamp(10px,1.4vw,18px)", boxShadow: "0 30px 60px -42px rgba(42,37,33,.5)", overflow: "hidden" }}
          onMouseEnter={handleFigEnter}
          onMouseLeave={handleFigLeave}
        >
          <div style={{ position: "relative", borderRadius: 4, overflow: "hidden" }}>
            <Image
              data-fig-img=""
              src="/assets/niora-overview.png"
              alt="Niora workspace operations overview: inventory, finance, and ordering"
              width={2452}
              height={818}
              style={{ display: "block", width: "100%", height: "auto", borderRadius: 4, filter: "saturate(.9)", transition: "filter .6s ease" }}
              priority
            />
            <div data-fig-veil="" aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(236,227,207,.16)", borderRadius: 4, transition: "opacity .6s ease", pointerEvents: "none" }} />

            {spots.map(({ id, boxLeft, boxTop, boxW, boxH }) => (
              <div
                key={id}
                data-box={id}
                aria-hidden="true"
                style={{ position: "absolute", left: boxLeft, top: boxTop, width: boxW, height: boxH, border: `1.5px solid ${ACCENT}`, background: "rgba(142,108,46,.08)", borderRadius: 5, opacity: 0, transition: "opacity .4s ease", pointerEvents: "none" }}
              />
            ))}

            {spots.map(({ id, left, top }) => (
              <span
                key={id}
                data-spot={id}
                style={{ position: "absolute", left, top, transform: "translate(-50%,-50%)", width: 24, height: 24, borderRadius: "50%", border: "1.5px solid rgba(142,108,46,.55)", background: "rgba(251,249,243,.92)", color: ACCENT, fontFamily: "var(--font-newsreader), serif", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px -3px rgba(42,37,33,.4)", transition: "transform .3s ease, border-color .3s ease", cursor: "default" }}
                onMouseEnter={() => setActive(id, true)}
                onMouseLeave={() => setActive(id, false)}
              >
                {id}
              </span>
            ))}
          </div>
        </div>
        <figcaption style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginTop: 16, fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 13, color: "#9A8E73", letterSpacing: ".02em" }}>
          <span style={{ maxWidth: "62ch" }}>Operations overview. A single workspace reconciling inventory, finance, and ordering.</span>
          <span style={{ letterSpacing: ".1em" }}>DASHBOARD</span>
        </figcaption>
      </figure>

      {/* Fig 02 */}
      <figure data-reveal data-rd="120" style={{ margin: "clamp(40px,6vh,68px) 0 0", maxWidth: 920 }}>
        <div style={{ background: "#FBF9F3", border: "1px solid #DDD1B6", borderRadius: 7, padding: "clamp(10px,1.4vw,18px)", boxShadow: "0 30px 60px -42px rgba(42,37,33,.5)" }}>
          <Image
            src="/assets/niora-stocklines.png"
            alt="Niora workspace: stock lines needing attention and operations feed"
            width={2444}
            height={788}
            style={{ display: "block", width: "100%", height: "auto", borderRadius: 4 }}
          />
        </div>
        <figcaption style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginTop: 16, fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 13, color: "#9A8E73", letterSpacing: ".02em" }}>
          <span style={{ maxWidth: "62ch" }}>Stock lines requiring attention, paired with a live operations feed.</span>
          <span style={{ letterSpacing: ".1em" }}>DETAIL</span>
        </figcaption>
      </figure>
    </div>
  );
}
