import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownToLineIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { resume, coursework, profile } from '../data/portfolio';

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  const articleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="education" className="w-full bg-white pb-32 pt-24 sm:pb-40 sm:pt-32 border-t border-line/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            label="Education"
            title="Academic Background."
            align="left"
          />
          
          <a
            href={profile.resumeUrl}
            className="group flex flex-shrink-0 items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
          >
            <span className="border-b border-ink/20 pb-0.5 transition-colors group-hover:border-accent">
              Download Resume
            </span>
            <ArrowDownToLineIcon className="h-4 w-4 motion-safe:transition-transform group-hover:translate-y-1" />
          </a>
        </div>

        <motion.div 
          variants={articleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-24 lg:mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={itemVariants}>
            <ol className="space-y-12">
              {resume.education.map((entry) => (
                <li key={entry.title}>
                  <p className="text-sm font-semibold tracking-widest text-accent uppercase">{entry.period}</p>
                  <h4 className="mt-3 text-lg font-semibold text-ink">{entry.title}</h4>
                  <p className="mt-1 text-base font-medium text-ink/80">{entry.org}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{entry.detail}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-6 text-xs font-semibold tracking-widest text-accent uppercase">Core Coursework</h3>
            <ul className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <li key={course} className="rounded bg-mist border border-line/50 px-3 py-1.5 font-mono text-xs font-medium tracking-wide text-ink hover:border-line hover:bg-white transition-colors">
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
