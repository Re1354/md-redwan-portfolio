import React from 'react';
import { projects } from '../data/portfolio';
import { CaseStudy } from './CaseStudy';
import { SectionHeader } from './SectionHeader';

export function CaseStudies() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-16 md:py-24">
      <div className="site-container">
        <SectionHeader
          id="projects-title"
          title="Engineering Case Studies"
          description="Selected systems I've built across full-stack development, APIs, data, authentication, and production deployment." />
        

        <div className="mt-10 space-y-6 md:mt-14 lg:space-y-8">
          {featured.map((project) =>
          <CaseStudy key={project.id} project={project} variant="feature" />
          )}
        </div>

        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
          {secondary.map((project) =>
          <CaseStudy key={project.id} project={project} variant="compact" />
          )}
        </div>
      </div>
    </section>);

}