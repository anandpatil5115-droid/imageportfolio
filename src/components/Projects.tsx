'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Live Group Chat with AI Assistant',
    description:
      'Full-stack real-time group chat with JWT authentication and RESTful APIs. MySQL for structured storage of users, messages, and transactions. Built with Socket.IO for instant messaging.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Socket.IO', 'JWT', 'REST APIs'],
  },
  {
    title: 'Personal Expense Tracker',
    description:
      'Responsive UI for expense categorization and spending tracking. Interactive charts via Chart.js and downloadable PDF summaries. Clean architecture for financial data visualization.',
    stack: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Chart.js'],
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

interface ProjectsProps {
  /** When true, renders compact teaser mode for the homepage */
  teaser?: boolean;
}

export default function Projects({ teaser = false }: ProjectsProps) {
  const displayProjects = teaser ? projects.slice(0, 2) : projects;

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={container}
      >
        <motion.h2 variants={item} className="text-sm uppercase tracking-[0.3em] text-white/30 mb-4">
          Projects
        </motion.h2>
        <motion.h3 variants={item} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16">
          What I&apos;ve Built
        </motion.h3>

        <div className="grid gap-8 md:grid-cols-2">
          {displayProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="glass glow-hover rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h4>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent/80 border border-accent/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {teaser && (
          <motion.div variants={item} className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:text-accent/80 transition-colors"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        )}

        {!teaser && (
          <motion.div variants={item} className="mt-8">
            <div className="glass rounded-2xl p-8 text-center">
              <p className="text-white/30 text-sm">More exciting projects coming soon...</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
