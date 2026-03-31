'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -60]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);

  const y2 = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [60, 0, -60]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0]);

  const y3 = useTransform(scrollYProgress, [0.55, 0.7, 0.8], [60, 0, -60]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center"
    >
      <div className="relative w-full h-full px-6 sm:px-12 md:px-20 lg:px-32">
        {/* 0% — Centered */}
        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight text-center leading-tight">
            Anand Patil<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/40 font-light tracking-wider">
            Full Stack Developer
          </p>
        </motion.div>

        {/* 30% — Left aligned */}
        <motion.div
          style={{ y: y2, opacity: opacity2 }}
          className="absolute inset-0 flex items-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90 max-w-2xl leading-snug">
            I build real-time, data-driven web apps.
          </h2>
        </motion.div>

        {/* 60% — Right aligned */}
        <motion.div
          style={{ y: y3, opacity: opacity3 }}
          className="absolute inset-0 flex items-center justify-end"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90 max-w-2xl leading-snug text-right">
            Bridging clean code and great UX.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
