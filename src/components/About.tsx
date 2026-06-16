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
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-purple/20 rounded-3xl blur-3xl" />
              <div className="relative bg-dark-900/50 dark:bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Bachelor of Engineering</h3>
                    <p className="text-primary-400">Computer Science & Engineering (AI)</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-dark-300">
                    <Target className="w-5 h-5 text-accent-cyan" />
                    <span>Saveetha School of Engineering</span>
                  </div>
                  <div className="flex items-center gap-3 text-dark-300">
                    <Briefcase className="w-5 h-5 text-accent-purple" />
                    <span>2024 - 2028</span>
                  </div>
                </div>

                <p className="text-dark-400 leading-relaxed mb-8">
                  I am currently pursuing Bachelor of Engineering in Computer Science and Engineering
                  (Artificial Intelligence) at Saveetha School of Engineering (2024-2028).
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500/10 to-accent-purple/10 border border-primary-500/30">
                  <Rocket className="w-5 h-5 text-primary-400" />
                  <span className="text-primary-400 font-medium text-sm">
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
            <h3 className="text-2xl font-bold text-white mb-6">My Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {expertise.map(({ icon: Icon, title, color }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"
                    style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                  />
                  <div className="relative p-5 rounded-2xl bg-dark-800/50 dark:bg-dark-800/50 border border-dark-700 group-hover:border-primary-500/50 transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-dark-200 font-medium">{title}</h4>
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
