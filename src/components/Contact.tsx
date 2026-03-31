'use client';

import { motion, type Variants } from 'framer-motion';

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.h2 variants={item} className="text-sm uppercase tracking-[0.3em] text-white/30 mb-4">
          Contact
        </motion.h2>
        <motion.h3 variants={item} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Let&apos;s Connect
        </motion.h3>
        <motion.p variants={item} className="text-white/50 text-base sm:text-lg mb-10 leading-relaxed">
          Currently graduating May 2026. Open to full-stack roles where I can
          build performant, data-driven products.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:anandpatil5115@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-white font-semibold text-sm sm:text-base hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/Anand_Resume.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 text-white/80 font-medium text-sm sm:text-base hover:bg-white/5 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/30 text-sm">
            <a href="mailto:anandpatil5115@gmail.com" className="hover:text-accent transition-colors">
              anandpatil5115@gmail.com
            </a>
            <span className="hidden sm:block">·</span>
            <a href="tel:+917892033398" className="hover:text-accent transition-colors">
              +91 7892033398
            </a>
            <span className="hidden sm:block">·</span>
            <span>Kalaburagi, India</span>
          </div>
          <p className="mt-6 text-white/15 text-xs">
            Built with Next.js, Framer Motion &amp; Tailwind CSS
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
