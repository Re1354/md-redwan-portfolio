import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import type { NavItem } from '../types/portfolio';
import { navIcons } from './navIcons';
import { EASE_OUT } from '../utils/motion';

type NavMoreMenuProps = {items: NavItem[];active: string;};

export function NavMoreMenu({ items, active }: NavMoreMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isActive = items.some((i) => i.id === active);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className={`relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors duration-150 ${
        isActive || open ? 'text-ink' : 'text-muted hover:text-ink'}`
        }>
        
        More
        <ChevronDownIcon
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-200 ease-out ${open ? 'rotate-180' : ''}`} />
        
        {isActive &&
        <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 mx-auto h-1 w-1 rounded-full bg-accent" />
        }
      </button>

      <AnimatePresence>
        {open &&
        <motion.ul
          role="menu"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : -4 }}
          transition={{ duration: 0.18, ease: EASE_OUT }}
          style={{ transformOrigin: 'top right' }}
          className="absolute right-0 top-full mt-4 w-56 rounded-2xl border border-line bg-white p-2 shadow-soft-lg">
          
            {items.map((item) => {
            const Icon = navIcons[item.id];
            const current = active === item.id;
            return (
              <li key={item.id} role="none">
                  <a
                  role="menuitem"
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={current ? 'true' : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 hover:bg-mist ${
                  current ? 'text-ink' : 'text-muted hover:text-ink'}`
                  }>
                  
                    {Icon && <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />}
                    {item.label}
                    {current && <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" />}
                  </a>
                </li>);

          })}
          </motion.ul>
        }
      </AnimatePresence>
    </div>);

}