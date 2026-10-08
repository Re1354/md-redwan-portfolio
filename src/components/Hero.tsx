import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { profile } from '../data/portfolio';

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-white pb-16 pt-32 sm:pb-24 sm:pt-40 lg:min-h-[90vh] flex items-center">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl relative z-20"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-6 bg-accent"></span>
              <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                Full-Stack Software Developer
              </p>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-6xl lg:text-[64px] lg:leading-[1.1]">
              I engineer robust web applications and production-ready systems.
            </h1>

            <div className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              <p>Based in Dhaka, I specialize in building scalable architectures—from complex database schemas and secure REST APIs to responsive React interfaces.</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#projects"
                className="group flex items-center gap-2 text-base font-medium text-white bg-ink px-6 py-3 rounded hover:bg-accent transition-colors"
              >
                View Featured Work
                <ArrowRightIcon className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="text-base font-medium text-ink transition-colors hover:text-accent"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:absolute lg:right-0 lg:bottom-0 flex justify-center lg:justify-end mt-12 lg:mt-0 lg:w-[55%] z-0 pointer-events-none"
          >
            <div className="relative w-full max-w-[600px] lg:max-w-[700px] xl:max-w-[750px] -mr-4 lg:-mr-8">
              <img
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                className="relative z-10 w-full h-auto object-cover object-bottom mix-blend-multiply opacity-95 transition-transform duration-700 hover:scale-[1.02] translate-y-[2%]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}