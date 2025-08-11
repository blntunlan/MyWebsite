import React from 'react';
import { t, detectInitialLang, type Lang } from '../i18n';

export const SiteFooter: React.FC = () => {
  const [lang] = React.useState<Lang>(() => detectInitialLang());
  return (
    <footer className="py-10 text-center text-xs text-black/50 dark:text-white/40">
      <p>© {new Date().getFullYear()} Bülent Ünalan • {t(lang,'footer_rights')}</p>
    </footer>
  );
};
