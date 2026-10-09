import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';
import { DURATION, EASE_OUT } from '../utils/motion';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible &&
      <motion.a
        href="#home"
        aria-label="Back to top"
        className="group fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-xl border border-line/70 bg-white text-ink shadow-soft-lg md:bottom-8 md:right-8"
        initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 8 }}
        transition={{ duration: DURATION.base, ease: EASE_OUT }}>
        
          <ArrowUpIcon
          aria-hidden="true"
          className="h-5 w-5 transition-transform duration-150 ease-out group-hover:-translate-y-0.5"
          strokeWidth={1.75} />
        
        </motion.a>
      }
    </AnimatePresence>);

}