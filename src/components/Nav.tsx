"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/#approach", label: "Approach", key: "approach" },
  { href: "/#research", label: "Research", key: "research" },
  { href: "/careers", label: "Careers", key: "careers" },
  { href: "/#contact", label: "Contact", key: "contact" },
];

interface NavProps {
  forceSolid?: boolean;
  activeLink?: string;
}

export default function Nav({ forceSolid = false, activeLink }: NavProps) {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceSolid);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const applyHeader = (overHero: boolean) => {
      setScrolled(!overHero);
      if (overHero) {
        nav.style.background = menuOpen ? "rgba(21,17,13,1)" : "rgba(244,241,234,0)";
        nav.style.borderBottomColor = menuOpen ? "#3A332C" : "transparent";
      } else {
        nav.style.background = "#F4F1EA";
        nav.style.borderBottomColor = "transparent";
      }
    };

    if (forceSolid) {
      nav.style.background = "#F4F1EA";
      nav.style.borderBottomColor = "transparent";
      return;
    }

    const hero = document.querySelector("#top") as HTMLElement | null;
    if (hero && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => applyHeader(e.isIntersecting)),
        { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
      );
      observer.observe(hero);
      return () => observer.disconnect();
    }

    // Fallback for browsers without IntersectionObserver
    const onScroll = () => applyHeader(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen, forceSolid]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: forceSolid ? "#F4F1EA" : "rgba(244,241,234,0)",
        borderBottom: "1px solid transparent",
        transition: "background .45s ease, border-color .45s ease",
        padding: "0 clamp(24px,6vw,96px)",
        transform: "translateZ(0)",
        willChange: "background",
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
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              fontSize: 25,
              fontWeight: 400,
              letterSpacing: ".005em",
              color: scrolled ? "#2A2521" : "#F4EFE2",
              transition: "color .45s ease",
            }}
          >
            Niora
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "clamp(22px,3vw,40px)" }}>
          {/* Desktop text links */}
          <div className="nav-text-links" style={{ display: "flex", alignItems: "center", gap: "clamp(22px,3vw,40px)" }}>
            {LINKS.map(({ href, label, key }) => {
              const isActive = activeLink === key;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: 15,
                    color: isActive ? "#221D18" : (scrolled ? "#4A443B" : "#EFE7D4"),
                    fontWeight: isActive ? 600 : 400,
                    textDecoration: "none",
                    letterSpacing: ".01em",
                    transition: "color .45s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#8E6C2E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#221D18" : (scrolled ? "#4A443B" : "#EFE7D4"))}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/signup"
            className="nav-open-app"
            style={{
              fontSize: 14,
              color: "#F4EFE2",
              textDecoration: "none",
              letterSpacing: ".02em",
              padding: "8px 20px",
              borderRadius: 999,
              transition: "background .3s ease, color .3s ease",
              whiteSpace: "nowrap",
              backgroundColor: "#15110D",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#8E6C2E";
              e.currentTarget.style.color = "#F4EFE2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#15110D";
              e.currentTarget.style.color = "#F4EFE2";
            }}
          >
            Sign Up
          </Link>

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
              display: "block", width: 22, height: 1.5, background: scrolled ? "#2A2521" : "#F4EFE2",
              transition: "transform .25s ease, opacity .25s ease, background .45s ease", transformOrigin: "center",
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: 22, height: 1.5, background: scrolled ? "#2A2521" : "#F4EFE2",
              transition: "opacity .2s ease, background .45s ease", opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 22, height: 1.5, background: scrolled ? "#2A2521" : "#F4EFE2",
              transition: "transform .25s ease, opacity .25s ease, background .45s ease", transformOrigin: "center",
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
          borderTop: menuOpen ? `1px solid ${scrolled ? "#DDD1B6" : "#3A332C"}` : "1px solid transparent",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: "6px 0 20px" }}>
          {LINKS.map(({ href, label, key }) => {
            const isActive = activeLink === key;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                  fontSize: 22,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#221D18" : (scrolled ? "#2A2521" : "#F4EFE2"),
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: `1px solid ${scrolled ? "#EDE5D0" : "#3A332C"}`,
                  transition: "color .2s ease",
                  letterSpacing: "-.005em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8E6C2E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#221D18" : (scrolled ? "#2A2521" : "#F4EFE2"))}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 18,
              display: "inline-block",
              alignSelf: "flex-start",
              fontFamily: "var(--font-franklin), system-ui, sans-serif",
              fontSize: 14,
              letterSpacing: ".04em",
              color: "#F4EFE2",
              background: "#15110D",
              borderRadius: 999,
              padding: "9px 20px",
              textDecoration: "none",
              transition: "background .3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#8E6C2E"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#15110D"; }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
