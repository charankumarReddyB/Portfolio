import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, BookOpen, Building, School, Award } from 'lucide-react';

const educationData = [
  {
    id: 'bachelors',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering (Artificial Intelligence)',
    institution: 'Saveetha School of Engineering',
    duration: '2024 - 2028',
    status: 'Pursuing',
    icon: GraduationCap,
    color: 'from-primary-500 to-accent-purple',
    details: [
      { label: 'Focus', value: 'AI & ML', icon: BookOpen },
      { label: 'Degree', value: 'B.E. (AI)', icon: Award },
      { label: 'Duration', value: '4 Years', icon: Calendar },
    ],
  },
  {
    id: 'intermediate',
    degree: 'Intermediate (+1 & +2)',
    field: 'Board of Intermediate Education',
    institution: 'Narayana Junior College, Kurnool',
    duration: '2022 - 2024',
    status: 'Completed',
    score: '947/1000',
    percentage: '94.7%',
    icon: School,
    color: 'from-accent-cyan to-primary-500',
    details: [
      { label: 'Marks', value: '947/1000', icon: Award },
      { label: 'Percentage', value: '94.7%', icon: BookOpen },
      { label: 'Duration', value: '2 Years', icon: Calendar },
    ],
  },
  {
    id: 'schooling',
    degree: 'Secondary School Certificate',
    field: '10th Class (SSC)',
    institution: 'Vani EM School',
    duration: '2022',
    status: 'Completed',
    score: '425/600',
    percentage: '70.83%',
    icon: School,
    color: 'from-accent-purple to-accent-pink',
    details: [
      { label: 'Marks', value: '425/600', icon: Award },
      { label: 'Percentage', value: '70.83%', icon: BookOpen },
      { label: 'Stream', value: 'Science', icon: BookOpen },
    ],
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-20 lg:py-32 overflow-hidden">
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
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A strong educational foundation building expertise in technology
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-cyan transform md:-translate-x-1/2" />

          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 md:mb-16 last:mb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${edu.color} transform -translate-x-1/2 md:-translate-x-1/2 mt-8 z-10`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br animate-ping opacity-30" style={{ background: `linear-gradient(to bottom right, ${edu.color.split(' ')[0].replace('from-', '')}, ${edu.color.split(' ')[1].replace('to-', '')})` }} />
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl"
                      style={{
                        background: `linear-gradient(to bottom right, ${edu.color.split(' ')[0].replace('from-', '')}, ${edu.color.split(' ')[1].replace('to-', '')})`,
                      }}
                    />

                    <div className="relative bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 lg:p-8 group-hover:border-primary-500/30 transition-all">
                      {/* Header with icon */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg lg:text-xl font-bold text-white">{edu.degree}</h3>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              edu.status === 'Pursuing'
                                ? 'bg-primary-500/20 text-primary-400'
                                : 'bg-green-500/20 text-green-400'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          <p className="text-primary-400 font-medium">{edu.field}</p>
                        </div>
                      </div>

                      {/* Institution and location */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-dark-300">
                          <Building className="w-4 h-4 text-accent-cyan" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-dark-400">
                          <Calendar className="w-4 h-4 text-accent-purple" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      {/* Score/Percentage for completed education */}
                      {(edu.score || edu.percentage) && (
                        <div className="mb-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Award className="w-5 h-5 text-yellow-500" />
                              <span className="text-dark-300">Achievement</span>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-white">{edu.score}</div>
                              <div className={`text-sm font-medium bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                                {edu.percentage}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Details grid */}
                      <div className="grid grid-cols-3 gap-3">
                        {edu.details.map((detail, i) => {
                          const DetailIcon = detail.icon;
                          return (
                            <div key={i} className="text-center p-3 rounded-lg bg-dark-800/30">
                              <DetailIcon className="w-4 h-4 text-dark-500 mx-auto mb-1" />
                              <div className="text-xs text-dark-500">{detail.label}</div>
                              <div className="text-sm text-dark-200 font-medium">{detail.value}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
