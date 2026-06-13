"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SKILL_GROUPS = [
  {
    category: "Languages",
    color: "#06b6d4",
    skills: ["Rust", "Ruby", "Java", "TypeScript", "JavaScript", "C++", "PL-SQL", "XML"],
  },
  {
    category: "Infra & Cloud",
    color: "#818cf8",
    skills: ["Kubernetes", "CUDA", "Kafka", "Docker", "Linux", "CI/CD"],
  },
  {
    category: "Web & Mobile",
    color: "#34d399",
    skills: ["Ruby on Rails", "React Native", "REST APIs", "Next.js", "Salesforce"],
  },
  {
    category: "Data & Finance",
    color: "#f59e0b",
    skills: ["SQL", "Fidelity Data Integration", "Rational Rose", "R-Tracker", "Financial Modeling"],
  },
  {
    category: "Blockchain",
    color: "#9945FF",
    skills: ["Cardano", "Midnight Chain", "Web3", "Smart Contracts", "Asset Tokenization", "Wallet Development"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-foreground">Technical Toolkit</h2>
        </motion.div>

        <div className="space-y-10">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <p
                className="text-xs font-mono tracking-widest uppercase mb-4"
                style={{ color: group.color }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.04 }}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      color: group.color,
                      borderColor: `${group.color}30`,
                      background: `${group.color}0d`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${group.color}80`;
                      (e.currentTarget as HTMLElement).style.background = `${group.color}20`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${group.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${group.color}30`;
                      (e.currentTarget as HTMLElement).style.background = `${group.color}0d`;
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-mono text-[#818cf8] tracking-widest uppercase mb-3">
      // {children}
    </p>
  );
}
