import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, ExternalLinkIcon, GithubIcon, XIcon } from 'lucide-react';
import { ImageCarousel } from './ui/ImageCarousel';
import type { Project } from '../data/portfolio';

type ProjectDetailModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/40 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} case study`}
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.99 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="my-4 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-ink/5"
          >
            <div className="flex items-center justify-between border-b border-line bg-mist px-6 py-4 sm:px-10">
              <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink">
                {project.year} · {project.role} · {project.status}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-line hover:text-ink"
              >
                <XIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-12">
              <h3 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                {project.name}{' '}
                <span className="font-normal text-accent">
                  {project.tagline}
                </span>
              </h3>

              <div className="mt-10 rounded-2xl p-2 ring-1 ring-line">
                <ImageCarousel
                  images={project.images}
                  alt={`${project.name} interface`}
                  className="rounded-xl overflow-hidden"
                />
              </div>

              <ul className="mt-10 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-mist px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-ink"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-lg leading-relaxed text-muted">{project.summary}</p>

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-ink">What I built</h4>
                <ul className="mt-6 space-y-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <CheckIcon
                        className="mt-1 h-5 w-5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span className="text-base text-muted">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="mt-10 grid grid-cols-3 divide-x divide-line rounded-xl border border-line">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="p-6">
                    <dt className="text-sm font-medium text-muted">{metric.label}</dt>
                    <dd className="mt-2 text-2xl font-bold tracking-tight text-ink">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
                  >
                    Live demo
                    <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-mist"
                  >
                    <GithubIcon className="h-4 w-4" aria-hidden="true" />
                    Source code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}