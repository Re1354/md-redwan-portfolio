import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { DURATION, EASE_OUT } from '../utils/motion';

type CopyEmailButtonProps = {email: string;};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 items-center gap-2 rounded-md border border-night-line px-3 font-mono text-[12px] text-night-muted transition-[border-color,color] duration-150 ease-out hover:border-night-muted hover:text-bone">
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? 'copied' : 'copy'}
          className="inline-flex items-center gap-2"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: DURATION.fast, ease: EASE_OUT }}>
          
          {copied ?
          <CheckIcon aria-hidden="true" className="h-3.5 w-3.5 text-accent-light" /> :

          <CopyIcon aria-hidden="true" className="h-3.5 w-3.5" />
          }
          {copied ? 'Copied' : 'Copy'}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </button>);

}