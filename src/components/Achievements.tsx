import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Sparkles, Rocket, Target, Zap, Trophy, Star } from 'lucide-react';

const achievements = [
  {
    icon: Sparkles,
    title: 'AI-Powered Agricultural Solution',
    description: 'Developed CropSafe AI, an intelligent crop health monitoring system with 95% disease detection accuracy',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Rocket,
    title: 'Cloud-Native Healthcare Application',
    description: 'Built a scalable healthcare management system deployed on Azure with secure patient data handling',
    color: 'from-red-500 to-pink-600',
  },
  {
    icon: Target,
    title: 'IoT Vehicle Counter System',
    description: 'Designed a low-cost, high-accuracy automatic vehicle counting system for smart transportation',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Intelligent Disaster Response System',
    description: 'Developed an optimized priority queue-based disaster response system using advanced data structures',
    color: 'from-orange-500 to-yellow-600',
  },
  {
    icon: Trophy,
    title: 'Multi-Domain Expertise',
    description: 'Hands-on experience in AI, Cloud Computing, Full Stack Development, and IoT Systems',
    color: 'from-purple-500 to-indigo-600',
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Key Accomplishments</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Milestones and achievements that showcase my journey in technology
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(to bottom right, ${achievement.color.split(' ')[0].replace('from-', '')}, ${achievement.color.split(' ')[1].replace('to-', '')})`,
                  }}
                />

                <div className="relative h-full p-6 rounded-2xl bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 group-hover:border-primary-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${achievement.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-dark-400 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Star className="w-5 h-5 text-primary-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary-500/10 via-accent-purple/10 to-accent-cyan/10 border border-primary-500/30">
            <Award className="w-6 h-6 text-primary-400" />
            <span className="text-dark-200 font-medium">
              Continuously building innovative solutions for real-world challenges
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
