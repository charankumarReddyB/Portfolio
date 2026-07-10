import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Target, Rocket, Bot, Brain, Code, Cloud, Cpu, Lightbulb } from 'lucide-react';

const expertise = [
  { icon: Brain, title: 'Artificial Intelligence', color: 'from-primary-500 to-accent-purple' },
  { icon: Bot, title: 'Machine Learning', color: 'from-accent-purple to-accent-pink' },
  { icon: Code, title: 'Full Stack Development', color: 'from-accent-cyan to-primary-500' },
  { icon: Cloud, title: 'Cloud Computing', color: 'from-primary-400 to-accent-cyan' },
  { icon: Lightbulb, title: 'REST API Development', color: 'from-accent-pink to-accent-purple' },
  { icon: Cpu, title: 'IoT Systems', color: 'from-accent-cyan to-accent-purple' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Crafting Tomorrow's Solutions</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A dedicated technologist passionate about building impactful solutions
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-r from-primary-500/20 to-accent-purple/20 blur-3xl" />
              <div className="glass-panel relative rounded-[1.75rem] p-8 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-purple shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Bachelor of Engineering</h3>
                    <p className="font-medium text-primary-600 dark:text-primary-300">Computer Science & Engineering (AI)</p>
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <Target className="h-5 w-5 text-accent-cyan" />
                    <span>Saveetha School of Engineering</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <Briefcase className="h-5 w-5 text-accent-purple" />
                    <span>2024 - 2028</span>
                  </div>
                </div>

                <p className="mb-8 leading-8 text-slate-600 dark:text-slate-400">
                  I am currently pursuing Bachelor of Engineering in Computer Science and Engineering
                  (Artificial Intelligence) at Saveetha School of Engineering (2024-2028).
                </p>

                <div className="inline-flex items-center gap-2 rounded-2xl border border-primary-500/20 bg-primary-500/10 px-4 py-3">
                  <Rocket className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Actively seeking internship opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">My Expertise</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map(({ icon: Icon, title, color }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                    style={{ background: `linear-gradient(to bottom right, ${color.split(' ')[0].replace('from-', '')}, ${color.split(' ')[1].replace('to-', '')})` }}
                  />
                  <div className="relative rounded-[1.25rem] border border-slate-200/80 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:border-primary-500/30 dark:border-dark-700/70 dark:bg-dark-800/70">
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-medium text-slate-700 dark:text-slate-200">{title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
