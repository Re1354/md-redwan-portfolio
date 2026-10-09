import React from 'react';
import { BoxIcon, CalendarIcon, UserIcon } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { ProjectLinks } from './ProjectLinks';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from './Reveal';
import { RichText } from './RichText';

type CaseStudyProps = {
  project: Project;
  variant: 'feature' | 'compact';
};

const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.14em] text-muted';

export function CaseStudy({ project, variant }: CaseStudyProps) {
  const feature = variant === 'feature';

  return (
    <Reveal className="h-full">
      <article
        aria-labelledby={`${project.id}-title`}
        className={`grid h-full overflow-hidden rounded-3xl border border-line bg-white shadow-soft ${
        feature ? 'lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]' : 'grid-rows-[auto_1fr]'}`
        }>
        
        <ProjectMeta project={project} feature={feature} />

        <div className={`flex min-w-0 flex-col ${feature ? 'p-4 sm:p-6 lg:p-7 2xl:p-8' : 'p-4 sm:p-6'}`}>
          <ProjectVisual project={project} compact={!feature} />

          <div className={`mt-8 grid gap-8 ${feature ? 'xl:grid-cols-2 xl:gap-10' : ''}`}>
            <div className="space-y-6">
              <div>
                <h4 className={labelClass}>Overview</h4>
                <p className="mt-2 text-[15px] leading-[1.75] text-muted">{project.summary}</p>
              </div>
              <div>
                <h4 className={labelClass}>Problem solved</h4>
                <p className="mt-2 text-[15px] leading-[1.75] text-muted">{project.problem}</p>
              </div>
              {project.contributionNote &&
              <p className="rounded-xl border border-accent/20 bg-accent/[0.04] px-4 py-3 text-[14px] leading-relaxed text-ink">
                  {project.contributionNote}
                </p>
              }
            </div>

            <div>
              <h4 className={labelClass}>What I implemented</h4>
              <ul className="mt-2 border-t border-line">
                {project.implemented.map((item) =>
                <li key={item} className="flex gap-3 border-b border-line py-2.5 text-[14.5px] leading-[1.6] text-muted">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <h4 className={labelClass}>Tech stack</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) =>
              <li key={s} className="rounded-md border border-line bg-mist/60 px-2.5 py-1 text-[12px] font-medium text-muted">
                  {s}
                </li>
              )}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>);

}

function ProjectMeta({ project, feature }: {project: Project;feature: boolean;}) {
  const tile = project.logo ? (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line/70 bg-white p-1.5 shadow-soft sm:h-16 sm:w-16">
      <img
        src={project.logo}
        alt={`${project.title} logo`}
        className="h-full w-full rounded-xl object-contain"
      />
    </div>
  ) : (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line/70 bg-white text-[1.05rem] font-semibold tracking-[-0.02em] text-accent shadow-soft sm:h-16 sm:w-16 sm:text-[1.15rem]">
      {project.monogram}
    </div>
  );


  if (feature) {
    return (
      <div className="flex flex-col border-b border-line p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
        <div className="flex items-center gap-4 lg:block">
          {tile}
          <div className="min-w-0 lg:mt-6">
            <h3
              id={`${project.id}-title`}
              className="text-[1.4rem] font-bold leading-[1.15] tracking-[-0.03em] text-ink sm:text-[1.6rem]">
              
              {project.title}
            </h3>
            <p className="mt-1.5 text-[14px] text-muted">{project.role}</p>
          </div>
        </div>
        <div className="my-5 h-px bg-line lg:my-6" />
        <ul className="flex flex-wrap gap-x-5 gap-y-2.5 text-[12.5px] text-muted lg:block lg:space-y-2.5">
          <li className="flex items-center gap-2">
            <CalendarIcon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.75} />
            {project.year}
          </li>
          <li className="flex items-center gap-2">
            <UserIcon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.75} />
            {project.role}
          </li>
          <li className="flex items-center gap-2">
            <BoxIcon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.75} />
            {project.tagline}
          </li>
        </ul>
        <div className="mt-6 lg:mt-auto lg:pt-8">
          <p className={`mb-3 ${labelClass}`}>Links</p>
          <div className="lg:hidden">
            <ProjectLinks project={project} />
          </div>
          <div className="hidden lg:block">
            <ProjectLinks project={project} stacked />
          </div>
        </div>
      </div>);

  }

  return (
    <div className="border-b border-line p-5 sm:p-7">
      <div className="flex items-center gap-4">
        {tile}
        <div className="min-w-0 flex-1">
          <h3 id={`${project.id}-title`} className="text-[1.3rem] font-bold leading-tight tracking-[-0.03em] text-ink sm:text-[1.4rem]">
            {project.title}
          </h3>
          <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.75} />
              {project.year}
            </span>
            <span>{project.role}</span>
          </p>
        </div>
      </div>
      <div className="mt-5">
        <ProjectLinks project={project} />
      </div>
    </div>);

}