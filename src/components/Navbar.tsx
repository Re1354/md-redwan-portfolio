import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-b border-line py-4' : 'border-b border-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          {profile.name}
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile Sections"
          className="absolute left-0 top-full w-full border-b border-line bg-white px-6 py-6 shadow-xl md:hidden"
        >
          <ul className="grid gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-accent transition-colors"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}