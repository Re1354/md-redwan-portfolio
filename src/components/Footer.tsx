import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-12 lg:px-8">
        <p className="text-sm font-medium text-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUpIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}