"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-[#818cf8] tracking-widest uppercase mb-4">
            // Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e2e8f0] mb-4">
            Let&apos;s build something
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Open to conversations about interesting engineering challenges, blockchain infrastructure,
            or AI systems. Reach out and let&apos;s connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="mailto:george.thoppil@gmail.com"
            className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #818cf8)",
              boxShadow: "0 0 30px rgba(6,182,212,0.2)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <EmailIcon />
              george.thoppil@gmail.com
            </span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-sm text-slate-500"
        >
          Or find me on{" "}
          <a
            href="https://www.linkedin.com/in/george-thoppil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#818cf8] hover:underline"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a href="/george-thoppil-resume.pdf" download className="text-[#06b6d4] hover:underline">
            download résumé
          </a>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-xs text-slate-600 font-mono"
        >
          © {new Date().getFullYear()} George Thoppil · Toronto, Ontario
        </motion.p>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
