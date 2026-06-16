import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FolderKanban, Code, Award, Coffee } from 'lucide-react';

const stats = [
  {
    icon: FolderKanban,
    value: 4,
    label: 'Projects Completed',
    suffix: '+',
    color: 'from-primary-500 to-accent-purple',
  },
  {
    icon: Code,
    value: 10,
    label: 'Technologies',
    suffix: '+',
    color: 'from-accent-purple to-accent-pink',
  },
  {
    icon: Award,
    value: 95,
    label: 'ML Model Accuracy',
    suffix: '%',
    color: 'from-accent-cyan to-primary-500',
  },
  {
    icon: Coffee,
    value: 500,
    label: 'Cups of Coffee',
    suffix: '+',
    color: 'from-accent-pink to-accent-purple',
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(to bottom right, ${stat.color.split(' ')[0].replace('from-', '')}, ${stat.color.split(' ')[1].replace('to-', '')})`,
                  }}
                />

                <div className="relative p-6 rounded-2xl bg-dark-900/50 backdrop-blur-sm border border-dark-700/50 text-center group-hover:border-primary-500/30 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-primary-400">{stat.suffix}</span>
                  </div>

                  <p className="text-dark-400 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
