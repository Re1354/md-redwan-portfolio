import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { profile } from '../data/portfolio';

export function Contact() {
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
    <section id="contact" className="w-full bg-mist py-32 sm:py-40 relative overflow-hidden text-ink border-t border-line/50">
      <div className="absolute inset-0 bg-grid-light opacity-50 mix-blend-overlay"></div>
      
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={articleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let's build something useful.
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-16 leading-relaxed">
            Have an idea, product, or engineering problem to solve? Let's talk.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mb-20">
            <a 
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 motion-safe:hover:-translate-y-0.5"
            >
              GET IN TOUCH
              <ArrowRightIcon className="h-4 w-4 motion-safe:transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12 border-t border-line/50 w-full max-w-3xl">
            <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-muted transition-colors hover:text-ink">Email</a>
            {profile.links.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-sm font-semibold text-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
            <a href={profile.resumeUrl} className="text-sm font-semibold text-muted transition-colors hover:text-ink">Resume</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}