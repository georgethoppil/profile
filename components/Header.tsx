"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,18,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300"
        style={{ height: scrolled ? 56 : 76 }}
      >
        {/* Monogram */}
        <a href="#top" className="flex items-center gap-2 group" aria-label="George Thoppil — home">
          <span
            className="grid place-items-center w-9 h-9 rounded-lg font-bold text-sm transition-transform duration-200 group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #818cf8)",
              color: "#0a0a12",
            }}
          >
            GT
          </span>
          <span className="hidden sm:block text-sm font-semibold text-[#e2e8f0] tracking-tight">
            George Thoppil
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Section anchors — hidden on small screens */}
          <ul className="hidden md:flex items-center gap-1 mr-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm text-slate-400 hover:text-[#06b6d4] transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Icon CTAs — always visible */}
          <a
            href="https://www.linkedin.com/in/george-thoppil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-9 h-9 rounded-lg border border-white/10 text-slate-300 hover:text-[#818cf8] hover:border-[#818cf8]/50 transition-colors duration-200"
          >
            <LinkedInIcon />
          </a>
          <a
            href="/george-thoppil-resume.pdf"
            download
            aria-label="Download résumé"
            className="grid place-items-center w-9 h-9 rounded-lg border border-white/10 text-slate-300 hover:text-[#06b6d4] hover:border-[#06b6d4]/50 transition-colors duration-200"
          >
            <DownloadIcon />
          </a>
          <a
            href="mailto:george.thoppil@gmail.com"
            className="ml-1 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #818cf8)",
              boxShadow: "0 0 16px rgba(6,182,212,0.25)",
            }}
          >
            <span className="flex items-center gap-2">
              <EmailIcon />
              <span className="hidden sm:inline">Email</span>
            </span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
