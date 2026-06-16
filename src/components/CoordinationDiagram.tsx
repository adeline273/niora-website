const ACCENT = "#8E6C2E";

export default function CoordinationDiagram() {
  return (
    <svg viewBox="0 0 480 540" style={{ display: "block", width: "100%", height: "auto" }} aria-hidden="true">
      <text x="240" y="17" textAnchor="middle" fill="#9A8E73" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 11, letterSpacing: ".18em" }}>INSTITUTIONS</text>
      {[
        { x: 95, label: "Hospitals" },
        { x: 240, label: "Health Systems" },
        { x: 385, label: "Pharmacies" },
      ].map(({ x, label }) => (
        <g key={label}>
          <text x={x} y="47" textAnchor="middle" fill="#6F665B" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 12.5 }}>{label}</text>
          <circle cx={x} cy={70} r={5} fill="#2A2521" />
        </g>
      ))}

      {/* Lines down to Niora box */}
      {[
        { d: "M95 73 L150 230", delay: ".2s" },
        { d: "M240 73 L240 230", delay: ".35s" },
        { d: "M385 73 L330 230", delay: ".5s" },
      ].map(({ d, delay }) => (
        <path key={d} d={d} fill="none" stroke={ACCENT} strokeWidth={1} opacity={.4}
          style={{ strokeDasharray: 440, strokeDashoffset: 440, animation: `nioraDraw 1.7s cubic-bezier(.4,.1,.2,1) ${delay} forwards` }} />
      ))}

      {/* Traveling particles down */}
      <circle cx="2.4" cy="2.4" r="2.6" fill={ACCENT}
        style={{ offsetPath: "path('M240 73 L240 230')", animation: "nioraTravel 4.5s linear infinite .6s" } as React.CSSProperties} />
      <circle cx="2.4" cy="2.4" r="2.6" fill={ACCENT}
        style={{ offsetPath: "path('M95 73 L150 230')", animation: "nioraTravel 5s linear infinite 1.4s" } as React.CSSProperties} />

      {/* Niora Systems box */}
      <rect x="40" y="232" width="400" height="78" rx="13" fill="#ECE3CF" stroke={ACCENT} strokeWidth={1.2} />
      <polygon points="68,256 80.1,263 80.1,277 68,284 55.9,277 55.9,263" fill={ACCENT} />
      <polygon points="68,262.5 74.6,266.3 74.6,273.7 68,277.5 61.4,273.7 61.4,266.3" fill="none" stroke="#F4EFE2" strokeWidth={1} />
      <text x="98" y="266" fill="#23201B" style={{ fontFamily: "var(--font-newsreader), serif", fontSize: 22 }}>Niora Systems</text>
      <text x="98" y="287" fill="#6F665B" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 10.5, letterSpacing: ".06em" }}>TRANSACTION &amp; SETTLEMENT LAYER</text>

      {/* Lines down to supply */}
      {[
        { d: "M150 312 L95 466", delay: ".65s" },
        { d: "M240 312 L240 466", delay: ".8s" },
        { d: "M330 312 L385 466", delay: ".95s" },
      ].map(({ d, delay }) => (
        <path key={d} d={d} fill="none" stroke={ACCENT} strokeWidth={1} opacity={.4}
          style={{ strokeDasharray: 440, strokeDashoffset: 440, animation: `nioraDraw 1.7s cubic-bezier(.4,.1,.2,1) ${delay} forwards` }} />
      ))}

      {/* Traveling particle down */}
      <circle cx="2.4" cy="2.4" r="2.6" fill={ACCENT}
        style={{ offsetPath: "path('M240 312 L240 466')", animation: "nioraTravel 4.5s linear infinite 2.2s" } as React.CSSProperties} />

      {/* Supply nodes */}
      {[
        { x: 95, label: "Suppliers" },
        { x: 240, label: "Financing" },
        { x: 385, label: "Delivery" },
      ].map(({ x, label }) => (
        <g key={label}>
          <circle cx={x} cy={470} r={5} fill="#2A2521" />
          <text x={x} y="494" textAnchor="middle" fill="#6F665B" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 12.5 }}>{label}</text>
        </g>
      ))}
      <text x="240" y="523" textAnchor="middle" fill="#9A8E73" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 11, letterSpacing: ".18em" }}>SUPPLY &amp; SETTLEMENT</text>
    </svg>
  );
}
