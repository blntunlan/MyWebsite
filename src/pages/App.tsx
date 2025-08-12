import React from 'react';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { Showreel } from '../sections/Showreel';
import { TechStack } from '../sections/TechStack';
import { Contact } from '../sections/Contact';
import { SiteFooter } from '../sections/Footer';
import { Navigation } from '../components/Navigation';
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
        <Contact />
      </main>
      <SiteFooter />
    </LangProvider>
  );
};
