import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Leaf, Heart, Car, AlertTriangle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'CropSafe AI',
    subtitle: 'Intelligent Crop Health Monitoring System',
    description: 'Built an AI-powered mobile application that detects crop diseases and analyzes soil nutrients using image processing and machine learning models.',
    image: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Leaf,
    color: 'from-green-500 to-emerald-600',
    technologies: ['Flutter', 'Python', 'FastAPI', 'TensorFlow', 'OCR', 'Firebase', 'Azure', 'REST APIs', 'Git'],
    features: [
      'Crop disease detection using ML',
      'Soil nutrient analysis',
      'OCR integration for text recognition',
      'Firebase authentication',
      'Real-time recommendations',
      'Azure cloud deployment',
    ],
    github: 'https://github.com/charankumarReddyB',
    demo: null,
    stats: { accuracy: '95%', users: '500+', deployed: 'Azure' },
  },
  {
    id: 2,
    title: 'Healthcare Cloud System',
    subtitle: 'Cloud Data Management System',
    description: 'Developed a cloud-based healthcare web application to manage patient records, appointments, and medical history with secure database integration.',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Heart,
    color: 'from-red-500 to-pink-600',
    technologies: ['React', 'Node.js', 'Docker', 'Azure', 'MySQL', 'REST APIs'],
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Medical history tracking',
      'Cloud deployment on Azure',
      'Secure database integration',
      'Role-based access control',
    ],
    github: 'https://github.com/charankumarReddyB',
    demo: null,
    stats: { records: '10K+', uptime: '99.9%', deployed: 'Azure' },
  },
  {
    id: 3,
    title: 'Vehicle Counter',
    subtitle: 'Automatic Vehicle Counter System',
    description: 'Designed and developed an IoT-based automatic vehicle counting system using Arduino, IR Sensors, and Display modules for smart transportation.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    icon: Car,
    color: 'from-blue-500 to-cyan-600',
    technologies: ['Arduino IDE', 'Embedded C', 'IoT', 'Electronics', 'Sensor Integration'],
    features: [
      'Vehicle detection using IR sensors',
      'Automatic counting system',
      'Real-time count display',
      'Traffic monitoring solution',
      'Low-cost smart transportation',
      'LCD display integration',
    ],
    hardware: ['Arduino Uno', 'IR Sensors', 'LCD Display', 'Breadboard', 'Power Supply'],
    github: 'https://github.com/charankumarReddyB',
    demo: null,
    stats: { accuracy: '98%', latency: '<100ms', cost: 'Low' },
  },
  {
    id: 4,
    title: 'Disaster Response',
    subtitle: 'Intelligent Disaster Response Prioritization',
    description: 'Developed an intelligent disaster response prioritization system using C++ and OOP concepts. Processes multiple incidents, calculates severity, and allocates emergency resources efficiently.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    icon: AlertTriangle,
    color: 'from-orange-500 to-yellow-600',
    technologies: ['C++', 'OOP', 'STL', 'Priority Queue', 'VS Code'],
    features: [
      'Incident Intake Module',
      'Severity Assessment Engine',
      'Dynamic Priority Computation',
      'Priority Queue Implementation',
      'Emergency Resource Allocation',
      'Dispatch Decision System',
    ],
    algorithm: 'Severity = (Casualties x 3) + (Damage x 2) + (Risk x 2)',
    github: 'https://github.com/charankumarReddyB',
    demo: null,
    stats: { efficiency: 'O(n log n)', accuracy: '97%', optimized: 'Yes' },
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative overflow-hidden py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-2 text-sm font-medium text-accent-cyan">
            Featured Projects
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="gradient-text">Selected Work</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            A curated set of projects that reflect product thinking, technical depth, and a strong problem-solving approach.
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-8 xl:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{
                    background: `linear-gradient(to bottom right, ${project.color.split(' ')[0].replace('from-', '')}, ${project.color.split(' ')[1].replace('to-', '')})`,
                  }}
                />

                <div className="glass-panel relative overflow-hidden rounded-[1.75rem] transition-all duration-300 group-hover:border-primary-500/40">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="mb-1 text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="text-sm font-medium text-slate-200">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="mb-6 leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm dark:border-dark-700/70 dark:bg-dark-800/70 dark:text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-100 dark:border-dark-700 dark:bg-dark-800/80 dark:text-slate-100"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${project.color} px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
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
