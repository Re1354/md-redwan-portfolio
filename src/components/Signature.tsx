import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from '../utils/motion';

type SignatureProps = {name: string;className?: string;};

export function Signature({ name, className = '' }: SignatureProps) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`inline-block px-1 font-signature leading-none text-ink ${className}`}
      initial={reduce ? { opacity: 0 } : { clipPath: 'inset(-20% 100% -20% 0)' }}
      animate={reduce ? { opacity: 1 } : { clipPath: 'inset(-20% 0% -20% 0)' }}
      transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.1 }}>
      
      {name}
    </motion.span>);

}