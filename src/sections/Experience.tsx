import React from 'react';
import experience from '../../content/experience.json';
import { t, detectInitialLang, type Lang } from '../i18n';

export const Experience: React.FC = () => {
  const [lang] = React.useState<Lang>(() => detectInitialLang());
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-12">{t(lang,'section_experience')}</h2>
        <ol className="relative border-l border-black/10 dark:border-white/10 ml-2">
          {experience.map(item => (
            <li key={item.company + item.role} className="mb-10 ml-6">
              <div className="absolute -left-3 w-6 h-6 rounded-full bg-white dark:bg-base-900 border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px]">{item.start.split('-')[0]}</div>
              <h3 className="font-medium tracking-tight">{item.role} · {item.company}</h3>
              <p className="text-xs text-black/50 dark:text-white/50 mb-2">{item.start} – {item.end || (lang==='tr' ? 'Devam' : 'Present')}</p>
              <p className="text-sm text-black/70 dark:text-white/70 max-w-prose">{item.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
