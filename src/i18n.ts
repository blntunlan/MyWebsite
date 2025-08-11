export type Lang = 'tr' | 'en';

export const messages: Record<Lang, Record<string, string>> = {
  tr: {
    nav_showreel: 'Showreel',
    nav_projects: 'Projeler',
    nav_tech: 'Teknoloji',
    nav_experience: 'Deneyim',
    nav_contact: 'İletişim',
    nav_hire: 'İş Teklifi',
    hero_title_role: 'Oyun Geliştirici',
    hero_sub: 'Gerçek zamanlı sistemler, oyun mekaniği mimarisi ve sinematik deneyimler üzerinde çalışan Unreal Engine odaklı bir geliştirici.',
    hero_btn_showreel: 'Showreel',
    hero_btn_projects: 'Projeler',
    section_showreel: 'Showreel',
    section_selected_scenes: 'Seçili sahneler',
    section_projects: 'Projeler',
    section_tech: 'Teknoloji & Araçlar',
    section_experience: 'Deneyim',
    section_contact: 'İletişim',
    contact_sub: 'Proje, işbirliği veya freelance talepleri için e‑posta gönderebilirsiniz.',
    contact_email: 'E‑posta',
    footer_rights: 'Tüm hakları saklıdır.'
  },
  en: {
    nav_showreel: 'Showreel',
    nav_projects: 'Projects',
    nav_tech: 'Tech',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    nav_hire: 'Hire',
    hero_title_role: 'Game Developer',
    hero_sub: 'Unreal Engine focused developer working on real-time systems, gameplay architecture and cinematic in-engine experiences.',
    hero_btn_showreel: 'Showreel',
    hero_btn_projects: 'Projects',
    section_showreel: 'Showreel',
    section_selected_scenes: 'Selected scenes',
    section_projects: 'Projects',
    section_tech: 'Technology & Tools',
    section_experience: 'Experience',
    section_contact: 'Contact',
    contact_sub: 'Feel free to reach out for collaboration, freelance work or full‑time opportunities.',
    contact_email: 'Email',
    footer_rights: 'All rights reserved.'
  }
};

export function detectInitialLang(): Lang {
  const saved = localStorage.getItem('lang') as Lang | null;
  if (saved) return saved;
  localStorage.setItem('lang', 'en');
  return 'en';
}

export function t(lang: Lang, key: string): string {
  return messages[lang][key] || key;
}
