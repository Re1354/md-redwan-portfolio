import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const capabilities = [
  { id: '01', text: '30+ REST APIs' },
  { id: '02', text: '~1,000 Students Supported' },
  { id: '03', text: 'Role-Based Access Control' },
  { id: '04', text: 'Progressive Web Apps' },
  { id: '05', text: 'Payment & Service Integrations' },
  { id: '06', text: 'Production Deployment' }
];

export function EngineeringHighlights() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="w-full bg-white pb-24 sm:pb-32">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >

        <div className="mb-10">
          <motion.h2
            variants={itemVariants}
            className="text-sm font-medium tracking-widest text-accent uppercase"
          >
            Engineering Capabilities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              variants={itemVariants}
              className="group flex items-baseline gap-5 border-t border-line pt-5"
            >
              <span className="text-xs font-mono font-semibold tracking-wider text-muted/50 shrink-0">
                {cap.id}
              </span>
              <span className="text-lg font-semibold text-ink motion-safe:transition-colors motion-safe:duration-300 group-hover:text-accent">
                {cap.text}
              </span>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
