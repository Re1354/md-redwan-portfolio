import React from 'react';
import { AwardIcon, CalendarIcon } from 'lucide-react';
import { achievements, problemSolving } from '../data/portfolio';
import { Reveal } from './Reveal';
import { RichText } from './RichText';
import { SectionHeader } from './SectionHeader';

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="py-16 md:py-24">
      <div className="site-container">
        <SectionHeader id="achievements-title" title="Achievements" />

        <Reveal className="mt-10 md:mt-14">
          <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-soft md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="border-b border-line p-7 md:border-b-0 md:border-r md:p-10">
              <p className="text-[13px] font-semibold text-accent">Problem solving</p>
              <p className="mt-6 text-[5rem] font-medium leading-none tracking-[-0.06em] text-ink md:text-[6rem]">
                {problemSolving.value}
                <span className="text-accent">+</span>
              </p>
              <p className="mt-5 text-[17px] leading-relaxed text-muted">
                <RichText text={problemSolving.label} />
              </p>
              <p className="mt-2 max-w-sm text-[14.5px] leading-relaxed text-muted">{problemSolving.note}</p>
            </div>

            <ul className="divide-y divide-line">
              {achievements.map((a) =>
              <li key={a.title} className="flex gap-5 p-7 md:p-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line/70 bg-white text-accent shadow-soft">
                    <AwardIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-[1.2rem] font-medium tracking-[-0.03em] text-ink md:text-[1.35rem]">{a.title}</h3>
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] text-muted">
                        <CalendarIcon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.75} />
                        {a.year}
                      </span>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{a.detail}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>);

}