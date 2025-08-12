import React from 'react';
import projects from '../../content/projects.json';
import { t } from '../i18n';
import { useLang } from '../context/LangContext';

export const Projects: React.FC = () => {
  const { lang } = useLang();
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-12">{t(lang,'section_projects')}</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => {
            const hasRealLink = !!p.link && p.link !== '#';
            const Wrapper: any = hasRealLink ? 'a' : 'div';
            const commonCls = 'group relative flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-base-900/60 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-soft hover:shadow-lg transition-shadow';
            return (
              <Wrapper
                key={p.slug}
                {...(hasRealLink ? { href: p.link, target: p.link?.startsWith('http') ? '_blank' : undefined, rel: p.link?.startsWith('http') ? 'noopener noreferrer' : undefined } : { role: 'button', tabIndex: 0 })}
                className={commonCls + (hasRealLink ? '' : ' cursor-default')}
                onClick={(e: React.MouseEvent) => {
                  if (!hasRealLink) {
                    // future: open modal or route
                    e.preventDefault();
                  }
                }}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (!hasRealLink && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                  }
                }}
              >
                <div className="aspect-[16/9] rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-xs text-black/40 dark:text-white/40">{p.coverPlaceholder || 'Kapak'}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1 tracking-tight group-hover:underline underline-offset-4 decoration-black/20 dark:decoration-white/30">{p.title}</h3>
                  <p className="text-sm text-black/60 dark:text-white/60 line-clamp-3">{p.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map(tg => (
                    <span key={tg} className="px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[10px] tracking-wide uppercase text-black/60 dark:text-white/60">{tg}</span>
                  ))}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
