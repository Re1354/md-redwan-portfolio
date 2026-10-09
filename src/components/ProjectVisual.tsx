import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, ImageIcon, LayersIcon } from 'lucide-react';
import type { DiagramNode, Ownership, Project } from '../types/portfolio';
import { ProjectGallery } from './ProjectGallery';
import { DURATION, EASE_OUT, VIEWPORT } from '../utils/motion';

type ProjectVisualProps = {project: Project;compact?: boolean;};

const ownershipStyles: Record<Ownership, string> = {
  built: 'border-accent/50 bg-accent/[0.05]',
  assisted: 'border-dashed border-accent/50 bg-white',
  integrated: 'border-dashed border-line bg-mist'
};

const ownershipLabels: Record<Ownership, string> = {
  built: 'My work',
  assisted: 'Assisted',
  integrated: 'Integrated'
};

const labelClass = 'text-[10.5px] font-semibold uppercase tracking-[0.1em] text-muted';

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  const reduce = useReducedMotion();
  const { diagram } = project;
  const images = project.images;
  const hasImages = Boolean(images && images.length > 0);
  const hasDiagram = Boolean(diagram && diagram.layers && diagram.layers.length > 0);
  const [activeView, setActiveView] = useState<'screenshots' | 'architecture'>(
    hasImages ? 'screenshots' : 'architecture'
  );

  const ownerships = Array.from(
    new Set(diagram.layers.flatMap((l) => l.nodes.map((n) => n.ownership)).filter(Boolean))
  ) as Ownership[];

  const isArchitectureDisabled = project.id === 'admission-system';
  const showArchitectureButton = hasDiagram || isArchitectureDisabled;

  return (
    <motion.figure
      className="group"
      initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(5% 5% 5% 5% round 16px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 16px)' }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.slow, ease: EASE_OUT }}>
      
      <div
        className={`dot-texture rounded-2xl border border-line bg-mist transition-all duration-200 ${
          hasImages && activeView === 'screenshots'
            ? 'p-1.5 sm:p-2'
            : compact
            ? 'p-3 sm:p-4'
            : 'p-3 sm:p-6'
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-line bg-white shadow-panel transition-[transform,box-shadow] duration-300 ease-out-expo group-hover:-translate-y-1 group-hover:shadow-panel-hover motion-reduce:transform-none">
          {/* Window Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white">
            <div className="flex items-center gap-2 text-[11.5px] text-muted">
              <span aria-hidden="true" className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f56]/80" />
                <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/80" />
                <span className="h-2 w-2 rounded-full bg-[#27c93f]/80" />
              </span>
              <span className="ml-1 font-semibold text-ink font-mono text-[11.5px]">
                {project.links.find((l) => l.kind === 'live')?.href.replace(/^https?:\/\//, '').replace(/\/$/, '') || project.slug}
              </span>
              <span className="text-subtle">/</span>
              <span className="font-mono text-[11px] text-muted">
                {hasImages && activeView === 'screenshots' ? 'preview' : 'architecture'}
              </span>
            </div>

            {hasImages && showArchitectureButton && images && (
              <div className="flex items-center gap-1 rounded-lg border border-line bg-mist/60 p-0.5 text-[11px] font-medium">
                <button
                  type="button"
                  onClick={() => setActiveView('screenshots')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
                    activeView === 'screenshots'
                      ? 'bg-white text-ink shadow-sm font-semibold'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  <ImageIcon className="h-3 w-3" />
                  {images.length > 1 ? `Screenshots (${images.length})` : 'Project Poster'}
                </button>
                <button
                  type="button"
                  disabled={isArchitectureDisabled}
                  onClick={() => !isArchitectureDisabled && setActiveView('architecture')}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
                    isArchitectureDisabled
                      ? 'cursor-not-allowed text-subtle/50 opacity-60'
                      : activeView === 'architecture'
                      ? 'bg-white text-ink shadow-sm font-semibold'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  <LayersIcon className="h-3 w-3" />
                  Architecture
                </button>
              </div>
            )}
          </div>

          {/* Window Body: Either Image Gallery or Architecture Diagram */}
          {hasImages && images && activeView === 'screenshots' ? (
            <div className="p-0">
              <ProjectGallery images={images} projectTitle={project.title} />
            </div>
          ) : (
            <div className={compact ? 'p-4' : 'p-4 sm:p-6'}>
              {diagram.layers.map((layer, i) =>
                <React.Fragment key={layer.label}>
                  {i > 0 && <Connector count={Math.min(diagram.layers[i - 1].nodes.length, 3)} />}
                  <div className="grid gap-2 sm:grid-cols-[104px_1fr] sm:items-center sm:gap-4">
                    <p className={labelClass}>{layer.label}</p>
                    <ul className="flex flex-wrap gap-2">
                      {layer.nodes.map((node) =>
                        <Node key={node.name} node={node} />
                      )}
                    </ul>
                  </div>
                </React.Fragment>
              )}

              {diagram.flow && !compact &&
                <div className="mt-6 grid gap-2 border-t border-line pt-5 sm:grid-cols-[104px_1fr] sm:items-center sm:gap-4">
                  <p className={labelClass}>{diagram.flowLabel}</p>
                  <ol className="flex flex-wrap items-center gap-2 text-[12.5px] font-medium text-ink">
                    {diagram.flow.map((step, idx) =>
                      <li key={step} className="flex items-center gap-2">
                        {idx > 0 && <ArrowRightIcon aria-hidden="true" className="h-3 w-3 text-subtle" strokeWidth={2} />}
                        <span className="rounded-md bg-mist px-2 py-1">{step}</span>
                      </li>
                    )}
                  </ol>
                </div>
              }

              {ownerships.length > 0 &&
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4 text-[11.5px] font-medium text-muted">
                  {ownerships.map((o) =>
                    <li key={o} className="flex items-center gap-2">
                      <span aria-hidden="true" className={`h-3 w-4 rounded-[3px] border ${ownershipStyles[o]}`} />
                      {ownershipLabels[o]}
                    </li>
                  )}
                </ul>
              }
            </div>
          )}
        </div>
      </div>
      {!(hasImages && activeView === 'screenshots') && diagram?.caption && (
        <figcaption className="mt-3 text-[12px] leading-relaxed text-muted">
          {diagram.caption}
        </figcaption>
      )}
    </motion.figure>);

}

function Node({ node }: {node: DiagramNode;}) {
  const style = node.ownership ? ownershipStyles[node.ownership] : 'border-line bg-white';
  return (
    <li className={`min-w-[8.5rem] flex-1 rounded-lg border px-3 py-2.5 ${style}`}>
      <p className="flex items-center gap-1.5 text-[13px] font-semibold leading-tight text-ink">
        {node.ownership === 'built' && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />}
        {node.name}
        {node.ownership && <span className="sr-only"> ({ownershipLabels[node.ownership]})</span>}
      </p>
      {node.detail && <p className="mt-1 text-[11px] leading-snug text-muted">{node.detail}</p>}
    </li>);

}

function Connector({ count }: {count: number;}) {
  return (
    <div aria-hidden="true" className="grid sm:grid-cols-[104px_1fr] sm:gap-4">
      <span className="hidden sm:block" />
      <div className="flex h-5 justify-around">
        {Array.from({ length: count }).map((_, i) =>
        <span key={i} className="w-px bg-line" />
        )}
      </div>
    </div>);

}