import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Shield, Lock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-indigo-50/40 dark:from-zinc-950 dark:to-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-12 border bg-white/70 dark:bg-zinc-900/60 border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Let’s build something beautiful</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            I’m open to internships, collaborations, and creative projects. Prefer minimalist design, performance, and secure systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 active:scale-95 transition"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-600 text-white hover:brightness-110 active:scale-95 transition"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:brightness-110 active:scale-95 transition"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>

          <div className="mt-8 text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5" /> Zero trackers. <Lock className="w-3.5 h-3.5" /> Privacy first.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
