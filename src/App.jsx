import { useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Contact from './components/Contact';
import EasterEggs from './components/EasterEggs';

export default function App() {
  const onSecretTap = useCallback(() => {
    // Dispatch a global event listened by EasterEggs to keep components decoupled
    window.dispatchEvent(new CustomEvent('secret-tap'));
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-700 dark:selection:bg-indigo-500/30 dark:selection:text-white">
      <Navbar onSecretTap={onSecretTap} />
      <main>
        <Hero />
        <Experience />
        <Contact />
      </main>
      <EasterEggs />
      <footer className="py-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Ava — Crafted with care.
      </footer>
    </div>
  );
}
