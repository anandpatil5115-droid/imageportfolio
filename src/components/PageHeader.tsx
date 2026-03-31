'use client';

import { motion, type Variants } from 'framer-motion';

interface PageHeaderProps {
  number: string;
  label: string;
  title: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function PageHeader({ number, label, title }: PageHeaderProps) {
  return (
    <div className="pt-32 sm:pt-40 pb-12 sm:pb-16">
      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="text-sm font-medium text-white/30 tracking-widest uppercase mb-4"
      >
        {number} — {label}
      </motion.p>
      <motion.h1
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="accent-line mt-6 origin-left"
      />
    </div>
  );
}
