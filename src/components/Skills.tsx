import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Server, Globe, Cloud, Cpu, Wrench, Users, Sparkles } from 'lucide-react';

type SkillLevel = 'Advanced' | 'Intermediate' | 'Beginner';

interface SkillItem {
  name: string;
  level: SkillLevel;
  icon?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: typeof Code;
  skills: SkillItem[];
  accent: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Code,
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
    title: 'Backend Development',
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
    title: 'Frontend Development',
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
    title: 'Cloud & DevOps',
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
    title: 'IoT & Embedded Systems',
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
  Advanced: 'border-violet-400/40 bg-violet-500/10 text-violet-600 dark:text-violet-300',
  Intermediate: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300',
  Beginner: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
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
            A polished toolkit shaped by hands-on projects, research, and continuous learning.
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-[1.75rem] bg-gradient-to-br opacity-0 transition-opacity duration-300 blur-xl group-hover:opacity-100 ${category.accent}`} />
                <div className="glass-panel relative h-full overflow-hidden rounded-[1.75rem] p-6 transition-all duration-300 group-hover:border-primary-500/40 group-hover:shadow-2xl">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                    <Sparkles className="h-4 w-4 text-primary-500" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        whileHover={{ y: -3, scale: 1.03 }}
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium ${levelStyles[skill.level]}`}
                      >
                        {skill.name}
                        <span className="ml-2 text-[11px] uppercase tracking-[0.2em]">{skill.level}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
