"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Role {
  company: string;
  title: string;
  period: string;
  location?: string;
  note?: string;
  bullets: string[];
  accent: string;
  logo?: string;
}

const ROLES: Role[] = [
  {
    company: "Kraken",
    title: "Senior Software Engineer",
    period: "Apr 2026 – Present",
    location: "Toronto, ON",
    bullets: [
      "Part of the Payward Services team, building infrastructure for tokenization of real-world IPO assets on-chain.",
      "Contributed to the tokenization of SpaceX equity — one of the most high-profile blockchain asset offerings.",
      "Working across distributed backend systems supporting DeFi and institutional asset management.",
    ],
    accent: "#9945FF",
  },
  {
    company: "Startup Advisor",
    title: "Technical & Engineering Advisor",
    period: "2023 – Present",
    location: "Concurrent",
    note: "Advisory",
    bullets: [
      "Advise early-stage startups on engineering strategy, technical architecture, and team scaling.",
      "Guide founders through technology decisions spanning fintech, blockchain, and AI infrastructure.",
      "Provide hands-on review of system design and hiring to help teams ship faster and more reliably.",
    ],
    accent: "#34d399",
  },
  {
    company: "Blockchain Consultant",
    title: "Rust Engineer",
    period: "Sep 2024 – Apr 2026",
    location: "Remote",
    note: "Independent consulting",
    bullets: [
      "Co-created the 1am.xyz wallet for Midnight chain, a privacy-focused sidechain of the Cardano ecosystem.",
      "Developed wallet cryptographic primitives and chain integration in Rust.",
      "Delivered secure, production-ready smart contract tooling for the Midnight network.",
    ],
    accent: "#06b6d4",
  },
  {
    company: "Shopify",
    title: "Senior Software Engineer",
    period: "Dec 2018 – May 2023",
    location: "Toronto, ON",
    bullets: [
      "Overhauled the scripts editor application, improving performance and enforcing best practices across the team.",
      "Conducted comprehensive code reviews and raised quality standards company-wide.",
      "Played a key role in React Native development for multiple customer and internal Shopify apps.",
      "Managed the Salesforce Platform Pod, making architectural decisions and ensuring delivery of maintainable code.",
    ],
    accent: "#96BF48",
  },
  {
    company: "Tier1 Financial Solutions",
    title: "Lead Software Engineer",
    period: "Apr 2015 – Dec 2018",
    location: "Toronto, ON",
    note: "Acquired by SS&C Technologies",
    bullets: [
      "Led backend architecture focusing on RESTful web APIs for major banking clients.",
      "Drove the transformation of TierACE mobile application, enhancing its native capabilities.",
      "Delivered end-to-end Salesforce POS solutions, improving the TierACE product suite.",
      "Successfully integrated Fidelity data and developed custom solutions for key clients.",
    ],
    accent: "#818cf8",
  },
  {
    company: "RPM Technologies",
    title: "Software Engineer",
    period: "Jun 2014 – Apr 2015",
    location: "Toronto, ON",
    note: "Now Broadridge",
    bullets: [
      "Collaborated on financial software solutions using Java, PL-SQL, and XML.",
      "Spearheaded design and implementation of robust financial models using Rational Rose.",
      "Enhanced capabilities of RPM Open and OpenAdmin products through optimization techniques.",
      "Executed comprehensive testing procedures, documenting defect resolutions in R-Tracker.",
    ],
    accent: "#f59e0b",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-[#e2e8f0]">Career Timeline</h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#06b6d4]/60 via-[#818cf8]/40 to-transparent hidden md:block" />

          <div className="space-y-12">
            {ROLES.map((role, i) => (
              <TimelineCard key={role.company + role.period} role={role} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ role, index }: { role: Role; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative md:grid md:grid-cols-2 md:gap-8">
      {/* Timeline dot (desktop) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#06b6d4] bg-[#0a0a12] z-10 hidden md:block"
        style={{ boxShadow: `0 0 10px ${role.accent}80` }}
      />

      {/* Spacer for alternating layout */}
      {isLeft ? null : <div className="hidden md:block" />}

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`group relative rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/6 transition-all duration-300 ${isLeft ? "" : "md:col-start-1 md:row-start-1"}`}
        style={{ borderLeft: `3px solid ${role.accent}` }}
      >
        <div className="flex items-start justify-between mb-1 flex-wrap gap-2">
          <div>
            <h3 className="text-lg font-bold text-[#e2e8f0]">{role.company}</h3>
            {role.note && (
              <span className="text-xs text-slate-500 font-mono">{role.note}</span>
            )}
          </div>
          <span
            className="text-xs font-mono px-3 py-1 rounded-full border"
            style={{ color: role.accent, borderColor: `${role.accent}40`, background: `${role.accent}10` }}
          >
            {role.period}
          </span>
        </div>
        <p className="text-sm font-semibold mb-4" style={{ color: role.accent }}>
          {role.title}
        </p>
        <ul className="space-y-2">
          {role.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: role.accent }} />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Spacer on right side for left cards (desktop) */}
      {isLeft ? <div className="hidden md:block" /> : null}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-mono text-[#818cf8] tracking-widest uppercase mb-3">
      // {children}
    </p>
  );
}
