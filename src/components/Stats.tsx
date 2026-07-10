import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FolderKanban, Code2, CloudCog, Cpu } from 'lucide-react';

const stats = [
  {
    icon: FolderKanban,
    value: 4,
    label: 'Projects',
    suffix: '',
    color: 'from-primary-500 to-accent-purple',
  },
  {
    icon: Code2,
    value: 15,
    label: 'Technologies',
    suffix: '+',
    color: 'from-accent-purple to-accent-pink',
  },
  {
    icon: CloudCog,
    value: 2,
    label: 'Cloud Applications',
    suffix: '',
    color: 'from-accent-cyan to-primary-500',
  },
  {
    icon: Cpu,
    value: 1,
    label: 'IoT System',
    suffix: '',
    color: 'from-accent-pink to-accent-purple',
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{
                    background: `linear-gradient(to bottom right, ${stat.color.split(' ')[0].replace('from-', '')}, ${stat.color.split(' ')[1].replace('to-', '')})`,
                  }}
                />

                <div className="glass-panel relative overflow-hidden rounded-[1.5rem] p-6 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary-500/30">
                  <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="mb-2 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                    >
                      {stat.value}
                    </motion.span>
                    <span className="ml-1 text-primary-500">{stat.suffix}</span>
                  </div>

                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
