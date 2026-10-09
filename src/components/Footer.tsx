import React from 'react';
import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="site-container flex flex-col gap-3 pb-10 text-[12.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
      <p className="flex items-center gap-3">
        <span className="font-signature text-[26px] leading-none text-ink">{profile.name}</span>
        <span>© 2026</span>
      </p>
      <p>{profile.location}</p>
      <a href={`mailto:${profile.email}`} className="link-underline self-start font-medium text-ink sm:self-auto">
        {profile.email}
      </a>
    </footer>);

}