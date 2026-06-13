"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const METHODS = [
  {
    label: "Email",
    value: "georgethoppil2@gmail.com",
    href: "mailto:georgethoppil2@gmail.com",
    accent: "#06b6d4",
    icon: <EmailIcon />,
  },
  {
    label: "LinkedIn",
    value: "/in/georgethoppil",
    href: "https://www.linkedin.com/in/georgethoppil/",
    external: true,
    accent: "#818cf8",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    value: "github.com/georgethoppil",
    href: "https://github.com/georgethoppil",
    external: true,
    accent: "#a78bfa",
    icon: <GitHubIcon />,
  },
  {
    label: "Résumé",
    value: "Download PDF",
    href: "/george-thoppil-resume.pdf",
    download: true,
    accent: "#34d399",
    icon: <DownloadIcon />,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-hairline bg-card backdrop-blur-sm p-8 sm:p-12 grid md:grid-cols-2 gap-10 md:gap-12 items-center"
        >
          {/* Left: pitch */}
          <div>
            <p className="text-sm font-mono text-[#818cf8] tracking-widest uppercase mb-4">
              // Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
              Let&apos;s build something
            </h2>
            <p className="text-muted leading-relaxed">
              Open to conversations about hard engineering problems, blockchain
              infrastructure, and AI systems, or just to connect.
            </p>
          </div>

          {/* Right: contact methods as rows */}
          <div className="flex flex-col divide-y divide-hairline border-y border-hairline">
            {METHODS.map((m, i) => (
              <motion.a
                key={m.label}
                href={m.href}
                {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(m.download ? { download: true } : {})}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group flex items-center gap-4 py-4 transition-colors duration-200"
              >
                <span
                  className="grid place-items-center w-10 h-10 rounded-xl shrink-0 transition-colors duration-200"
                  style={{ background: `${m.accent}14`, color: m.accent }}
                >
                  {m.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-mono uppercase tracking-widest text-muted">
                    {m.label}
                  </span>
                  <span
                    className="block text-foreground font-medium truncate transition-colors duration-200 group-hover:text-[var(--hover)]"
                    style={{ ["--hover" as string]: m.accent }}
                  >
                    {m.value}
                  </span>
                </span>
                <span
                  className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  style={{ color: m.accent }}
                >
                  <ArrowIcon />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center text-xs text-muted/70 font-mono"
        >
          © {new Date().getFullYear()} George Thoppil · Toronto, Ontario
        </motion.p>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.2 11.19.6.11.82-.25.82-.56v-2.16c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.33-1.73-1.33-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.81 0-1.28.47-2.33 1.23-3.15-.12-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.2.96-.26 1.98-.39 3-.4 1.02.01 2.04.14 3 .4 2.29-1.52 3.29-1.2 3.29-1.2.65 1.64.24 2.85.12 3.15.77.82 1.23 1.87 1.23 3.15 0 4.51-2.81 5.5-5.49 5.79.43.36.81 1.09.81 2.2v3.26c0 .31.22.68.83.56C20.56 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
