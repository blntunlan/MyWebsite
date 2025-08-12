import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { t, type Lang } from '../i18n';
import { useLang } from '../context/LangContext';

export const Navigation: React.FC = () => {
  const { lang, setLang } = useLang();
  const links = [
    { href: '#showreel', label: t(lang, 'nav_showreel') },
    { href: '#projects', label: t(lang, 'nav_projects') },
    { href: '#tech', label: t(lang, 'nav_tech') },
    { href: '#contact', label: t(lang, 'nav_contact') }
  ];

  function toggleLang() {
    const next: Lang = lang === 'tr' ? 'en' : 'tr';
    setLang(next);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/60 dark:bg-base-900/60 border-b border-white/20 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-lg">Bülent Ünalan</a>
        <nav className="hidden md:flex gap-8 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:opacity-70 transition-opacity">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <button onClick={toggleLang} className="rounded-full px-3 py-1.5 text-xs font-medium bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
            {lang === 'tr' ? 'EN' : 'TR'}
          </button>
          <ThemeToggle />
          <a href="#contact" className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 text-sm font-medium shadow-soft hover:shadow-md transition-shadow">{t(lang, 'nav_hire')}</a>
        </div>
      </div>
    </header>
  );
};
