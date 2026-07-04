"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Кадастровое сопровождение ЖК",
    desc: "Полный цикл работ: от первичной топографической съемки участка до успешной постановки всех корпусов на учет.",
    image: "/project-1.jpg",
    tag: "Жилая недвижимость"
  },
  {
    id: 2,
    title: "Исполнительная съемка здания",
    desc: "Точный контроль геометрии монолитного каркаса и геодезическое сопровождение на всех этапах строительства.",
    image: "/project-2.jpg",
    tag: "Коммерческая застройка"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            Завершенные <span style={{ color: '#D4AF37' }}>Проекты</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Практический опыт и реальные кейсы. Мы гордимся объектами, в которых принимали участие.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Блок с картинкой */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Тег поверх картинки */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-900 shadow-sm">
                  {project.tag}
                </div>
              </div>
              
              {/* Блок с текстом */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}