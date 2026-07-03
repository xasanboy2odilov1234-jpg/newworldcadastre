"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Заявка", desc: "Оставьте заявку, и мы свяжемся с вами для уточнения деталей вашего проекта." },
  { id: "02", title: "Замеры", desc: "Наш специалист выедет на объект для проведения всех необходимых измерений." },
  { id: "03", title: "Анализ", desc: "Мы обрабатываем данные и готовим всю техническую документацию." },
  { id: "04", title: "Результат", desc: "Вы получаете готовые документы, полностью соответствующие стандартам." },
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