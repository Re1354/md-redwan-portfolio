import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { navIcons } from './navIcons';
import { NavMoreMenu } from './NavMoreMenu';
import { Signature } from './Signature';
import { DURATION, EASE_OUT } from '../utils/motion';

export function Nav() {
  const active = useActiveSection(navItems.map((n) => n.id));
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const primary = navItems.filter((n) => n.primary);
  const secondary = navItems.filter((n) => !n.primary && n.id !== 'home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4"
      initial={{ opacity: 0, y: reduce ? 0 : -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow, ease: EASE_OUT, delay: 0.15 }}>
      
      <div className="site-container relative">
        <nav
          aria-label="Primary"
          className={`flex h-16 items-center justify-between rounded-2xl border bg-white/95 pl-4 pr-2 transition-[box-shadow,border-color] duration-200 ease-out md:pl-6 md:pr-3 ${
          scrolled ? 'border-line shadow-soft-lg' : 'border-line/70 shadow-soft'}`
          }>
          
          <a href="#home" aria-label={`${profile.name} — back to top`} onClick={() => setOpen(false)}>
            <Signature name={profile.name} className="text-[34px] md:text-[38px]" />
          </a>

          <div className="hidden items-center lg:flex">
            <ul className="flex items-center">
              {primary.map((item) => {
                const Icon = navIcons[item.id];
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative flex items-center gap-2 rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors duration-150 ease-out ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'}`
                      }>
                      
                      {Icon && <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />}
                      {item.label}
                      {isActive &&
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 mx-auto h-1 w-1 rounded-full bg-accent"
                        transition={{ duration: reduce ? 0 : DURATION.base, ease: EASE_OUT }} />

                      }
                    </a>
                  </li>);

              })}
            </ul>
            <NavMoreMenu items={secondary} active={active} />
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors duration-150 hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}>
            
            {open ? <XIcon className="h-5 w-5" strokeWidth={1.75} /> : <MenuIcon className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </nav>

        <AnimatePresence>
          {open &&
          <motion.div
            id="mobile-menu"
            className="absolute inset-x-5 top-full mt-2 max-h-[calc(100dvh-110px)] overflow-y-auto overscroll-contain rounded-2xl border border-line bg-white p-2 shadow-soft-lg sm:inset-x-8 lg:hidden"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.97, y: reduce ? 0 : -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduce ? 1 : 0.97, y: reduce ? 0 : -6 }}
            transition={{ duration: DURATION.base, ease: EASE_OUT }}
            style={{ transformOrigin: 'top center' }}>
            
              <ul>
                {navItems.map((item, i) => {
                const Icon = navIcons[item.id];
                const isActive = active === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: reduce ? 0 : 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DURATION.base, ease: EASE_OUT, delay: 0.03 * i }}>
                    
                      <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-[16px] font-medium transition-colors duration-150 hover:bg-mist ${
                      isActive ? 'bg-mist text-ink' : 'text-muted'}`
                      }>
                      
                        {Icon && <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.75} />}
                        {item.label}
                        {isActive && <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" />}
                      </a>
                    </motion.li>);

              })}
              </ul>
              <div className="mt-2 border-t border-line px-4 pb-2 pt-4 text-[13px]">
                <a href={`mailto:${profile.email}`} className="link-underline font-medium text-ink">
                  {profile.email}
                </a>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.header>);

}