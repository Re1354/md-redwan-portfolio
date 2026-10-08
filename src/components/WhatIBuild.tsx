import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function WhatIBuild() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="engineering" className="w-full bg-white pb-24 pt-20 sm:pb-32 sm:pt-24">
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mb-20 max-w-2xl">
          <motion.h2
            variants={itemVariants}
            className="text-sm font-medium tracking-widest text-accent uppercase"
          >
            Engineering Focus
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl leading-relaxed text-ink/90"
          >
            I build full-stack web applications with a focus on secure APIs, role-based systems, and production-ready deployment. My work spans React interfaces, Node.js backends, PostgreSQL/MongoDB data layers, and the integrations needed to ship reliable products.
          </motion.p>
        </div>

        <div className="grid gap-x-12 gap-y-12 lg:gap-y-16 sm:grid-cols-3">
          {/* Focus Item 1 */}
          <motion.div variants={itemVariants} className="group relative flex flex-col cursor-default">
            <div className="mb-6 flex items-center">
              <span className="text-xs font-mono font-semibold tracking-wider text-muted/60">01</span>
              <div className="ml-4 h-[1px] flex-grow bg-line overflow-hidden">
                <div className="h-full w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 motion-safe:transition-transform motion-safe:duration-500 ease-out" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-ink motion-safe:transition-transform motion-safe:duration-300 ease-out group-hover:-translate-y-1">
              FULL-STACK DEVELOPMENT
            </h3>
            <p className="mt-3 text-muted group-hover:text-ink/90 transition-colors duration-300">
              React · Node.js · Express · REST APIs
            </p>
          </motion.div>

          {/* Focus Item 2 */}
          <motion.div variants={itemVariants} className="group relative flex flex-col cursor-default">
            <div className="mb-6 flex items-center">
              <span className="text-xs font-mono font-semibold tracking-wider text-muted/60">02</span>
              <div className="ml-4 h-[1px] flex-grow bg-line overflow-hidden">
                <div className="h-full w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 motion-safe:transition-transform motion-safe:duration-500 ease-out" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-ink motion-safe:transition-transform motion-safe:duration-300 ease-out group-hover:-translate-y-1">
              BACKEND & DATA
            </h3>
            <p className="mt-3 text-muted group-hover:text-ink/90 transition-colors duration-300">
              PostgreSQL · MongoDB · MySQL · Prisma
            </p>
          </motion.div>

          {/* Focus Item 3 */}
          <motion.div variants={itemVariants} className="group relative flex flex-col cursor-default">
            <div className="mb-6 flex items-center">
              <span className="text-xs font-mono font-semibold tracking-wider text-muted/60">03</span>
              <div className="ml-4 h-[1px] flex-grow bg-line overflow-hidden">
                <div className="h-full w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 motion-safe:transition-transform motion-safe:duration-500 ease-out" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-ink motion-safe:transition-transform motion-safe:duration-300 ease-out group-hover:-translate-y-1">
              PRODUCTION SYSTEMS
            </h3>
            <p className="mt-3 text-muted group-hover:text-ink/90 transition-colors duration-300">
              Authentication · RBAC · PWA · Deployment
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
