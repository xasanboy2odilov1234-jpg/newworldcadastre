"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function Gallery() {
  const videoId = "-3htB3yDM54";
  const { t } = useLanguage();
  if (!t || !t.gallery) return null;

  return (
    <section id="process-videos" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            {t.gallery.title1} <span style={{ color: '#D4AF37' }}>{t.gallery.title2}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">{t.gallery.desc}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-black border-4 border-white">
          <iframe className="absolute top-0 left-0 w-full h-full pointer-events-none scale-[1.02]" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`} title="Процесс работы New World Cadastre" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 cursor-pointer"></a>
        </motion.div>
      </div>
    </section>
  );
}