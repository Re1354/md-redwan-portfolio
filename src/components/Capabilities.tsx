import React from 'react';
import { FolderIcon } from 'lucide-react';
import { capabilities } from '../data/portfolio';
import { Reveal } from './Reveal';
import { RichText } from './RichText';
import { SectionHeader } from './SectionHeader';

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="py-16 md:py-24">
      <div className="site-container">
        <SectionHeader
          id="capabilities-title"
          title="Engineering Capabilities"
          description="What I've actually shipped, and where you can find it." />
        

        <Reveal className="mt-10 md:mt-14">
          <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
            {capabilities.map((c) =>
            <li
              key={c.title}
              className="grid gap-3 px-5 py-5 transition-colors duration-150 ease-out hover:bg-mist/60 sm:px-7 md:grid-cols-12 md:items-start md:gap-8 md:py-7 lg:px-10">
              
                <h3 className="flex items-start gap-3 text-[1.2rem] font-medium tracking-[-0.03em] text-ink md:col-span-5 md:text-[1.4rem]">
                  <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {c.title}
                </h3>
                <div className="md:col-span-7">
                  <p className="text-[15px] leading-[1.75] text-muted">
                    <RichText text={c.evidence} />
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.sources.map((s) =>
                  <li
                    key={s}
                    className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2 py-1 text-[11.5px] font-medium text-muted">
                    
                        <FolderIcon aria-hidden="true" className="h-3 w-3" strokeWidth={2} />
                        Project: {s}
                      </li>
                  )}
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>);

}