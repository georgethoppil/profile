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
}

const ROLES: Role[] = [
  {
    company: "Kraken",
    title: "Senior Software Engineer",
    period: "Apr 2026 – Present",
    location: "Toronto, ON",
    bullets: [
      "Helping tokenize real-world IPO assets on-chain with the Payward Services team, including the landmark tokenization of SpaceX equity.",
      "Build and operate distributed backend systems powering institutional asset management and DeFi.",
      "Work across high-stakes financial infrastructure where correctness and reliability are non-negotiable.",
    ],
    accent: "#9945FF",
  },
  {
    company: "Startup Advisor",
    title: "Technical & Engineering Advisor",
    period: "2023 – Present",
    note: "Concurrent · Advisory",
    bullets: [
      "Advise early-stage startups on engineering strategy, technical architecture, and team scaling.",
      "Guide founders through technology decisions spanning fintech, blockchain, and AI infrastructure.",
      "Review system design and hiring to help teams ship faster and more reliably.",
    ],
    accent: "#34d399",
  },
  {
    company: "Blockchain Consultant",
    title: "Rust Engineer",
    period: "Sep 2024 – Apr 2026",
    note: "Independent · with Webisoft",
    bullets: [
      "Co-created the 1am.xyz wallet for Midnight, a privacy-focused sidechain of the Cardano ecosystem.",
      "Built wallet cryptographic primitives and chain integration in Rust.",
      "Shipped secure, production-ready tooling for the Midnight network.",
    ],
    accent: "#06b6d4",
  },
  {
    company: "Shopify",
    title: "Senior Software Engineer",
    period: "Dec 2018 – May 2023",
    location: "Toronto, ON",
    bullets: [
      "Rebuilt the Scripts editor merchants use to customize checkout, improving performance and developer experience.",
      "Led the Salesforce Platform Pod, owning architecture for a scalable, maintainable codebase.",
      "Shipped React Native features across customer-facing and internal Shopify apps.",
      "Raised the engineering bar through rigorous code review across teams.",
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
      "Architected the RESTful API backend powering trading workflows for major banking clients.",
      "Led the native rebuild of the TierACE mobile application.",
      "Delivered end-to-end Salesforce solutions and integrated Fidelity data for key accounts.",
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
      "Built financial software in Java, PL-SQL, and XML for the RPM Open and OpenAdmin products.",
      "Designed and implemented financial models using Rational Rose.",
      "Owned testing and defect resolution to keep releases dependable.",
    ],
    accent: "#f59e0b",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-foreground">Career Timeline</h2>

        <div className="space-y-10 md:space-y-12">
          {ROLES.map((role, i) => (
            <TimelineRow key={role.company + role.period} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ role, index }: { role: Role; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="md:grid md:grid-cols-[180px_1fr]"
    >
      {/* Date rail (left) */}
      <div className="md:text-right md:pr-8 mb-3 md:mb-0 md:pt-5">
        <p className="text-sm font-mono font-semibold" style={{ color: role.accent }}>
          {role.period}
        </p>
        {role.note && (
          <p className="text-xs text-muted font-mono mt-1">{role.note}</p>
        )}
        {role.location && (
          <p className="text-xs text-muted mt-1">{role.location}</p>
        )}
      </div>

      {/* Content (right), with the timeline line as its left border */}
      <div className="relative md:border-l md:border-hairline md:pl-8">
        {/* Dot on the line */}
        <span
          className="absolute -left-[6.5px] top-6 w-3 h-3 rounded-full border-2 bg-background hidden md:block"
          style={{ borderColor: role.accent, boxShadow: `0 0 10px ${role.accent}80` }}
        />

        <div
          className="group rounded-2xl border border-hairline bg-card backdrop-blur-sm p-6 hover:bg-card-hover transition-colors duration-300"
          style={{ borderLeft: `3px solid ${role.accent}` }}
        >
          <h3 className="text-lg font-bold text-foreground">{role.company}</h3>
          <p className="text-sm font-semibold mb-4" style={{ color: role.accent }}>
            {role.title}
          </p>
          <ul className="space-y-2">
            {role.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: role.accent }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-mono text-[#818cf8] tracking-widest uppercase mb-3">
      // {children}
    </p>
  );
}
