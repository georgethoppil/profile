"use client";

import { useEffect, useRef } from "react";

// Drifting blurred color blobs with cursor parallax on desktop.
// Each blob lives in a wrapper that gets a mouse-driven translate (via rAF),
// while the inner blob runs an independent CSS drift keyframe, so the two
// motions compose into something that feels alive.

const GRAIN =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`
  );

export default function AuroraBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Skip pointer parallax on touch devices; the CSS drift still runs.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const layers = Array.from(
      root.querySelectorAll<HTMLElement>("[data-depth]")
    );

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;
      for (const layer of layers) {
        const depth = parseFloat(layer.dataset.depth || "0");
        layer.style.transform = `translate3d(${curX * depth}px, ${curY * depth}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-70 dark:opacity-100"
    >
      {/* Cyan */}
      <div data-depth="70" className="absolute inset-0 will-change-transform">
        <div
          className="absolute -top-1/4 left-[8%] w-[55vw] h-[55vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(6,182,212,0.55), transparent 60%)",
            filter: "blur(80px)",
            animation: "aurora-1 18s ease-in-out infinite",
          }}
        />
      </div>
      {/* Indigo */}
      <div data-depth="-55" className="absolute inset-0 will-change-transform">
        <div
          className="absolute top-[2%] right-[4%] w-[50vw] h-[50vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(129,140,248,0.5), transparent 60%)",
            filter: "blur(85px)",
            animation: "aurora-2 23s ease-in-out infinite",
          }}
        />
      </div>
      {/* Violet */}
      <div data-depth="40" className="absolute inset-0 will-change-transform">
        <div
          className="absolute bottom-[-18%] left-[28%] w-[45vw] h-[45vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(168,85,247,0.4), transparent 60%)",
            filter: "blur(90px)",
            animation: "aurora-3 20s ease-in-out infinite",
          }}
        />
      </div>
      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("${GRAIN}")`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}
