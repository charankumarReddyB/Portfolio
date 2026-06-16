import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Charan Kumar Reddy</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-dark-400 mb-6 max-w-md leading-relaxed"
            >
              AI Developer, Full Stack Developer, and IoT Enthusiast passionate about building
              innovative solutions that solve real-world problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-3"
            >
              {[
                {
                  icon: Github,
                  href: 'https://github.com/charankumarReddyB',
                  label: 'GitHub',
                },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/charan-kumar-reddy-bantrothula-32578b31a/',
                  label: 'LinkedIn',
                },
                {
                  icon: Mail,
                  href: 'mailto:charankumarreddybantrothula@gmail.com',
                  label: 'Email',
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700 transition-all"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-dark-400" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:charankumarreddybantrothula@gmail.com"
                  className="text-dark-400 hover:text-primary-400 transition-colors flex items-start gap-2"
                >
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="text-sm">charankumarreddybantrothula@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919652233592"
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                >
                  +91 9652233592
                </a>
              </li>
              <li className="text-dark-400 text-sm">Saveetha School of Engineering</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-dark-500 text-sm text-center md:text-left"
            >
              &copy; {new Date().getFullYear()} Bantrothula Charan Kumar Reddy. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-dark-500 text-sm flex items-center gap-1"
            >
              Built with <Heart className="w-4 h-4 text-red-500 inline animate-pulse" /> using React & Tailwind
            </motion.p>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 p-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 transition-all z-40"
        whileHover={{ y: -4, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
