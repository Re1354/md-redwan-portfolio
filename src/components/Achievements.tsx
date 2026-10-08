import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { resume } from '../data/portfolio';

export function Achievements() {
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
    <section id="achievements" className="w-full bg-white pb-32 pt-24 sm:pb-40 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Achievements"
          title="Verified Problem Solving & Awards."
          align="left"
        />

        <motion.div 
          variants={articleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-24 lg:mt-32 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={itemVariants}>
            <h3 className="mb-10 text-xl font-semibold tracking-tight text-ink">Awards & Certificates</h3>
            <ul className="space-y-10">
              {resume.awards.map((award) => (
                <li key={award.title} className="border-b border-line pb-8 last:border-b-0 last:pb-0">
                  <p className="text-sm font-semibold tracking-widest text-accent uppercase">{award.year}</p>
                  <p className="mt-3 text-base leading-relaxed text-ink">{award.title}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-10 text-xl font-semibold tracking-tight text-ink">Problem Solving</h3>
            <ul className="space-y-5">
              {resume.problemSolving.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent/80" aria-hidden="true" />
                  <span className="text-base leading-relaxed text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
