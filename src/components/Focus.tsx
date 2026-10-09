import React from 'react';
import { focusAreas } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Focus() {
  return (
    <section id="focus" aria-labelledby="focus-title" className="py-16 md:py-24">
      <div className="site-container">
        <SectionHeader
          id="focus-title"
          title="Engineering Focus"
          description="Three areas where most of my work happens — from interface to data layer to production." />
        

        <Reveal className="mt-10 md:mt-14">
          <ul className="grid divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-soft md:grid-cols-3 md:divide-x md:divide-y-0">
            {focusAreas.map((area) =>
              <li key={area.title} className="flex flex-col p-5 sm:p-7 lg:p-9 2xl:p-10">
                <span aria-hidden="true" className="h-1 w-8 rounded-full bg-accent" />
                <h3 className="mt-5 text-[1.35rem] font-medium leading-[1.15] tracking-[-0.035em] text-ink break-words sm:text-[1.5rem] md:mt-10 lg:text-[1.85rem]">
                  {area.title}
                </h3>
                <p className="mt-auto pt-5 text-[14px] leading-relaxed text-muted break-words sm:text-[15px]">
                  {area.items.map((item, idx) =>
                    <React.Fragment key={item}>
                      <span className="font-semibold text-ink">{item}</span>
                      {idx < area.items.length - 1 && (
                        <>
                          <span aria-hidden="true" className="ml-1.5 text-subtle sm:ml-2">
                            ·
                          </span>{' '}
                        </>
                      )}
                    </React.Fragment>
                  )}
                </p>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>);

}