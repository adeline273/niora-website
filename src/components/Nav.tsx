"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 8) {
        nav.style.background = "rgba(244,241,234,0.82)";
        nav.style.backdropFilter = "saturate(120%) blur(10px)";
        (nav.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter = "saturate(120%) blur(10px)";
        nav.style.borderBottomColor = "#DDD1B6";
      } else {
        nav.style.background = "rgba(244,241,234,0)";
        nav.style.backdropFilter = "none";
        (nav.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter = "none";
        nav.style.borderBottomColor = menuOpen ? "#DDD1B6" : "transparent";
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      ref={navRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244,241,234,0)",
        borderBottom: "1px solid transparent",
        transition: "background .45s ease, border-color .45s ease",
        padding: "0 clamp(24px,6vw,96px)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 25,
              fontWeight: 400,
              letterSpacing: ".005em",
              color: "#2A2521",
            }}
          >
            Niora
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "clamp(22px,3vw,40px)" }}>
          {/* Desktop text links */}
          <div className="nav-text-links" style={{ display: "flex", alignItems: "center", gap: "clamp(22px,3vw,40px)" }}>
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{ fontSize: 15, color: "#4A443B", textDecoration: "none", letterSpacing: ".01em", transition: "color .3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8E6C2E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A443B")}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://app.niorasystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-open-app"
            style={{
              fontSize: 14,
              color: "#ffffff",
              textDecoration: "none",
              letterSpacing: ".02em",
              padding: "7px 15px",
              border: "1px solid #000000",
              borderRadius: 12,
              transition: "background .3s ease, color .3s ease, border-color .3s ease",
              whiteSpace: "nowrap",
              backgroundColor: "#000000",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#8E6C2E";
              e.currentTarget.style.borderColor = "#8E6C2E";
              e.currentTarget.style.color = "#F4EFE2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#000000";
              e.currentTarget.style.borderColor = "#000000";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Open App
          </a>

          {/* Hamburger button — mobile only, shown via CSS */}
          <button
            className="nav-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              padding: "6px 2px",
              cursor: "pointer",
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{
              display: "block", width: 22, height: 1.5, background: "#2A2521",
              transition: "transform .25s ease, opacity .25s ease", transformOrigin: "center",
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: 22, height: 1.5, background: "#2A2521",
              transition: "opacity .2s ease", opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 22, height: 1.5, background: "#2A2521",
              transition: "transform .25s ease, opacity .25s ease", transformOrigin: "center",
              transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }} />
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      <div
        className="nav-mobile-menu"
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? 300 : 0,
          transition: "max-height .3s cubic-bezier(.4,0,.2,1)",
          borderTop: menuOpen ? "1px solid #DDD1B6" : "1px solid transparent",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: "6px 0 20px" }}>
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
                fontSize: 22,
                fontWeight: 400,
                color: "#2A2521",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid #EDE5D0",
                transition: "color .2s ease",
                letterSpacing: "-.005em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8E6C2E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2A2521")}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://app.niorasystems.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 18,
              display: "inline-block",
              alignSelf: "flex-start",
              fontFamily: "var(--font-source-sans), system-ui, sans-serif",
              fontSize: 14,
              letterSpacing: ".04em",
              color: "#ffffff",
              background: "#000000",
              border: "1px solid #000000",
              borderRadius: 10,
              padding: "9px 20px",
              textDecoration: "none",
              transition: "background .3s ease, border-color .3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#8E6C2E";
              e.currentTarget.style.borderColor = "#8E6C2E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#000000";
              e.currentTarget.style.borderColor = "#000000";
            }}
          >
            Open App
          </a>
        </div>
      </div>
    </header>
  );
}
