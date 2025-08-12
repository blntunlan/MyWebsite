import React from 'react';
import { t } from '../i18n';
import { useLang } from '../context/LangContext';

export const Contact: React.FC = () => {
  const { lang } = useLang();
  return (
    <section id="contact" className="py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-2xl font-semibold">{t(lang,'section_contact')}</h2>
        <p className="text-sm text-black/60 dark:text-white/60 max-w-lg mx-auto">{t(lang,'contact_sub')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:bulentunalan97@icloud.com" className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow-soft">{t(lang,'contact_email')}</a>
          <a href="https://www.linkedin.com" target="_blank" className="px-6 py-3 rounded-xl bg-black/5 dark:bg-white/10 text-sm font-medium">LinkedIn</a>
          <a href="https://github.com/blntunlan" target="_blank" className="px-6 py-3 rounded-xl bg-black/5 dark:bg-white/10 text-sm font-medium">GitHub</a>
        </div>
      </div>
    </section>
  );
};
