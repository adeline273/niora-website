"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

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
        nav.style.borderBottomColor = "transparent";
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "20px clamp(34px,6vw,96px)",
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
          {[
            { href: "#approach", label: "Approach" },
            { href: "#research", label: "Research" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
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
          <a
            href="https://app.niorasystems.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              color: "#ffffff",
              textDecoration: "none",
              letterSpacing: ".02em",
              padding: "7px 15px",
              border: "1px solid #8E6C2E",
              borderRadius: 12,
              transition: "background .3s ease, color .3s ease",
              whiteSpace: "nowrap",
              backgroundColor: "#000000",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#8E6C2E";
              e.currentTarget.style.color = "#F4EFE2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#000000";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Open App
          </a>
        </nav>
      </div>
    </header>
  );
}
