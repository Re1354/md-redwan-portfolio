import React from 'react';
import { MailIcon } from 'lucide-react';
import { profile } from '../data/portfolio';

type SocialButtonsProps = { tone?: 'light' | 'dark'; };

export function SocialButtons({ tone = 'light' }: SocialButtonsProps) {
  const dark = tone === 'dark';
  const base =
    'flex h-11 w-11 items-center justify-center rounded-xl transition-[transform,box-shadow,background-color,color,border-color] duration-150 ease-out hover:-translate-y-0.5 motion-reduce:hover:translate-y-0';
  const style = dark ?
    'border border-night-line bg-white/[0.04] text-bone hover:border-night-muted hover:bg-white/[0.08]' :
    'border border-line/70 bg-white text-ink shadow-soft hover:shadow-soft-lg';

  return (
    <ul className="flex items-center gap-2.5" aria-label="Social links">
      <li>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className={`${base} ${style}`}>
          <svg viewBox="0 0 16 16" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </li>
      <li>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className={`${base} ${style}`}>
          <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp (01778106042)"
          title="Direct message on WhatsApp (+8801778106042)"
          className={`${base} ${style} hover:text-emerald-500`}
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.12c-1.5 0-2.97-.4-4.26-1.16l-.31-.18-3.16.83.84-3.08-.2-.32a8.21 8.21 0 01-1.26-4.4c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 012.42 5.84c0 4.57-3.71 8.28-8.28 8.28zm4.54-6.2c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href={profile.telegram}
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
          title="Direct message on Telegram"
          className={`${base} ${style} hover:text-sky-400`}
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.95-1.28 4.91-2.13 5.89-2.54 2.8-1.16 3.39-1.37 3.77-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
          </svg>
        </a>
      </li>
      <li>
        <a href={`mailto:${profile.email}`} aria-label="Email" title="Email" className={`${base} ${style}`}>
          <MailIcon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </a>
      </li>
    </ul>);

}