'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const experiences = [
  {
    company: 'KODNEST',
    role: 'Python Full-Stack Developer Intern',
    location: 'Bengaluru',
    duration: 'Feb – May 2026',
    points: [
      'Built responsive UIs with HTML, CSS, and JavaScript',
      'Developed Flask/Django REST APIs with authentication',
      'Implemented MySQL/SQLite CRUD operations',
    ],
  },
  {
    company: 'CodeAlpha',
    role: 'Full Stack Developer Intern',
    location: 'India',
    duration: '2025',
    points: [
      'Developed modular components using React.js and Node.js',
      'Worked with MongoDB for data persistence',
      'Followed clean architecture principles',
    ],
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

interface ExperienceProps {
  teaser?: boolean;
}

export default function Experience({ teaser = false }: ExperienceProps) {
  const displayExps = teaser ? experiences.slice(0, 2) : experiences;

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={container}
      >
        <motion.h2 variants={item} className="text-sm uppercase tracking-[0.3em] text-white/30 mb-4">
          Experience
        </motion.h2>
        <motion.h3 variants={item} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16">
          Where I&apos;ve Worked
        </motion.h3>

        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {displayExps.map((exp) => (
              <motion.div
                key={exp.company}
                variants={item}
                className="relative pl-8 md:pl-16"
              >
                <div className="absolute left-0 md:left-[18px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-[#0a0a0a]" />

                <div className="glass glow-hover rounded-xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      {exp.role}
                    </h4>
                    <span className="text-sm text-white/30 mt-1 sm:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-accent/80 text-sm mb-4">
                    {exp.company} — {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-white/50 text-sm leading-relaxed flex items-start"
                      >
                        <span className="text-accent/50 mr-2 mt-1.5 block w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {teaser && (
          <motion.div variants={item} className="mt-12 text-center">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:text-accent/80 transition-colors"
            >
              View Full Timeline
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
