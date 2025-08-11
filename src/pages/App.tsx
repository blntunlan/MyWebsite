import React from 'react';
import { Hero } from '../sections/Hero';
import { Projects } from '../sections/Projects';
import { Showreel } from '../sections/Showreel';
import { TechStack } from '../sections/TechStack';
import { Contact } from '../sections/Contact';
import { SiteFooter } from '../sections/Footer';
import { Navigation } from '../components/Navigation';

export const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <Showreel />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
};
