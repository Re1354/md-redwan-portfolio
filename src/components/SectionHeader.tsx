import React from 'react';
import { Reveal } from './Reveal';

type SectionHeaderProps = {
  id: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
};

export function SectionHeader({ id, title, description, tone = 'light' }: SectionHeaderProps) {
  const dark = tone === 'dark';

  return (
    <header className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
      <Reveal>
        <h2
          id={id}
          className={`text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[2.25rem] md:text-[2.65rem] 2xl:text-[2.9rem] ${
          dark ? 'text-bone' : 'text-ink'}`
          }>
          
          {title}
        </h2>
      </Reveal>
      {description &&
      <Reveal delay={0.05}>
          <p
          className={`mx-auto mt-4 max-w-xl text-[16px] leading-[1.75] md:mx-0 md:text-[16.5px] ${
          dark ? 'text-night-muted' : 'text-muted'}`
          }>
          
            {description}
          </p>
        </Reveal>
      }
    </header>);

}