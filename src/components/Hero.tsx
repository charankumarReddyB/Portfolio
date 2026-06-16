import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, Github, Linkedin, Bot, Brain, Cpu, Cloud, Code, Database, Zap } from 'lucide-react';

const techIcons = [
  { Icon: Brain, delay: 0, x: '5%', y: '20%' },
  { Icon: Cpu, delay: 0.5, x: '90%', y: '25%' },
  { Icon: Cloud, delay: 1, x: '10%', y: '70%' },
  { Icon: Code, delay: 1.5, x: '85%', y: '65%' },
  { Icon: Database, delay: 2, x: '3%', y: '45%' },
  { Icon: Zap, delay: 2.5, x: '92%', y: '45%' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {techIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-500/30 dark:text-primary-500/20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
        </motion.div>
      ))}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 mb-6">
              <Bot className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400 font-medium">
                Available for Internships
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-dark-100 dark:text-white">Hi, I'm </span>
            <span className="gradient-text">Charan Kumar Reddy</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-dark-400 dark:text-dark-300 font-medium">
              Computer Science & Engineering (Artificial Intelligence) Student
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {['AI Developer', 'Full Stack Developer', 'IoT Enthusiast', 'Problem Solver'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-lg bg-dark-800/50 dark:bg-dark-800/50 border border-dark-700 text-primary-400 font-medium text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-dark-400 dark:text-dark-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Passionate Computer Science & Engineering (Artificial Intelligence) student with interests in
            Artificial Intelligence, Machine Learning, Cloud Computing, Full Stack Development, and IoT Systems.
            I enjoy building innovative solutions that solve real-world problems and continuously exploring emerging technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all btn-glow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-500/50 text-primary-400 font-semibold hover:bg-primary-500/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-dark-800 dark:bg-dark-800 text-dark-100 dark:text-dark-100 font-semibold border border-dark-700 hover:border-primary-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            {[
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/charan-kumar-reddy-bantrothula-32578b31a/',
                label: 'LinkedIn',
              },
              {
                icon: Github,
                href: 'https://github.com/charankumarReddyB',
                label: 'GitHub',
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-dark-800/50 dark:bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700 transition-all group"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6 text-dark-400 group-hover:text-primary-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-500/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
