import React from 'react';
import { ArrowDownIcon, ArrowUpRightIcon } from 'lucide-react';
import { profile } from '../data/portfolio';
import { CopyEmailButton } from './CopyEmailButton';
import { MaskedText } from './MaskedText';
import { Reveal } from './Reveal';
import { SocialButtons } from './SocialButtons';

export function Contact() {
  const hasResume = profile.resume !== '#';
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-10 pt-4 md:pb-14">
      <div className="site-container">
        <Reveal>
          <div className="on-dark relative overflow-hidden rounded-[24px] bg-night px-5 py-12 text-bone shadow-soft-lg sm:rounded-[28px] sm:px-10 md:px-14 md:py-16 2xl:px-16">
            <div aria-hidden="true" className="grid-texture absolute inset-0" />
            <div className="relative text-center md:text-left">
              <h2
                id="contact-title"
                className="mx-auto max-w-4xl text-[2.4rem] font-medium leading-[1.04] tracking-[-0.05em] sm:text-6xl md:mx-0 lg:text-[5rem]">

                <MaskedText inView lines={[{ text: "Let's build" }, { text: 'something useful.', className: 'text-night-muted' }]} />
              </h2>

              <div className="mt-10 grid gap-8 border-t border-night-line pt-8 md:mt-12 md:grid-cols-12 md:items-end md:gap-8 md:pt-10">
                <div className="md:col-span-8">
                  <p className="mx-auto max-w-md text-[15.5px] leading-relaxed text-night-muted md:mx-0">
                    Have a role, a project, or a question? Reach out by email, or message me directly on WhatsApp.
                  </p>

                  {/* Primary Email CTA */}
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                    <a
                      href={`mailto:${profile.email}`}
                      className="link-underline link-rest max-w-full text-[1.05rem] font-medium tracking-[-0.02em] text-bone [overflow-wrap:anywhere] min-[400px]:text-[1.2rem] sm:text-2xl md:text-[1.75rem]">
                      {profile.email}
                    </a>
                    <CopyEmailButton email={profile.email} />
                  </div>

                  {/* Secondary Direct Messaging Channels */}
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
                    <a
                      href={profile.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Direct message on WhatsApp (+8801778106042)"
                      className="group inline-flex h-9 items-center gap-2 rounded-xl border border-night-line bg-white/[0.03] px-3.5 text-[13px] font-medium text-bone/90 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.05] hover:text-white motion-reduce:hover:translate-y-0"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#25D366] transition-transform duration-200 ease-out group-hover:scale-105" fill="currentColor" aria-hidden="true">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.12c-1.5 0-2.97-.4-4.26-1.16l-.31-.18-3.16.83.84-3.08-.2-.32a8.21 8.21 0 01-1.26-4.4c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 012.42 5.84c0 4.57-3.71 8.28-8.28 8.28zm4.54-6.2c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
                      </svg>
                      <span>WhatsApp</span>
                      <ArrowUpRightIcon aria-hidden="true" className="h-3.5 w-3.5 text-night-muted/60 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#25D366]" />
                    </a>

                    <a
                      href={profile.telegram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Direct message on Telegram"
                      className="group inline-flex h-9 items-center gap-2 rounded-xl border border-night-line bg-white/[0.03] px-3.5 text-[13px] font-medium text-bone/90 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#229ED9]/40 hover:bg-[#229ED9]/[0.05] hover:text-white motion-reduce:hover:translate-y-0"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#229ED9] transition-transform duration-200 ease-out group-hover:scale-105" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.95-1.28 4.91-2.13 5.89-2.54 2.8-1.16 3.39-1.37 3.77-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
                      </svg>
                      <span>Telegram</span>
                      <ArrowUpRightIcon aria-hidden="true" className="h-3.5 w-3.5 text-night-muted/60 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#229ED9]" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 md:col-span-4 md:justify-end">
                  <SocialButtons tone="dark" />
                  <a
                    href={profile.resume}
                    download={hasResume ? 'Md_Redwan_Resume.pdf' : undefined}
                    className="group inline-flex h-11 items-center gap-2 rounded-xl bg-bone px-4 text-[14px] font-semibold text-ink transition-colors duration-150 ease-out hover:bg-white">

                    Resume
                    <ArrowDownIcon
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-y-0.5"
                      strokeWidth={1.75} />

                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}