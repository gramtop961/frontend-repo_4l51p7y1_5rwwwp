import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tiny CTF-like Easter eggs:
// 1) Click the glowing dot in the navbar 7 times -> reveals a secret banner with a flag-like code
// 2) Type the Konami code -> enables "Pastel Mode+" that softens the palette further in light mode
// 3) Hidden hotkey: press "G" on the hero to trigger a playful confetti burst

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export default function EasterEggs() {
  const [taps, setTaps] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [pastelPlus, setPastelPlus] = useState(false);
  const keys = useRef([]);

  // Listen for navbar tap via custom event
  useEffect(() => {
    function handler() {
      setTaps((t) => {
        const next = t + 1;
        if (next >= 7) setShowSecret(true);
        return next;
      });
    }
    window.addEventListener('secret-tap', handler);
    return () => window.removeEventListener('secret-tap', handler);
  }, []);

  // Konami detector
  useEffect(() => {
    function onKey(e) {
      keys.current.push(e.key);
      if (keys.current.length > KONAMI.length) keys.current.shift();
      if (KONAMI.every((k, i) => keys.current[i] === k)) {
        setPastelPlus(true);
        document.documentElement.style.setProperty('--pastel-multiplier', '0.75');
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Confetti pop using CSS particles (no dependency)
  const [confetti, setConfetti] = useState([]);
  function burst(x, y) {
    const parts = Array.from({ length: 18 }).map((_, i) => ({
      id: `${Date.now()}-${i}`,
      x,
      y,
      dx: (Math.random() - 0.5) * 200,
      dy: (Math.random() - 0.5) * 200,
      color: `hsl(${200 + Math.random()*160} 80% ${pastelPlus ? 80 : 60}%)`,
    }));
    setConfetti((c) => [...c, ...parts]);
    setTimeout(() => setConfetti([]), 900);
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key.toLowerCase() === 'g') {
        burst(window.innerWidth/2, window.innerHeight/2);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pastelPlus]);

  return (
    <>
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-400 text-white shadow-lg"
          >
            secret{'{'}ctf{'}'}: AVA{'{'}2025{'}'}-RESONANCE
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti layer */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {confetti.map((p) => (
          <span
            key={p.id}
            className="absolute w-1.5 h-1.5 rounded-sm"
            style={{
              left: p.x,
              top: p.y,
              transform: `translate(${p.dx}px, ${p.dy}px)`,
              background: p.color,
            }}
          />
        ))}
      </div>

      {/* PastelPlus indicator */}
      <AnimatePresence>
        {pastelPlus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-4 right-4 z-50 text-xs px-3 py-1.5 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300"
          >
            Pastel Mode+
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
