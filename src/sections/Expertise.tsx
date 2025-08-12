import React from 'react';
import { t } from '../i18n';
import { useLang } from '../context/LangContext';

const items: Array<{ key: string; icon: string }> = [
  { key: 'expertise_gas', icon: '⚙️' },
  { key: 'expertise_network', icon: '🌐' },
  { key: 'expertise_perf', icon: '📊' }
];

export const Expertise: React.FC = () => {
  const { lang } = useLang();
  return (
    <section id="expertise" className="py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-12">{t(lang,'expertise_title')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(it => (
            <div key={it.key} className="p-6 rounded-2xl bg-white/60 dark:bg-base-900/60 backdrop-blur border border-black/10 dark:border-white/10 shadow-soft hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-4" aria-hidden>{it.icon}</div>
              <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">{t(lang,it.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
