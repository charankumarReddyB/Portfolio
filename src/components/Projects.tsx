import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Leaf, Heart, Car, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';

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
    image: 'https://images.pexels.com/photos/236029/pexels-photo-236029.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800',
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
  const [activeProject, setActiveProject] = useState(0);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Innovative Solutions</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Showcasing projects that demonstrate technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="flex justify-center gap-2 mb-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject
                    ? 'bg-primary-500 scale-125'
                    : 'bg-dark-700 hover:bg-dark-600'
                }`}
              />
            ))}
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              animate={{ x: `-${activeProject * 100}%` }}
            >
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <div key={project.id} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-2xl"
                        style={{
                          background: `linear-gradient(to bottom right, ${project.color.split(' ')[0].replace('from-', '')}, ${project.color.split(' ')[1].replace('to-', '')})`,
                        }}
                      />

                      <div className="relative bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 rounded-3xl overflow-hidden group-hover:border-primary-500/30 transition-all duration-300">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />

                            <div className="absolute top-6 left-6">
                              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                                <Icon className="w-7 h-7 text-white" />
                              </div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6">
                              <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                              <p className="text-primary-400">{project.subtitle}</p>
                            </div>
                          </div>

                          <div className="p-8 lg:p-10">
                            <p className="text-dark-300 leading-relaxed mb-6">
                              {project.description}
                            </p>

                            {project.stats && (
                              <div className="grid grid-cols-3 gap-4 mb-6">
                                {Object.entries(project.stats).map(([key, value]) => (
                                  <div key={key} className="text-center p-3 rounded-xl bg-dark-800/50">
                                    <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                      {value}
                                    </div>
                                    <div className="text-xs text-dark-500 capitalize">{key}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-dark-400 mb-3 uppercase tracking-wider">
                                Key Features
                              </h4>
                              <ul className="grid grid-cols-2 gap-2">
                                {project.features.slice(0, 6).map((feature, i) => (
                                  <li key={i} className="flex items-center gap-2 text-dark-300 text-sm">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-dark-400 mb-3 uppercase tracking-wider">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 rounded-lg bg-dark-800 text-dark-300 text-xs font-medium border border-dark-700"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-800 border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700 transition-all text-dark-200 font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Github className="w-4 h-4" />
                                View Code
                              </motion.a>
                              {project.demo && (
                                <motion.a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white font-medium shadow-lg hover:shadow-xl transition-all`}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Live Demo
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevProject}
              className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-dark-300" />
            </motion.button>
            <motion.button
              onClick={nextProject}
              className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-dark-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
