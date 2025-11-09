import { useEffect, useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function Navbar({ onSecretTap }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-zinc-900/40 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 group select-none">
          <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 animate-pulse" onClick={onSecretTap} title="">
          </div>
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Ava</span>
          <Sparkles className="w-4 h-4 text-indigo-500/70 transition group-hover:rotate-12" />
        </div>
        <nav className="flex items-center gap-3">
          <a href="#work" className="text-sm px-3 py-1.5 rounded-full text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">Work</a>
          <a href="#contact" className="text-sm px-3 py-1.5 rounded-full text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">Contact</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-zinc-700 dark:text-zinc-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-zinc-700 dark:text-zinc-300">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-zinc-700 dark:text-zinc-300">
            <Mail className="w-5 h-5" />
          </a>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-1 inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 text-white hover:opacity-90 active:scale-95 transition"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
