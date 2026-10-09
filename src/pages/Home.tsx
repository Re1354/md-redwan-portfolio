import React from 'react';
import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { Focus } from '../components/Focus';
import { Capabilities } from '../components/Capabilities';
import { CaseStudies } from '../components/CaseStudies';
import { Expertise } from '../components/Expertise';
import { Achievements } from '../components/Achievements';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';

export function Home() {
  return (
    <div className="min-h-screen w-full bg-paper text-ink">
      <a
        href="#focus"
        className="sr-only z-[60] rounded-xl bg-ink px-4 py-2 text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Focus />
        <Capabilities />
        <CaseStudies />
        <Expertise />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>);

}