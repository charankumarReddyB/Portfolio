import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Music, Mic2, Wheat, Code, Sparkles } from 'lucide-react';

const languages = [
  { name: 'English', level: 'Fluent', percentage: 90 },
  { name: 'Telugu', level: 'Native', percentage: 100 },
];

const hobbies = [
  { name: 'Listening to Music', icon: Music, color: 'from-pink-500 to-rose-600' },
  { name: 'Singing', icon: Mic2, color: 'from-purple-500 to-indigo-600' },
  { name: 'Agriculture at Hometown', icon: Wheat, color: 'from-green-500 to-emerald-600' },
  { name: 'Developing Software', icon: Code, color: 'from-primary-500 to-accent-purple' },
  { name: 'Exploring New Technologies', icon: Sparkles, color: 'from-accent-cyan to-primary-500' },
];

export function LanguagesHobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                <span className="gradient-text">Languages</span>
              </h2>
            </div>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{lang.name}</span>
                    <span className="text-primary-400 text-sm">{lang.level}</span>
                  </div>
                  <div className="relative h-3 rounded-full bg-dark-800 overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              <span className="gradient-text">Hobbies & Interests</span>
            </h2>

            <div className="grid gap-4">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-dark-900/50 border border-dark-700/50 hover:border-primary-500/30 transition-all cursor-default"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${hobby.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-dark-200 font-medium group-hover:text-white transition-colors">
                      {hobby.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
