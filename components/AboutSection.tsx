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
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e2e8f0]">
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
            className="space-y-4 text-slate-300 leading-relaxed"
          >
            <p>
              Passionate software engineer with over a decade of experience shipping production systems for some of the world&apos;s most demanding platforms — from Shopify&apos;s merchant infrastructure to Kraken&apos;s tokenized asset platform.
            </p>
            <p>
              At <span className="text-[#06b6d4] font-semibold">Kraken</span>, I work on the Payward Services team helping tokenize real-world assets on-chain — including contributing to the tokenization of SpaceX equity. Previously at <span className="text-[#818cf8] font-semibold">Shopify</span>, I overhauled the scripts editor and drove mobile transformation for merchant-facing applications.
            </p>
            <p>
              I hold a B.Eng in Computer Engineering from the University of Toronto and enjoy pushing the limits of what hardware and software can do together — from CUDA kernels to Rust firmware on microcontrollers.
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-sm text-slate-200 hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/5 transition-colors duration-200"
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
