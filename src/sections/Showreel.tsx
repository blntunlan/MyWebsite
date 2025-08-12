import React from 'react';
import { t } from '../i18n';
import { useLang } from '../context/LangContext';

export const Showreel: React.FC = () => {
  const { lang } = useLang();
  const v1 = React.useRef<HTMLVideoElement | null>(null);
  const v2 = React.useRef<HTMLVideoElement | null>(null);
  React.useEffect(() => {
    const videos = [v1.current, v2.current].filter(Boolean) as HTMLVideoElement[];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting){ (e.target as HTMLVideoElement).play().catch(()=>{}); } });
    }, { threshold: 0.35 });
    videos.forEach(v => { v.muted = true; v.playsInline = true; obs.observe(v); });
    return () => obs.disconnect();
  }, []);
  return (
    <section id="showreel" className="py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold">{t(lang,'section_showreel')}</h2>
          <span className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">{t(lang,'section_selected_scenes')}</span>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <video ref={v1} preload="metadata" poster="/poster1.jpg" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity">
              <source src="/showreel-seq.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/30 via-black/0 to-black/0" />
          </div>
          <div className="group relative aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <video ref={v2} preload="metadata" poster="/poster2.jpg" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity">
              <source src="/cinematic.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/30 via-black/0 to-black/0" />
          </div>
        </div>
      </div>
    </section>
  );
};
