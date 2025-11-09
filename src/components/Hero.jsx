import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1020] via-[#0a0f1c] to-[#0b1020] dark:from-[#0b1020] dark:via-[#0a0f1c] dark:to-[#0b1020]">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient veil for pastel/light mode aesthetics */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(99,102,241,0.20)_0%,rgba(14,165,233,0.15)_40%,transparent_70%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(99,102,241,0.25)_0%,rgba(14,165,233,0.2)_40%,transparent_70%)]" />
      </div>

      {/* Heading content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 pt-28 pb-20 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="backdrop-blur-sm rounded-2xl p-6 md:p-8 bg-white/40 dark:bg-zinc-900/40 border border-white/30 dark:border-white/10 shadow-2xl"
        >
          <p className="text-sm uppercase tracking-widest text-indigo-500 font-semibold">Hi, I’m Ava</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.1] text-zinc-900 dark:text-white">
            Building delightful, secure, and scalable experiences
          </h1>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 text-lg">
            Software engineer focused on product, performance, and a touch of mystery. I love purple/blue palettes, micro-interactions, and creative problem solving.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#work" className="px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-400 hover:opacity-90 active:scale-95 transition shadow-md">
              View work
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-zinc-900/5 dark:bg-white/10 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900/10 dark:hover:bg-white/15 transition">
              Contact
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          className="grid gap-4 content-center"
        >
          <div className="rounded-2xl border border-white/30 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 p-6">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">Interned at</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 text-sm">Acme Robotics</span>
              <span className="px-3 py-1.5 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-300 text-sm">BlueWave Cloud</span>
              <span className="px-3 py-1.5 rounded-full bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-300 text-sm">Nova Labs</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/30 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 p-6">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">Specialties</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-sky-400/20 text-indigo-700 dark:text-indigo-200 text-sm">Frontend</span>
              <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-indigo-400/20 text-fuchsia-700 dark:text-fuchsia-200 text-sm">Security</span>
              <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-500/20 to-emerald-400/20 text-sky-700 dark:text-sky-200 text-sm">3D & Motion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
