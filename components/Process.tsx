"use client";

import { motion } from "framer-motion";

const steps = [
  { 
    id: "01", 
    title: "Заявка и аудит", 
    desc: "Вы оставляете заявку, а наш инженер бесплатно изучает имеющиеся у вас документы, чтобы сразу озвучить точный план действий, сроки и стоимость." 
  },
  { 
    id: "02", 
    title: "Точные замеры", 
    desc: "Специалист выезжает на объект в удобное для вас время. Проводим геодезическую съемку участка или здания с помощью сертифицированного высокоточного оборудования." 
  },
  { 
    id: "03", 
    title: "Подготовка документов", 
    desc: "Наши кадастровые инженеры обрабатывают данные и формируют межевой или технический план. Мы многократно проверяем расчеты, чтобы исключить любые ошибки." 
  },
  { 
    id: "04", 
    title: "Готовый результат", 
    desc: "Вы получаете на руки документы, имеющие полную юридическую силу и гарантированно готовые для постановки на государственный кадастровый учет." 
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-16 text-center uppercase tracking-tight">
          Как мы <span style={{ color: '#D4AF37' }}>работаем</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative p-8 rounded-[2rem] border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl font-black text-gray-200 group-hover:text-blue-100 mb-6 transition-colors">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}