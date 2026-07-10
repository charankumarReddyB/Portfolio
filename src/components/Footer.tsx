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
              className="mb-4 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Charan Kumar Reddy</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 max-w-md leading-relaxed text-slate-600 dark:text-slate-400"
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
                  className="rounded-xl border border-slate-200/70 bg-white/70 p-3 shadow-sm transition-all hover:border-primary-500/30 hover:bg-slate-100 dark:border-dark-700 dark:bg-dark-800/70 dark:hover:bg-dark-700"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-400"
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
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:charankumarreddybantrothula@gmail.com"
                  className="flex items-start gap-2 text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-400"
                >
                  <Mail className="mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">charankumarreddybantrothula@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919652233592"
                  className="text-slate-600 transition-colors hover:text-primary-500 dark:text-slate-400"
                >
                  +91 9652233592
                </a>
              </li>
              <li className="text-sm text-slate-600 dark:text-slate-400">Saveetha School of Engineering</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-200/70 pt-8 dark:border-dark-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center text-sm text-slate-500 md:text-left dark:text-slate-400"
            >
              &copy; {new Date().getFullYear()} Bantrothula Charan Kumar Reddy. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400"
            >
              Built with <Heart className="inline h-4 w-4 animate-pulse text-red-500" /> using React & Tailwind
            </motion.p>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-5 right-4 z-40 rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple p-3 text-white shadow-lg shadow-primary-500/30 transition-all hover:shadow-xl hover:shadow-primary-500/50 sm:right-6"
        whileHover={{ y: -4, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
