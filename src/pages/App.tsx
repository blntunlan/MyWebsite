import React from 'react';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { Showreel } from '../sections/Showreel';
import { TechStack } from '../sections/TechStack';
import { Contact } from '../sections/Contact';
import { SiteFooter } from '../sections/Footer';
import { Navigation } from '../components/Navigation';
import { Expertise } from '../sections/Expertise';
import { HireFloatingCTA } from '../components/HireFloatingCTA';
import { LangProvider } from '../context/LangContext';

export const App: React.FC = () => {
  return (
    <LangProvider>
      <Navigation />
      <main className="relative">
        <Hero />
        <Showreel />
        <Projects />
        <TechStack />
        <Expertise />
        <Contact />
      </main>
      <HireFloatingCTA />
      <SiteFooter />
    </LangProvider>
  );
};
