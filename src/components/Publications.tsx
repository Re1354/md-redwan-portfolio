import React from 'react';
import { motion } from 'framer-motion';
import { FileTextIcon, LinkIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { publications } from '../data/portfolio';

export function Publications() {
  return (
    <section id="research" className="w-full bg-mist pb-24 pt-20 sm:pb-32 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Research publications"
          title="Papers, thesis and"
          accent="write-ups."
          description="Reserved for undergraduate research coming out of my Data Science, AI and Software Engineering coursework. Placeholder entries below."
          align="left"
        />

        <div className="mt-20">
          <ol className="space-y-12 sm:space-y-16">
            {publications.map((paper, index) => (
              <motion.li
                key={paper.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
                  <div className="sm:w-1/4 sm:shrink-0">
                    <div className="flex flex-col gap-3">
                      <span className="text-sm font-semibold tracking-wide text-ink">
                        {paper.year}
                      </span>
                      <span className="font-mono text-[11px] font-medium tracking-widest text-muted uppercase">
                        {paper.type}
                      </span>
                      <span
                        className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          paper.status === 'Published'
                            ? 'bg-accent/10 text-accent'
                            : 'bg-ink/5 text-muted'
                        }`}
                      >
                        {paper.status}
                      </span>
                    </div>
                  </div>

                  <div className="sm:w-3/4">
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
                      {paper.title}
                    </h3>
                    <p className="mt-2 text-lg text-accent">{paper.venue}</p>
                    <p className="mt-4 text-sm font-medium text-muted">{paper.authors}</p>
                    <p className="mt-5 text-base leading-relaxed text-muted">
                      {paper.abstract}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-6">
                      <a
                        href={paper.doiUrl}
                        className="group/link flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                      >
                        <LinkIcon className="h-4 w-4 text-muted transition-colors group-hover/link:text-accent" aria-hidden="true" />
                        <span className="border-b border-transparent pb-0.5 transition-colors group-hover/link:border-accent">
                          DOI
                        </span>
                      </a>
                      <a
                        href={paper.pdfUrl}
                        className="group/link flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                      >
                        <FileTextIcon className="h-4 w-4 text-muted transition-colors group-hover/link:text-accent" aria-hidden="true" />
                        <span className="border-b border-transparent pb-0.5 transition-colors group-hover/link:border-accent">
                          Read PDF
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}