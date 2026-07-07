"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

const images = ["/project-1.jpg", "/project-2.jpg"];

export default function Portfolio() {
  const { t } = useLanguage();
  if (!t || !t.portfolio) return null;

  return (
    <section id="portfolio" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            {t.portfolio.title1} <span style={{ color: '#D4AF37' }}>{t.portfolio.title2}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">{t.portfolio.desc}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.portfolio.projects.map((project: any, index: number) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: index * 0.2 }} className="group rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-200">
                <img src={images[index]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-900 shadow-sm">
                  {project.tag}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}