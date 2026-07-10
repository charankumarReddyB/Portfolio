import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, Github, Linkedin, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const SERVICE_ID = 'service_dqk8rqd';
const TEMPLATE_ID = '';
const PUBLIC_KEY = '';
const EMAILJS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address.';
    if (!formData.subject.trim()) return 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) return 'Please share a bit more detail in your message.';
    return '';
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(''), 4000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setErrorMessage(validationError);
      setFormStatus('error');
      showToast(validationError);
      return;
    }

    setErrorMessage('');
    setFormStatus('sending');

    if (!EMAILJS_CONFIGURED) {
      setFormStatus('error');
      const fallbackMessage = 'Unable to send your message. Please try again later or contact me directly.';
      setErrorMessage(fallbackMessage);
      showToast(fallbackMessage);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Charan Kumar Reddy',
        },
        PUBLIC_KEY,
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      showToast('Thanks! Your message has been sent successfully.');
      window.setTimeout(() => setFormStatus('idle'), 4000);
    } catch {
      setFormStatus('error');
      const fallbackMessage = 'Unable to send your message. Please try again later or contact me directly.';
      setErrorMessage(fallbackMessage);
      showToast(fallbackMessage);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'charankumarreddybantrothula@gmail.com',
      href: 'mailto:charankumarreddybantrothula@gmail.com',
      color: 'from-primary-500 to-accent-purple',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9652233592',
      href: 'tel:+919652233592',
      color: 'from-accent-cyan to-primary-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/charan-kumar-reddy',
      href: 'https://www.linkedin.com/in/charan-kumar-reddy-bantrothula-32578b31a/',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/charankumarReddyB',
      href: 'https://github.com/charankumarReddyB',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-500">
            Get in Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Interested in collaboration or an opportunity? I would be delighted to hear from you.
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-5 backdrop-blur-xl transition-all hover:border-primary-500/30 dark:border-dark-700/50 dark:bg-dark-900/80"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} transition-transform group-hover:scale-110`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{item.label}</div>
                      <div className="break-all font-medium text-slate-700 transition-colors group-hover:text-primary-600 dark:text-slate-200 dark:group-hover:text-white">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-8 rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-accent-purple/10 p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary-400" />
                <span className="font-semibold text-slate-900 dark:text-white">Quick Response</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                I typically respond within 24 hours. Looking forward to connecting!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-panel relative rounded-[1.75rem] p-8 lg:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary-500/10 blur-3xl" />

              <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-800 focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-800/70 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-800 focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-800/70 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-800 focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-800/70 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-800 focus:border-primary-500 focus:outline-none dark:border-dark-700 dark:bg-dark-800/70 dark:text-white"
                    required
                  />
                </div>

                {formStatus !== 'idle' && (
                  <div className={`rounded-xl border px-4 py-3 text-sm ${formStatus === 'success' ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'border-rose-400/40 bg-rose-500/10 text-rose-700 dark:text-rose-300'}`}>
                    {formStatus === 'success' ? 'Thanks! Your message has been sent successfully.' : errorMessage}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple px-6 py-4 font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/40 disabled:opacity-60"
                  whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Message Sent!
                    </>
                  )}
                  {formStatus === 'error' && (
                    <>
                      <AlertCircle className="h-5 w-5" />
                      Try Again
                    </>
                  )}
                </motion.button>
              </form>

            </div>
          </motion.div>
        </div>
      </div>

      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="fixed bottom-6 right-6 z-[70] max-w-sm rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-medium text-slate-700 shadow-xl backdrop-blur-xl dark:border-dark-700 dark:bg-dark-900/90 dark:text-slate-200"
        >
          {toastMessage}
        </motion.div>
      )}
    </section>
  );
}
