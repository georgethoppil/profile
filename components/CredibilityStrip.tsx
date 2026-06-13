"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ITEMS = [
  { value: "10+", label: "Years Engineering" },
  { value: "Kraken", label: "Senior SWE · Payward" },
  { value: "Shopify", label: "Senior SWE" },
  { value: "Tier1", label: "Lead · acq. by SS&C" },
  { value: "U of T", label: "B.Eng, Computer Eng." },
];

export default function CredibilityStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="px-6 py-10 border-y border-white/5 bg-white/[0.015]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div
              className="text-xl sm:text-2xl font-bold mb-1"
              style={{
                background: "linear-gradient(135deg, #e2e8f0, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {item.value}
            </div>
            <div className="text-[11px] text-slate-500 font-mono tracking-wide uppercase leading-tight">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
