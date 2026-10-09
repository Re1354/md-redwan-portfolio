import React from 'react';
import { CalendarIcon } from 'lucide-react';
import { education } from '../data/portfolio';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="pb-16 md:pb-24">
      <div className="site-container">
        <SectionHeader id="education-title" title="Education" />

        <Reveal className="mt-10 md:mt-14">
          <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-soft md:grid-cols-[300px_minmax(0,1fr)]">
            <div className="border-b border-line p-7 md:border-b-0 md:border-r md:p-9">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line/70 bg-white p-2 shadow-soft">
                {education.logo ? (
                  <img
                    src={education.logo}
                    alt={`${education.institution} crest`}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-[1rem] font-semibold text-accent">{education.monogram}</span>
                )}
              </div>
              <h3 className="mt-6 text-[1.45rem] font-medium leading-[1.2] tracking-[-0.03em] text-ink">
                {education.institution}
              </h3>
              <div className="my-6 h-px bg-line" />
              <p className="flex items-center gap-2 text-[12.5px] text-muted">
                <CalendarIcon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.75} />
                {education.period}
              </p>
            </div>

            <div className="p-7 md:p-10">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <p className="max-w-md text-[1.3rem] font-medium leading-snug tracking-[-0.025em] text-ink md:text-[1.5rem]">
                  {education.degree}
                </p>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">CGPA</p>
                  <p className="mt-1 text-[2.5rem] font-medium leading-none tracking-[-0.05em] text-ink">
                    {education.cgpa}
                    <span className="ml-1.5 text-lg tracking-normal text-muted">/ {education.scale}</span>
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Relevant coursework</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {education.coursework.map((c) =>
                  <li key={c} className="rounded-md border border-line bg-mist/60 px-2.5 py-1 text-[12.5px] font-medium text-muted">
                      {c}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}