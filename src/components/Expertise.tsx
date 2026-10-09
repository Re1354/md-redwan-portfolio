import React from 'react';
import { expertise } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';
import { TechIcon } from './TechIcon';

export function Expertise() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="on-dark relative mt-4 overflow-hidden bg-night py-16 text-bone md:mt-8 md:py-24">
      <div id="expertise" className="absolute -top-24" />
      <div aria-hidden="true" className="grid-texture absolute inset-0" />
      <div className="site-container relative">
        <SectionHeader
          id="skills-title"
          tone="dark"
          title="Technical Skills"
          description="The languages, frameworks, and services I use to design, build, and ship systems." />
        

        <div className="mt-10 border-t border-night-line md:mt-14">
          {expertise.map((group, i) =>
          <Reveal
            key={group.category}
            delay={i * 0.05}
            className="grid gap-5 border-b border-night-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
            
              <div className="flex items-baseline justify-between md:col-span-3 md:block">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-bone">{group.category}</h3>
                <p className="text-[12px] font-medium text-night-muted md:mt-2">
                  {group.items.length} {group.items.length === 1 ? 'tool' : 'tools'}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2.5 md:col-span-9">
                {group.items.map((item) =>
              <li
                key={item}
                className="group cursor-default inline-flex items-center gap-2.5 rounded-xl border border-night-line bg-white/[0.03] px-4 py-2.5 text-[14.5px] font-medium text-bone/90 transition-[transform,border-color,color,background-color] duration-150 ease-out hover:-translate-y-0.5 hover:border-accent-light/50 hover:bg-white/[0.06] hover:text-white motion-reduce:hover:translate-y-0">
                    <TechIcon
                      name={item}
                      className="h-[17px] w-[17px] shrink-0 transition-transform duration-150 group-hover:scale-110"
                    />
                    <span>{item}</span>
                  </li>
              )}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}