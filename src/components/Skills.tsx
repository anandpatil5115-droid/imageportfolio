'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask', 'Django'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'REST APIs', 'Power BI', 'Socket.IO', 'JWT'],
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

interface SkillsProps {
  teaser?: boolean;
}

export default function Skills({ teaser = false }: SkillsProps) {
  const displayGroups = teaser ? skillGroups.slice(0, 3) : skillGroups;

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={container}
      >
        <motion.h2 variants={item} className="text-sm uppercase tracking-[0.3em] text-white/30 mb-4">
          Skills
        </motion.h2>
        <motion.h3 variants={item} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16">
          Tech Stack
        </motion.h3>

        <div className="space-y-10">
          {displayGroups.map((group) => (
            <motion.div key={group.category} variants={item}>
              <h4 className="text-sm font-medium text-accent/70 uppercase tracking-widest mb-4">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(79, 142, 247, 0.15)' }}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-white/70 border border-white/10 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {teaser && (
          <motion.div variants={item} className="mt-12 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:text-accent/80 transition-colors"
            >
              View All Skills
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
