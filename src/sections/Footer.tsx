import React from 'react';
import { t } from '../i18n';
import { useLang } from '../context/LangContext';

export const SiteFooter: React.FC = () => {
  const { lang } = useLang();
  return (
    <footer className="py-10 text-center text-xs text-black/50 dark:text-white/40">
      <p>© {new Date().getFullYear()} Bülent Ünalan • {t(lang,'footer_rights')}</p>
    </footer>
  );
};
