import React from 'react';
import { t } from '../i18n';
import { useLang } from '../context/LangContext';

export const HireFloatingCTA: React.FC = () => {
  const { lang } = useLang();
  return (
    <a href="#contact" className="fixed bottom-5 right-5 z-50 px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow-lg shadow-black/20 dark:shadow-white/10 hover:scale-[1.03] active:scale-95 transition-transform">
      {t(lang,'nav_hire')}
    </a>
  );
};
