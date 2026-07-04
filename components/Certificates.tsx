"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "Государственная лицензия",
    desc: "Официальное разрешение на осуществление геодезических и картографических работ. Гарантия законности всех процедур.",
    image: "/cert-1.jpg"
  },
  {
    id: 2,
    title: "Допуск СРО",
    desc: "Свидетельство о допуске к работам по инженерным изысканиям, оказывающим влияние на безопасность объектов капитального строительства.",
    image: "/cert-2.jpg"
  },
  {
    id: 3,
    title: "Аттестат инженера",
    desc: "Действующий квалификационный аттестат главного кадастрового инженера, подтверждающий профильную экспертизу и опыт.",
    image: "/cert-3.jpg"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="w-full py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            Лицензии и <span style={{ color: '#D4AF37' }}>Сертификаты</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Официальное подтверждение нашей квалификации. Мы несем полную юридическую ответственность за каждый выданный документ.
          </p>
        </motion.div>

        {/* Сетка для карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col items-center text-center"
            >
              {/* Контейнер для фото документа */}
              {/* Используем p-4 и bg-gray-50, чтобы документ смотрелся как в рамочке */}
              <div className="relative w-full h-72 sm:h-80 bg-gray-50 rounded-2xl mb-8 p-4 border border-gray-100 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                
                {/* 
                  Внимание: object-contain гарантирует, что сертификат не обрежется по краям!
                  Если твои картинки в формате .png, поменяй расширение в массиве certificates выше
                */}
                <Image 
                  src={cert.image} 
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain drop-shadow-md" 
                />
              </div>
              
              <h3 className="font-bold text-xl text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}