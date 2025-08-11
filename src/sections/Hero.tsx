import React from 'react';
import { motion } from 'framer-motion';
import { t, detectInitialLang, type Lang } from '../i18n';

export const Hero: React.FC = () => {
  const [lang] = React.useState<Lang>(() => detectInitialLang());
  return (
    <section className="pt-40 pb-28" id="top">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <motion.h1 layout className="text-5xl font-semibold leading-tight tracking-tight">
            Bülent Ünalan <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/70 to-black dark:from-white dark:via-white/60 dark:to-white">{t(lang,'hero_title_role')}</span>
          </motion.h1>
          <p className="text-base/relaxed text-black/70 dark:text-white/70 max-w-md">
            {t(lang,'hero_sub')}
          </p>
          <div className="flex gap-4">
            <a href="#showreel" className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow-soft hover:translate-y-0.5 transition-transform">{t(lang,'hero_btn_showreel')}</a>
            <a href="#projects" className="px-6 py-3 rounded-xl bg-black/5 dark:bg-white/10 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/20 transition-colors">{t(lang,'hero_btn_projects')}</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center text-sm text-black/50 dark:text-white/50">
            Showreel Placeholder
          </div>
          <div className="absolute -inset-2 -z-10 bg-gradient-to-tr from-black/5 to-transparent dark:from-white/5 rounded-3xl" />
        </div>
      </div>
    </section>
  );
};
