import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { about } from '../data/portfolio';

export function About() {
  return (
    <section id="about" className="w-full bg-white pb-24 pt-20 sm:pb-32 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Background"
          title="Engineering real systems."
          description="From managing deployment operations to structuring relational databases, I focus on the complete lifecycle of a product."
          align="left"
        />

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-16 border-t border-line pt-12">
              <h3 className="text-xl font-semibold tracking-tight text-ink">Experience</h3>
              <div className="mt-8 space-y-12">
                {about.timeline.map((entry) => (
                  <motion.div
                    key={entry.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45 }}
                    className="relative"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="text-lg font-semibold text-ink">{entry.title}</h4>
                      <p className="mt-1 text-sm font-medium text-muted sm:mt-0">{entry.period}</p>
                    </div>
                    <p className="text-base text-accent">{entry.org}</p>
                    <ul className="mt-4 space-y-3">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <CheckIcon
                            className="mt-1 h-4 w-4 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span className="text-base text-muted">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl bg-mist p-8 ring-1 ring-ink/5 sm:p-10">
              <h3 className="text-xl font-semibold tracking-tight text-ink">At a glance</h3>
              <dl className="mt-8 space-y-6">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-b border-line pb-6 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-sm font-medium text-muted">{fact.label}</dt>
                    <dd className="mt-2 text-base font-semibold text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}