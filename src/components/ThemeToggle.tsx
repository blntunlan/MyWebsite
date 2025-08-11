import React from 'react';

export const ThemeToggle: React.FC = () => {
  function toggle() {
    const root = document.documentElement;
    const dark = root.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  React.useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
  }, []);

  return (
    <button onClick={toggle} aria-label="Tema değiştir" className="rounded-full w-9 h-9 flex items-center justify-center border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
      <span className="text-xs">☾</span>
    </button>
  );
};
