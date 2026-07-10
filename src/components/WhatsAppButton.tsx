import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const phoneNumber = '919652233592';
const whatsappUrl = `https://wa.me/${phoneNumber}`;

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500 px-4 py-3 text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </motion.a>
  );
}
