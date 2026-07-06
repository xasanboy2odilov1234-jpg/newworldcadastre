"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Заявка и аудит",
    description: "Вы оставляете заявку, а наш инженер бесплатно изучает имеющиеся у вас документы, чтобы сразу озвучить точный план действий, сроки и стоимость.",
  },
  {
    id: "02",
    title: "Точные замеры",
    description: "Специалист выезжает на объект в удобное для вас время. Проводим геодезическую съемку участка или здания с помощью сертифицированного высокоточного оборудования.",
  },
  {
    id: "03",
    title: "Подготовка документов",
    description: "Наши кадастровые инженеры обрабатывают данные и формируют межевой или технический план. Мы многократно проверяем расчеты, чтобы исключить любые ошибки.",
  },
  {
    id: "04",
    title: "Готовый результат",
    description: "Вы получаете на руки документы, имеющие полную юридическую силу и гарантированно готовые для постановки на государственный кадастровый учет.",
  }
];

export default function Steps() {
  const containerRef = useRef(null);
  
  // Отслеживаем скролл внутри этого блока
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Превращаем процент скролла в высоту золотой линии
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            Как мы <span style={{ color: '#D4AF37' }}>работаем</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Прозрачный и понятный процесс от первого звонка до получения готовых документов.
          </p>
        </div>

        {/* Контейнер таймлайна */}
        <div ref={containerRef} className="relative mt-12 max-w-4xl mx-auto pb-10">
          
          {/* Серая фоновая линия (Тропинка) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2 rounded-full" />
          
          {/* Анимированная золотая линия (Заполняется при скролле) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-[#D4AF37] transform md:-translate-x-1/2 rounded-full origin-top z-0"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              // Для компьютеров карточки будут чередоваться: лево-право
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className={`relative flex items-center md:justify-between flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Центральный кружок с цифрой */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 top-0 md:top-1/2 md:-translate-y-1/2 mt-2 md:mt-0">
                    <motion.div 
                       initial={{ scale: 0, backgroundColor: "#F3F4F6", color: "#9CA3AF" }}
                       whileInView={{ scale: 1, backgroundColor: "#D4AF37", color: "#FFFFFF" }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ duration: 0.4, delay: 0.1 }}
                       className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white flex items-center justify-center shadow-md font-black text-lg md:text-xl transition-colors"
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* Пустое пространство для отступа на компьютерах */}
                  <div className="hidden md:block md:w-5/12" />

                  {/* Сама карточка с текстом */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-5/12 pl-24 md:pl-0 pt-2 md:pt-0"
                  >
                    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-500 relative group overflow-hidden">
                       
                       {/* Водяной знак с цифрой на фоне */}
                       <div className="absolute -top-4 -right-2 text-8xl font-black text-gray-50 opacity-80 pointer-events-none group-hover:text-[#D4AF37]/5 transition-colors duration-500 group-hover:scale-110 transform">
                         {step.id}
                       </div>
                       
                       {/* Контент */}
                       <h3 className="text-xl md:text-2xl font-black text-blue-900 mb-4 relative z-10 group-hover:text-[#D4AF37] transition-colors duration-300">
                         {step.title}
                       </h3>
                       <p className="text-gray-600 leading-relaxed relative z-10 text-sm md:text-base">
                         {step.description}
                       </p>
                    </div>
                  </motion.div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}