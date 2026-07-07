"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();
  if (!t || !t.faq) return null;

  const displayedFaqs = showAll ? t.faq.items : t.faq.items.slice(0, 3);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            {t.faq.title1} <span style={{ color: '#D4AF37' }}>{t.faq.title2}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">{t.faq.desc}</p>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {displayedFaqs.map((faq: any, index: number) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-100 transition-colors">
                <button onClick={() => toggleFAQ(index)} className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex justify-between items-center focus:outline-none">
                  <span className="font-bold text-lg text-blue-900 pr-8">{faq.q}</span>
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="flex-shrink-0 text-blue-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-12 flex justify-center">
          <button onClick={() => { setShowAll(!showAll); if (showAll) setOpenIndex(null); }} className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-blue-900 text-blue-900 rounded-full font-bold uppercase tracking-wider hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
            {showAll ? t.faq.hideAll : t.faq.showAll}
            <motion.svg animate={{ rotate: showAll ? 180 : 0 }} className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}