"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
}

export default function ScrollReveal({ children, delay = 0, className, style, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.style.transitionDelay = delay + "ms";
      el.setAttribute("data-reveal-done", "");
      el.classList.add("revealed");
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { reveal(); io.unobserve(el); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    io.observe(el);

    // Fallback: also reveal anything already in view
    const check = () => {
      if (el.classList.contains("revealed")) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.94 && r.bottom > 0) { reveal(); io.unobserve(el); }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [delay]);

  return (
    <div ref={ref} data-reveal="" className={className} style={style}>
      {children}
    </div>
  );
}
