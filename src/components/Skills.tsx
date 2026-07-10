import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cloud, Code2, Cpu, Server, Sparkles, Users, Wrench, Globe } from 'lucide-react';

type SkillLevel = 'Advanced' | 'Intermediate' | 'Beginner';

interface SkillItem {
  name: string;
  level: SkillLevel;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: typeof Code2;
  accent: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Code2,
    accent: 'from-primary-500 to-accent-purple',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Beginner' },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: Brain,
    accent: 'from-accent-purple to-accent-pink',
    skills: [
      { name: 'Machine Learning', level: 'Intermediate' },
      { name: 'TensorFlow', level: 'Beginner' },
      { name: 'Scikit-Learn', level: 'Intermediate' },
      { name: 'Pandas', level: 'Intermediate' },
      { name: 'NumPy', level: 'Intermediate' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    accent: 'from-accent-cyan to-primary-500',
    skills: [
      { name: 'Flask', level: 'Intermediate' },
      { name: 'FastAPI', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Intermediate' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Globe,
    accent: 'from-primary-400 to-accent-cyan',
    skills: [
      { name: 'React', level: 'Intermediate' },
      { name: 'Flutter', level: 'Intermediate' },
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: Cloud,
    accent: 'from-accent-pink to-accent-purple',
    skills: [
      { name: 'Azure', level: 'Beginner' },
      { name: 'Docker', level: 'Beginner' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'Cloud Deployment', level: 'Intermediate' },
    ],
  },
  {
    id: 'iot',
    title: 'IoT',
    icon: Cpu,
    accent: 'from-accent-cyan to-accent-purple',
    skills: [
      { name: 'Arduino', level: 'Intermediate' },
      { name: 'ESP32', level: 'Beginner' },
      { name: 'Sensor Integration', level: 'Intermediate' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    accent: 'from-primary-500 to-accent-cyan',
    skills: [
      { name: 'Git', level: 'Intermediate' },
      { name: 'GitHub', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    icon: Users,
    accent: 'from-accent-purple to-primary-400',
    skills: [
      { name: 'Problem Solving', level: 'Advanced' },
      { name: 'Communication', level: 'Intermediate' },
      { name: 'Team Collaboration', level: 'Advanced' },
    ],
  },
];

const levelStyles: Record<SkillLevel, string> = {
  Advanced: 'border-violet-400/40 bg-violet-500/10 text-violet-700 dark:text-violet-300',
  Intermediate: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
  Beginner: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative overflow-hidden py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-accent-purple/30 bg-accent-purple/10 px-4 py-2 text-sm font-medium text-accent-purple">
            Skills & Technologies
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            A practical toolkit built through hands-on development, research, and problem-solving.
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: categoryIndex * 0.06 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 ${category.accent}`} />
                <div className="glass-panel relative h-full overflow-hidden rounded-[1.5rem] p-6 transition-all duration-300 group-hover:border-primary-500/40 group-hover:shadow-2xl">
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                    <Sparkles className="h-4 w-4 text-primary-500" />
                  </div>

                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/70 bg-white/60 px-3 py-2.5 text-sm text-slate-700 shadow-sm dark:border-dark-700/70 dark:bg-dark-800/70 dark:text-slate-200">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${levelStyles[skill.level]}`}>
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
