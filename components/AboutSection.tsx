"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const interests = [
  { label: "CUDA & Kubernetes Inference", icon: "⚡" },
  { label: "LLM & Vision Models", icon: "🧠" },
  { label: "ESP32 Embedded (Rust / C++)", icon: "🔌" },
  { label: "Blockchain & Web3", icon: "⛓️" },
  { label: "Distributed Systems", icon: "🌐" },
  { label: "Financial Technology", icon: "📈" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>About</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
            Building at the intersection of{" "}
            <span className="text-[#06b6d4]">finance</span>,{" "}
            <span className="text-[#818cf8]">blockchain</span>, and{" "}
            <span style={{ background: "linear-gradient(90deg,#06b6d4,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AI systems
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4 text-muted leading-relaxed"
          >
            <p>
              I&apos;m a senior engineer with over a decade shipping production systems for some of the most demanding platforms in tech. Today at <span className="text-[#06b6d4] font-semibold">Kraken</span>, I help tokenize real-world assets on-chain with the Payward Services team, including the landmark tokenization of SpaceX equity.
            </p>
            <p>
              Before that, I spent four years at <span className="text-[#818cf8] font-semibold">Shopify</span> rebuilding merchant-facing infrastructure, and led backend architecture at Tier1 Financial Solutions through its acquisition by SS&amp;C. I hold a B.Eng in Computer Engineering from the University of Toronto.
            </p>
            <p>
              Outside the day job, I advise early-stage startups and tinker at the edges: CUDA inference on Kubernetes, vision and language models, and Rust firmware on bare-metal microcontrollers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-sm font-mono text-[#06b6d4] tracking-widest uppercase mb-5">
              Current Interests
            </p>
            <div className="flex flex-wrap gap-3">
              {interests.map((item, i) => (
                <motion.span
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-hairline bg-card backdrop-blur-sm text-foreground hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/5 transition-colors duration-200"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
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
