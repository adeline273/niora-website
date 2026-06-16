const ACCENT = "#8E6C2E";

const milestones = [
  { x: 160, label: "Coordination", delay: ".6s" },
  { x: 380, label: "Transparency", delay: "1.0s" },
  { x: 600, label: "Accountability", delay: "1.4s" },
  { x: 820, label: "Reliability", delay: "1.8s" },
];

export default function TimelineDiagram() {
  return (
    <svg viewBox="0 0 1000 150" style={{ display: "block", width: "100%", height: "auto" }} aria-hidden="true">
      <line x1="70" y1="78" x2="930" y2="78" stroke="#2A2521" strokeWidth={1} opacity={.2}
        style={{ strokeDasharray: 880, strokeDashoffset: 880, animation: "nioraDrawLong 2.6s cubic-bezier(.4,.1,.2,1) .2s forwards" }} />
      <text x="70" y="40" textAnchor="start" fill="#9A8E73" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>Today</text>
      <text x="930" y="40" textAnchor="end" fill="#9A8E73" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>Long term</text>

      {milestones.map(({ x, label, delay }) => (
        <g key={label} style={{ opacity: 0, animation: `nioraFade .9s ease ${delay} forwards` }}>
          <line x1={x} y1="70" x2={x} y2="86" stroke="#2A2521" strokeWidth={1} opacity={.25} />
          <circle cx={x} cy={78} r={5} fill="#F4F1EA" stroke={ACCENT} strokeWidth={1.5} />
          <text x={x} y="112" textAnchor="middle" fill="#6F665B" style={{ fontFamily: "var(--font-source-sans), system-ui, sans-serif", fontSize: 13 }}>{label}</text>
        </g>
      ))}

      <circle cx="4" cy="4" r="4" fill={ACCENT}
        style={{ offsetPath: "path('M70 78 L930 78')", animation: "nioraTravel 8s linear infinite 2.4s" } as React.CSSProperties} />
    </svg>
  );
}
