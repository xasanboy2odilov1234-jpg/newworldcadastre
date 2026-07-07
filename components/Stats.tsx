"use client";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants: Variants = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } } };

export default function Stats() {
  const { t } = useLanguage();
  if (!t || !t.stats) return null;

  return (
    <section id="about" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            {t.stats.title1} <span style={{ color: '#D4AF37' }}>{t.stats.title2}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">{t.stats.desc}</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px]">
          
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2rem] shadow-lg lg:col-span-2 flex flex-col justify-end p-6 sm:p-8 group bg-gray-950">
            <img src="/stats-bg.jpg" alt="Кадастровые замеры" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent backdrop-blur-[1px]" />
            <div className="relative z-10">
              <div className="text-6xl md:text-7xl font-black text-white mb-1 drop-shadow-md">{t.stats.y10.val}</div>
              <div className="text-lg md:text-xl font-bold uppercase tracking-widest drop-shadow-md" style={{ color: '#D4AF37' }}>{t.stats.y10.label}</div>
              <p className="text-white/85 mt-2 max-w-md text-sm sm:text-base hidden sm:block font-medium drop-shadow-sm">{t.stats.y10.text}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col justify-center border border-gray-100">
            <div className="text-5xl font-black mb-2" style={{ color: '#D4AF37' }}>{t.stats.y850.val}</div>
            <div className="text-base sm:text-lg font-bold uppercase text-blue-900 tracking-wider leading-tight">{t.stats.y850.label}</div>
            <p className="text-gray-500 mt-3 text-sm">{t.stats.y850.text}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col justify-center border border-gray-100">
            <div className="text-5xl font-black mb-2 text-blue-900">{t.stats.y50.val}</div>
            <div className="text-base sm:text-lg font-bold uppercase tracking-wider leading-tight" style={{ color: '#D4AF37' }}>{t.stats.y50.label}</div>
            <p className="text-gray-500 mt-3 text-sm">{t.stats.y50.text}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2rem] shadow-lg flex flex-col justify-end lg:col-span-2 lg:flex-row lg:items-center lg:justify-between p-6 sm:p-8 group bg-gray-950">
            <img src="/guarantee-bg.jpg" alt="Гарантия результата" className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent backdrop-blur-[1px]" />
            <div className="relative z-10">
              <div className="text-5xl font-black mb-2" style={{ color: '#D4AF37' }}>{t.stats.y100.val}</div>
              <div className="text-base sm:text-lg font-bold uppercase text-white tracking-wider drop-shadow-md">{t.stats.y100.label}</div>
            </div>
            <p className="relative z-10 text-white/85 mt-4 lg:mt-0 lg:max-w-sm lg:text-right text-sm sm:text-base font-medium drop-shadow-sm">{t.stats.y100.text}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}