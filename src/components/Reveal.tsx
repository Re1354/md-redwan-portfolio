import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DURATION, EASE_OUT, VIEWPORT } from '../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 14, className }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.slow, ease: EASE_OUT, delay }}>
      
      {children}
    </motion.div>);

}