import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { heroCopy, profile } from '../data/portfolio';
import { ActionLink } from './ActionLink';
import { MaskedText } from './MaskedText';
import { PortraitOrbit } from './PortraitOrbit';
import { RichText } from './RichText';
import { SocialButtons } from './SocialButtons';
import { DURATION, EASE_OUT } from '../utils/motion';

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATION.slow, ease: EASE_OUT, delay }
  });
  const hasResume = profile.resume !== '#';

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-12 pt-28 sm:pt-32 md:pb-20 lg:pt-36 2xl:pt-40">

      <div className="site-container grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-12">
        <div className="mx-auto max-w-[40rem] text-center lg:col-span-7 lg:mx-0 lg:max-w-none lg:text-left">
          <h1
            id="hero-title"
            className="text-[2.6rem] font-medium leading-[1.06] tracking-[-0.045em] text-ink sm:text-[3.4rem] lg:text-[3.9rem] xl:text-[4.25rem] 2xl:text-[4.75rem]">

            <MaskedText delay={0.25} lines={[{ text: heroCopy.greeting }]} />
          </h1>

          <motion.p
            {...fade(0.45)}
            className="mx-auto mt-5 max-w-[38rem] text-[16.5px] leading-[1.8] text-muted sm:text-[18px] lg:mx-0 lg:text-[19px] 2xl:max-w-[42rem] 2xl:text-[20px]">

            <RichText text={heroCopy.intro} strongClassName="font-semibold text-ink" />
          </motion.p>

          <motion.div {...fade(0.5)} aria-hidden="true" className="mx-auto my-6 h-px w-12 bg-line lg:mx-0" />

          <motion.p
            {...fade(0.55)}
            className="mx-auto max-w-[38rem] text-[15.5px] leading-[1.8] text-muted sm:text-[17px] lg:mx-0 2xl:text-[18px]">

            <RichText text={heroCopy.evidence} strongClassName="font-semibold text-ink" />
          </motion.p>

          <motion.div
            {...fade(0.62)}
            className="mt-8 flex flex-col items-center gap-5 lg:flex-row lg:flex-wrap lg:gap-x-5">

            <div className="flex w-full flex-col gap-3 min-[420px]:w-auto min-[420px]:flex-row min-[420px]:justify-center">
              <ActionLink href="#projects">View Projects</ActionLink>
              <ActionLink href={profile.resume} variant="secondary" icon="down" download={hasResume ? 'Md_Redwan_Resume.pdf' : undefined}>
                Download Resume
              </ActionLink>
            </div>
            <span aria-hidden="true" className="hidden h-8 w-px bg-line lg:block" />
            <SocialButtons />
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] sm:max-w-[520px] lg:col-span-5 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-x-[18%] bottom-[2%] h-8 rounded-[50%] bg-ink/10 blur-2xl" />

          <PortraitOrbit src={profile.portrait} alt={`Portrait of ${profile.name}`} />
        </div>
      </div>
    </section>
  );
}