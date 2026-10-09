import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRightIcon, ChevronDownIcon, GlobeIcon, PlayCircleIcon } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubMark } from './GithubMark';

type ProjectLinksProps = {
  project: Project;
  stacked?: boolean;
};

export function ProjectLinks({ project, stacked = false }: ProjectLinksProps) {
  const [isGithubOpen, setIsGithubOpen] = useState(false);
  const githubDropdownRef = useRef<HTMLDivElement>(null);

  const liveLink = project.links.find((l) => l.kind === 'live')?.href;
  const videoLink = project.links.find((l) => l.kind === 'video')?.href;
  const githubLinks = project.links.filter((l) => l.kind === 'github');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (githubDropdownRef.current && !githubDropdownRef.current.contains(event.target as Node)) {
        setIsGithubOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsGithubOpen(false);
      }
    }
    if (isGithubOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGithubOpen]);

  const base = 'inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-xl px-3.5 text-[13px]';

  return (
    <ul className={stacked ? 'grid gap-2' : 'flex flex-wrap gap-2'} aria-label={`${project.title} links`}>
      {/* Live Demo */}
      <li>
        {liveLink ? (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className={`group ${base} font-semibold transition-[background-color,border-color] duration-150 ease-out ${
              stacked ? 'w-full' : ''
            } bg-ink text-paper hover:bg-accent`}
          >
            <span aria-hidden="true">
              <GlobeIcon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            Live Demo
            <ArrowUpRightIcon
              aria-hidden="true"
              className="ml-auto h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        ) : (
          <span
            aria-disabled="true"
            className={`${base} cursor-not-allowed border border-dashed border-line font-medium text-muted ${
              stacked ? 'w-full' : ''
            }`}
          >
            <span aria-hidden="true" className="opacity-60">
              <GlobeIcon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            Live Demo
          </span>
        )}
      </li>

      {/* GitHub Button (Single Link, Dropdown for Multiple Repos, or Disabled) */}
      <li className={stacked ? 'w-full' : 'relative'}>
        {githubLinks.length > 1 ? (
          <div className={`relative ${stacked ? 'w-full' : ''}`} ref={githubDropdownRef}>
            <button
              type="button"
              onClick={() => setIsGithubOpen((prev) => !prev)}
              aria-expanded={isGithubOpen}
              aria-haspopup="true"
              className={`group ${base} font-semibold transition-[background-color,border-color,box-shadow] duration-150 ease-out border border-line bg-white text-ink hover:border-ink/40 ${
                stacked ? 'w-full justify-between' : ''
              } ${isGithubOpen ? 'border-ink shadow-sm' : ''}`}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true">
                  <GithubMark className="h-4 w-4" />
                </span>
                GitHub
              </span>
              <ChevronDownIcon
                aria-hidden="true"
                className={`h-3.5 w-3.5 text-muted transition-transform duration-200 ${
                  isGithubOpen ? 'rotate-180 text-ink' : 'group-hover:text-ink'
                }`}
              />
            </button>

            {isGithubOpen && (
              <div
                className={`absolute z-30 min-w-[230px] rounded-xl border border-line bg-white p-1.5 shadow-panel animate-in fade-in zoom-in-95 duration-150 ${
                  stacked ? 'left-0 right-0 w-full bottom-full mb-2' : 'left-0 top-full mt-1.5'
                }`}
              >
                <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted/70">
                  Repositories
                </div>
                <div className="grid gap-0.5">
                  {githubLinks.map((link, idx) => (
                    <a
                      key={link.href + idx}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsGithubOpen(false)}
                      className="group/item flex items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-[12.5px] font-medium text-ink transition-colors hover:bg-mist hover:text-accent"
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-ink group-hover/item:text-accent">
                          {link.label || (idx === 0 ? 'Client Repository' : 'Server Repository')}
                        </span>
                        {link.description && (
                          <span className="text-[11px] text-muted">{link.description}</span>
                        )}
                      </div>
                      <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-subtle transition-transform duration-150 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-accent" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : githubLinks.length === 1 ? (
          <a
            href={githubLinks[0].href}
            target="_blank"
            rel="noreferrer"
            className={`group ${base} font-semibold transition-[background-color,border-color] duration-150 ease-out border border-line bg-white text-ink hover:border-ink/40 ${
              stacked ? 'w-full' : ''
            }`}
          >
            <span aria-hidden="true">
              <GithubMark className="h-4 w-4" />
            </span>
            {githubLinks[0].label || 'GitHub'}
            <ArrowUpRightIcon
              aria-hidden="true"
              className="ml-auto h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        ) : (
          <span
            aria-disabled="true"
            className={`${base} cursor-not-allowed border border-dashed border-line font-medium text-muted ${
              stacked ? 'w-full' : ''
            }`}
          >
            <span aria-hidden="true" className="opacity-60">
              <GithubMark className="h-4 w-4" />
            </span>
            GitHub
          </span>
        )}
      </li>

      {/* Video Demo */}
      {videoLink && (
        <li>
          <a
            href={videoLink}
            target="_blank"
            rel="noreferrer"
            className={`group ${base} font-semibold transition-[background-color,border-color] duration-150 ease-out border border-line bg-white text-ink hover:border-ink/40 ${
              stacked ? 'w-full' : ''
            }`}
          >
            <span aria-hidden="true">
              <PlayCircleIcon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            Video Demo
            <ArrowUpRightIcon
              aria-hidden="true"
              className="ml-auto h-3.5 w-3.5 transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </li>
      )}
    </ul>
  );
}