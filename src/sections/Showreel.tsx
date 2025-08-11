import React from 'react';
import { t, detectInitialLang, type Lang } from '../i18n';

export const Showreel: React.FC = () => {
  const [lang] = React.useState<Lang>(() => detectInitialLang());
  return (
    <section id="showreel" className="py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold">{t(lang,'section_showreel')}</h2>
          <span className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">{t(lang,'section_selected_scenes')}</span>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-video rounded-xl overflow-hidden bg-black/10 dark:bg-white/10 flex items-center justify-center text-xs text-black/50 dark:text-white/50">MP4 / WebM</div>
          <div className="aspect-video rounded-xl overflow-hidden bg-black/10 dark:bg-white/10 flex items-center justify-center text-xs text-black/50 dark:text-white/50">360° / Cinematic</div>
        </div>
      </div>
    </section>
  );
};
