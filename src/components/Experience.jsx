import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Acme Robotics',
    role: 'Frontend Engineering Intern',
    period: 'Summer 2024',
    points: [
      'Built interactive dashboards with rich micro-interactions.',
      'Collaborated with design to craft an accessible component system.',
      'Improved page performance, cutting LCP by 32%.',
    ],
  },
  {
    company: 'BlueWave Cloud',
    role: 'Security Engineering Intern',
    period: 'Fall 2023',
    points: [
      'Implemented secure auth flows and secrets management.',
      'Designed automated dependency scanning and policy checks.',
      'Led a cross-team security review for a flagship product.',
    ],
  },
  {
    company: 'Nova Labs',
    role: 'Creative Technologist Intern',
    period: 'Spring 2023',
    points: [
      'Prototyped WebGL experiences and immersive visuals.',
      'Built a content pipeline for 3D assets with TypeScript tooling.',
      'Shipped a public microsite with 50k+ visits.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-white dark:bg-zinc-950">
      <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-transparent to-white dark:to-zinc-950 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Experience</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="rounded-2xl p-6 border bg-white/70 dark:bg-zinc-900/50 border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{exp.company}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{exp.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
