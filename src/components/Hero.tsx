import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, Github, Linkedin, Bot, Brain, Cpu, Cloud, Code, Database, Zap } from 'lucide-react';

const techIcons = [
  { Icon: Brain, delay: 0, x: '5%', y: '20%' },
  { Icon: Cpu, delay: 0.5, x: '90%', y: '25%' },
  { Icon: Cloud, delay: 1, x: '10%', y: '70%' },
  { Icon: Code, delay: 1.5, x: '85%', y: '65%' },
  { Icon: Database, delay: 2, x: '3%', y: '45%' },
  { Icon: Zap, delay: 2.5, x: '92%', y: '45%' },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent-purple/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-3xl" />
      </div>

      {techIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-slate-400/40 dark:text-primary-500/20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
          >
            <Icon className="h-12 w-12 md:h-16 md:w-16" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/25 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-300">
              <Bot className="h-4 w-4" />
              Available for internships
            </div>

            <h1 className="mb-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
              Hi, I&apos;m <span className="gradient-text">Charan Kumar Reddy</span>
            </h1>

            <h2 className="mx-auto mb-6 max-w-3xl text-xl font-medium text-slate-600 sm:text-2xl md:text-3xl dark:text-slate-300">
              CSE (Artificial Intelligence) Undergraduate
            </h2>

            <div className="mb-8 flex flex-wrap justify-center gap-2.5">
              {['AI Developer', 'Full Stack Developer', 'IoT Enthusiast', 'Problem Solver'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-dark-700 dark:bg-dark-800/70 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Passionate about building intelligent systems, modern web experiences, and practical solutions that create real-world impact.
            </p>

            <div className="mb-10 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
              <motion.a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple px-7 py-3.5 font-semibold text-white shadow-lg shadow-primary-500/20 transition-all hover:shadow-xl hover:shadow-primary-500/30"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-100 dark:border-dark-700 dark:bg-dark-800/80 dark:text-slate-100"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-7 py-3.5 font-semibold text-primary-700 transition-all hover:bg-primary-500/20 dark:text-primary-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </motion.a>
            </div>

            <div className="flex justify-center gap-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/charan-kumar-reddy-bantrothula-32578b31a/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/charankumarReddyB', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-200 bg-white/80 p-3.5 text-slate-600 shadow-sm transition-all hover:border-primary-500/30 hover:text-primary-600 dark:border-dark-700 dark:bg-dark-800/80 dark:text-slate-300 dark:hover:text-primary-400"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
