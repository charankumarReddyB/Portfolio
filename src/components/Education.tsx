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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-500">
            Education
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            A strong academic foundation that continues to shape my technical growth.
          </p>
        </motion.div>

        <div ref={ref} className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-cyan md:left-1/2" />

          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative mb-12 last:mb-0 md:mb-16"
              >
                <div className={`absolute left-4 top-7 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br ${edu.color} md:left-1/2`} />

                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <motion.div whileHover={{ y: -4, scale: 1.01 }} className="group relative">
                    <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10"
                      style={{
                        background: `linear-gradient(to bottom right, ${edu.color.split(' ')[0].replace('from-', '')}, ${edu.color.split(' ')[1].replace('to-', '')})`,
                      }}
                    />

                    <div className="glass-panel relative overflow-hidden rounded-[1.5rem] p-6 lg:p-8 transition-all duration-300 group-hover:border-primary-500/40">
                      <div className="mb-5 flex items-start gap-4">
                        <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${edu.color}`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
                            <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${edu.status === 'Pursuing' ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300' : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300'}`}>
                              {edu.status}
                            </span>
                          </div>
                          <p className="font-medium text-primary-600 dark:text-primary-300">{edu.field}</p>
                        </div>
                      </div>

                      <div className="mb-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-accent-cyan" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-accent-purple" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      {(edu.score || edu.percentage) && (
                        <div className="mb-5 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm dark:border-dark-700/70 dark:bg-dark-800/70">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                              <Award className="h-4 w-4 text-amber-500" />
                              Achievement
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-slate-900 dark:text-white">{edu.score}</div>
                              <div className={`text-sm font-medium ${edu.color.includes('accent-purple') ? 'text-accent-purple' : 'text-primary-500'}`}>{edu.percentage}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="grid gap-3 sm:grid-cols-3">
                        {edu.details.map((detail, i) => {
                          const DetailIcon = detail.icon;
                          return (
                            <div key={i} className="rounded-2xl border border-slate-200/70 bg-white/60 p-3 text-center shadow-sm dark:border-dark-700/70 dark:bg-dark-800/70">
                              <DetailIcon className="mx-auto mb-2 h-4 w-4 text-slate-500 dark:text-slate-400" />
                              <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{detail.label}</div>
                              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">{detail.value}</div>
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
