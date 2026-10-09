import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DURATION, EASE_OUT, VIEWPORT } from '../utils/motion';

type MaskedLine = {text: string;className?: string;};

type MaskedTextProps = {
  lines: MaskedLine[];
  delay?: number;
  stagger?: number;
  inView?: boolean;
};

export function MaskedText({ lines, delay = 0, stagger = 0.035, inView = false }: MaskedTextProps) {
  const reduce = useReducedMotion();
  let wordIndex = 0;

  return (
    <>
      {lines.map((line, lineIdx) =>
      <span key={lineIdx} className={`block ${line.className ?? ''}`}>
          {line.text.split(' ').map((word, i) => {
          const order = wordIndex++;
          const hidden = reduce ? { opacity: 0 } : { y: '105%' };
          const shown = reduce ? { opacity: 1 } : { y: '0%' };
          const transition = { duration: DURATION.slow, ease: EASE_OUT, delay: delay + order * stagger };
          return (
            <React.Fragment key={`${word}-${i}`}>
                <span className="-mb-[0.1em] inline-block overflow-hidden pb-[0.1em] align-top">
                  {inView ?
                <motion.span
                  className="inline-block"
                  initial={hidden}
                  whileInView={shown}
                  viewport={VIEWPORT}
                  transition={transition}>
                  
                      {word}
                    </motion.span> :

                <motion.span className="inline-block" initial={hidden} animate={shown} transition={transition}>
                      {word}
                    </motion.span>
                }
                </span>{' '}
              </React.Fragment>);

        })}
        </span>
      )}
    </>);

}