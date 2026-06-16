import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Brain, Server, Globe, Cloud, Cpu, Wrench, Users, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Code,
    color: 'from-primary-500 to-accent-purple',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence & Data Science',
    icon: Brain,
    color: 'from-accent-purple to-accent-pink',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Scikit-Learn', level: 80 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 90 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    color: 'from-accent-cyan to-primary-500',
    skills: [
      { name: 'Flask', level: 80 },
      { name: 'FastAPI', level: 85 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Globe,
    color: 'from-primary-400 to-accent-cyan',
    skills: [
      { name: 'React', level: 75 },
      { name: 'Flutter', level: 80 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-accent-pink to-accent-purple',
    skills: [
      { name: 'Azure', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'Cloud Deployment', level: 80 },
    ],
  },
  {
    id: 'iot',
    title: 'IoT & Embedded Systems',
    icon: Cpu,
    color: 'from-accent-cyan to-accent-purple',
    skills: [
      { name: 'Arduino', level: 85 },
      { name: 'ESP32', level: 80 },
      { name: 'Sensor Integration', level: 85 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    color: 'from-primary-500 to-accent-cyan',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    icon: Users,
    color: 'from-accent-purple to-primary-400',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Communication', level: 85 },
      { name: 'Team Collaboration', level: 90 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-sm font-medium mb-4">
            Skills & Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A comprehensive toolkit refined through hands-on projects and continuous learning
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setActiveCategory(category.id)}
                onHoverEnd={() => setActiveCategory(null)}
                className={`relative group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(to bottom right, ${category.color.split(' ')[0].replace('from-', '')}, ${category.color.split(' ')[1].replace('to-', '')})`,
                  }}
                />

                <div className={`relative h-full p-6 rounded-2xl bg-dark-900/50 backdrop-blur-sm border transition-all duration-300 ${
                  isActive
                    ? 'border-primary-500/50 glow-effect'
                    : 'border-dark-700/50 group-hover:border-primary-500/30'
                }`}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-dark-300 text-sm">{skill.name}</span>
                          <span className="text-primary-400 text-xs font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-dark-800 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                    <ChevronRight className="w-5 h-5 text-primary-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 flex-wrap justify-center">
            <div className="px-6 py-3 rounded-xl bg-dark-800/50 border border-dark-700">
              <span className="text-dark-400 text-sm">Programming: </span>
              <span className="text-primary-400 font-semibold">Python, C++, SQL</span>
            </div>
            <div className="px-6 py-3 rounded-xl bg-dark-800/50 border border-dark-700">
              <span className="text-dark-400 text-sm">Frameworks: </span>
              <span className="text-accent-cyan font-semibold">Flask, FastAPI, React, Flutter</span>
            </div>
            <div className="px-6 py-3 rounded-xl bg-dark-800/50 border border-dark-700">
              <span className="text-dark-400 text-sm">Cloud: </span>
              <span className="text-accent-purple font-semibold">Azure, Firebase, Docker</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
