import React from 'react';
import { detectInitialLang, type Lang } from '../i18n';

type LangContextValue = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = React.createContext<LangContextValue | undefined>(undefined);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = React.useState<Lang>(() => detectInitialLang());
  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('lang', l); } catch {}
    if (typeof document !== 'undefined') document.documentElement.setAttribute('lang', l);
  }, []);
  React.useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.setAttribute('lang', lang);
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export function useLang(): LangContextValue {
  const ctx = React.useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
