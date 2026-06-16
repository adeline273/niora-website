"use client";

import { useEffect, useRef } from "react";

const ACCENT = "#8E6C2E";

export default function CompoundingNetwork() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const startBuild = () => {
      wrap.querySelectorAll<SVGElement>("[data-anim]").forEach((el) => {
        el.style.animationPlayState = "running";
      });
      // Settle net: after animations finish, force full visibility
      setTimeout(() => {
        wrap.querySelectorAll<SVGElement>("[data-anim]").forEach((el) => {
          el.style.opacity = "1";
          el.style.strokeDashoffset = "0";
        });
      }, 4800);
    };

    let started = false;
    const trigger = () => {
      if (started) return;
      const r = wrap.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
        started = true;
        startBuild();
        window.removeEventListener("scroll", trigger);
      }
    };

    const io = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting && !started) { started = true; startBuild(); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(wrap);

    trigger();
    window.addEventListener("scroll", trigger, { passive: true });
    const safety = setTimeout(() => { if (!started) { started = true; startBuild(); } }, 6000);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", trigger);
      clearTimeout(safety);
    };
  }, []);

  const pausedAnim = (anim: string): React.CSSProperties => ({
    animation: anim,
    animationPlayState: "paused",
  });

  return (
    <div ref={wrapRef} style={{ marginTop: "clamp(46px,7vh,80px)", borderTop: "1px solid #DDD1B6", paddingTop: "clamp(26px,4vh,40px)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 10, marginBottom: 6 }}>
        <span style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 12.5, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: ACCENT }}>How reliability compounds</span>
        <span style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "#9A8E73" }}>Today&nbsp;→&nbsp;Long&nbsp;term</span>
      </div>
      <svg viewBox="0 0 1000 400" style={{ display: "block", width: "100%", height: "auto" }} aria-hidden="true">
        <polygon points="120,185 940,50 940,310" fill={ACCENT} opacity=".055" />

        <line x1="400" y1="60" x2="400" y2="348" stroke="#2A2521" strokeWidth={1} opacity=".05" />
        <line x1="680" y1="60" x2="680" y2="348" stroke="#2A2521" strokeWidth={1} opacity=".05" />
        <line x1="940" y1="60" x2="940" y2="348" stroke="#2A2521" strokeWidth={1} opacity=".05" />

        <line x1="92" y1="348" x2="92" y2="52" stroke="#2A2521" strokeWidth={1} opacity=".16" data-anim=""
          style={{ strokeDasharray: 320, strokeDashoffset: 320, ...pausedAnim("nioraDrawTo 1.4s cubic-bezier(.4,.1,.2,1) .15s forwards") }} />
        <polygon points="92,46 88,56 96,56" fill="#2A2521" opacity=".4" data-anim=""
          style={pausedAnim("nioraFade .6s ease 1.4s forwards")} />
        <text x="86" y="200" textAnchor="middle" transform="rotate(-90 86 200)" fill="#9A8E73"
          style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 10.5, letterSpacing: ".14em" }}>NETWORK REACH</text>

        <line x1="92" y1="348" x2="960" y2="348" stroke="#2A2521" strokeWidth={1} opacity=".18" data-anim=""
          style={{ strokeDasharray: 900, strokeDashoffset: 900, ...pausedAnim("nioraDrawTo 1.8s cubic-bezier(.4,.1,.2,1) .15s forwards") }} />
        <text x="92" y="333" textAnchor="start" fill="#9A8E73" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase" }}>Today</text>
        <text x="960" y="333" textAnchor="end" fill="#9A8E73" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase" }}>Long term</text>

        <g fill="none" stroke={ACCENT} strokeWidth={1} opacity=".4">
          {[
            ["M120 185 L400 140", ".4s"],
            ["M120 185 L400 235", ".5s"],
            ["M400 140 L680 90",  "1.1s"],
            ["M400 140 L680 160", "1.2s"],
            ["M400 235 L680 225", "1.3s"],
            ["M400 235 L680 290", "1.4s"],
            ["M680 90 L940 55",   "1.8s"],
            ["M680 90 L940 105",  "1.9s"],
            ["M680 160 L940 105", "2.0s"],
            ["M680 160 L940 155", "2.1s"],
            ["M680 225 L940 205", "2.2s"],
            ["M680 225 L940 255", "2.3s"],
            ["M680 290 L940 255", "2.4s"],
            ["M680 290 L940 305", "2.5s"],
          ].map(([d, delay]) => (
            <path key={d} d={d} data-anim=""
              style={{ strokeDasharray: 360, strokeDashoffset: 360, ...pausedAnim(`nioraDrawTo 1s cubic-bezier(.4,.1,.2,1) ${delay} forwards`) }} />
          ))}
        </g>

        {/* Phase labels */}
        {[
          { cx: 120, label: "Coordination", delay: ".3s", labelColor: "#6F665B" },
          { cx: 400, label: "Transparency", delay: ".9s", labelColor: "#6F665B" },
          { cx: 680, label: "Accountability", delay: "1.6s", labelColor: "#6F665B" },
          { cx: 940, label: "Reliability", delay: "2.4s", labelColor: "#28231E" },
        ].map(({ cx, label, delay, labelColor }) => (
          <g key={label} data-anim="" style={pausedAnim(`nioraFade .8s ease ${delay} forwards`)}>
            <circle cx={cx} cy={348} r={5} fill="#F4F1EA" stroke={ACCENT} strokeWidth={1.5} />
            <text x={cx} y={372} textAnchor="middle" fill={labelColor}
              style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 13 }}>{label}</text>
          </g>
        ))}

        {/* Origin node with pulse */}
        <circle cx="120" cy="185" r="13" fill="none" stroke={ACCENT} strokeWidth={1} opacity=".45" data-anim=""
          style={pausedAnim("nioraFade .7s ease .2s forwards, nioraPulse 5s ease-in-out 1.2s infinite")} />
        <circle cx="120" cy="185" r="7" fill="#2A2521" data-anim="" style={pausedAnim("nioraGrow .7s ease .2s forwards")} />

        {/* Branch nodes */}
        {[
          { cx: 400, cy: 140, delay: ".9s" }, { cx: 400, cy: 235, delay: "1.0s" },
          { cx: 680, cy: 90,  delay: "1.6s" }, { cx: 680, cy: 160, delay: "1.7s" },
          { cx: 680, cy: 225, delay: "1.8s" }, { cx: 680, cy: 290, delay: "1.9s" },
        ].map(({ cx, cy, delay }) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" fill="#2A2521" data-anim=""
            style={pausedAnim(`nioraGrow .7s ease ${delay} forwards`)} />
        ))}

        {/* End nodes */}
        {[55, 105, 155, 205, 255, 305].map((cy, i) => (
          <circle key={cy} cx="940" cy={cy} r="5" fill={ACCENT} data-anim=""
            style={pausedAnim(`nioraGrow .7s ease ${(2.4 + i * 0.1).toFixed(1)}s forwards`)} />
        ))}

        {/* Traveling pulses */}
        <circle r="3.5" fill={ACCENT} data-anim=""
          style={{ offsetPath: "path('M120 185 L400 140 L680 90 L940 55')", ...pausedAnim("nioraTravel 5s linear 3.1s infinite") } as React.CSSProperties} />
        <circle r="3.5" fill={ACCENT} data-anim=""
          style={{ offsetPath: "path('M120 185 L400 235 L680 290 L940 305')", ...pausedAnim("nioraTravel 5.6s linear 3.7s infinite") } as React.CSSProperties} />
        <circle r="3.5" fill={ACCENT} data-anim=""
          style={{ offsetPath: "path('M120 185 L400 140 L680 160 L940 155')", ...pausedAnim("nioraTravel 6.2s linear 4.3s infinite") } as React.CSSProperties} />
      </svg>
      <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(17px,1.7vw,21px)", lineHeight: 1.5, color: "#5A5240", margin: "22px 0 0", maxWidth: "62ch" }}>
        From a single coordinated workspace to a connected system — every institution Niora supports strengthens the reliability of the next.
      </p>
    </div>
  );
}
