import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIBuild } from './components/WhatIBuild';
import { EngineeringHighlights } from './components/EngineeringHighlights';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <WhatIBuild />
        <EngineeringHighlights />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}