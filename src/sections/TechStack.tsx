import React from 'react';
import stack from '../../content/stack.json';
import { t, detectInitialLang, type Lang } from '../i18n';

export const TechStack: React.FC = () => {
  const [lang] = React.useState<Lang>(() => detectInitialLang());
  return (
    <section id="tech" className="py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10">{t(lang,'section_tech')}</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map(s => (
            <li key={s.name} className="p-4 rounded-xl bg-white/60 dark:bg-base-900/60 backdrop-blur border border-black/10 dark:border-white/10 flex items-center">
              <span className="font-medium tracking-tight text-sm">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
