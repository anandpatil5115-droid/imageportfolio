'use client';

import { motion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const languages = [
  { name: 'English', flag: 'EN' },
  { name: 'Hindi', flag: 'HI' },
  { name: 'Marathi', flag: 'MR' },
  { name: 'Kannada', flag: 'KN' },
];

const certifications = [
  {
    title: 'Microsoft Data Analytics',
    issuer: 'GTTC MSDC Kalaburagi',
  },
];

export default function About() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] px-6 sm:px-12 md:px-20 lg:px-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={container}
        className="max-w-5xl mx-auto"
      >
        {/* Photo + Summary */}
        <div className="grid md:grid-cols-5 gap-12 items-start mb-20">
          <motion.div variants={item} className="md:col-span-2">
<div className="relative mx-auto md:mx-0 w-48 sm:w-56 md:w-full max-w-[280px]">
            {/* Your actual photo */}
            <img
              src="/Anand.png"
              alt="Anand Patil"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Electric‑blue glow border (keeps the same effect) */}
            <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 shadow-[0_0_40px_rgba(79,142,247,0.15)] -z-10" />
          </div>
          </motion.div>

          <motion.div variants={item} className="md:col-span-3">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
              Final-year CS student building the future
            </h3>
            <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
              <p>
                I&apos;m Anand Patil, a final-year Computer Science student at Visvesvaraya Technological University (VTU), Kalaburagi, graduating in May 2026 with a CGPA of 8.0/10.
              </p>
              <p>
                I have strong fundamentals in data structures, problem solving, Java, and Python. My passion lies in building full-stack web applications that combine clean architecture with intuitive user experiences.
              </p>
              <p>
                I actively use AI tools to understand concepts faster and debug code more efficiently — while always ensuring I deeply understand the underlying logic and architecture myself.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Education + Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Education */}
          <motion.div variants={item} className="glass glow-hover rounded-2xl p-8">
            <h4 className="text-sm uppercase tracking-[0.3em] text-accent/70 mb-4">Education</h4>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-2">
              B.Tech in Computer Science
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Visvesvaraya Technological University (VTU), Kalaburagi
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/15">
                CGPA 8.0/10
              </span>
              <span className="text-white/30 text-sm">Graduating May 2026</span>
            </div>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {['Data Structures & Algorithms', 'Database Systems', 'Web Development', 'Machine Learning'].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-lg text-xs text-white/50 bg-white/5 border border-white/10"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={item} className="glass glow-hover rounded-2xl p-8">
            <h4 className="text-sm uppercase tracking-[0.3em] text-accent/70 mb-4">Certifications</h4>
            {certifications.map((cert) => (
              <div key={cert.title} className="mb-6 last:mb-0">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-white/50 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div variants={item}>
          <h4 className="text-sm uppercase tracking-[0.3em] text-white/30 mb-6">Languages Spoken</h4>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-3 px-5 py-3 rounded-xl glass"
              >
                <span className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent">
                  {lang.flag}
                </span>
                <span className="text-white/70 text-sm font-medium">{lang.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
