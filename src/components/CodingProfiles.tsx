import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, ExternalLink, Code, Users, Briefcase, GitBranch, Star } from 'lucide-react';

export function CodingProfiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium mb-4">
            Coding Profiles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Connect With Me</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Explore my code repositories and professional network
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="https://github.com/charankumarReddyB"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group relative block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 rounded-3xl p-8 group-hover:border-gray-500/30 transition-all overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-600/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">GitHub</h3>
                    <p className="text-gray-400">@charankumarReddyB</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl bg-dark-800/50">
                    <GitBranch className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">10+</div>
                    <div className="text-xs text-dark-500">Repos</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-dark-800/50">
                    <Code className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">5+</div>
                    <div className="text-xs text-dark-500">Languages</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-dark-800/50">
                    <Star className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">Active</div>
                    <div className="text-xs text-dark-500">Contributor</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-400">Top Languages</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">Python</span>
                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">C++</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">React</span>
                  </div>
                </div>

                <div className="flex items-center justify-end mt-6">
                  <div className="inline-flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                    <span className="font-medium">View Profile</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/charan-kumar-reddy-bantrothula-32578b31a/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="group relative block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative bg-dark-900/80 backdrop-blur-sm border border-dark-700/50 rounded-3xl p-8 group-hover:border-blue-500/30 transition-all overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                    <p className="text-blue-400">Charan Kumar Reddy</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl bg-dark-800/50">
                    <Users className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">Growing</div>
                    <div className="text-xs text-dark-500">Network</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-dark-800/50">
                    <Briefcase className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">Open</div>
                    <div className="text-xs text-dark-500">to Work</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-dark-800/50">
                    <Code className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">AI/ML</div>
                    <div className="text-xs text-dark-500">Focus</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-400">Status</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                      Actively Seeking Internships
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-end mt-6">
                  <div className="inline-flex items-center gap-2 text-blue-400 group-hover:text-white transition-colors">
                    <span className="font-medium">Connect</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
