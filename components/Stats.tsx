"use client";

import { motion, Variants } from "framer-motion";

// Явно указываем тип : Variants, чтобы TypeScript не ругался
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } 
  }
};

export default function Stats() {
  return (
    <section id="about" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Цифры и <span style={{ color: '#D4AF37' }}>Факты</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Надежность, подтвержденная годами работы и сотнями успешно завершенных кадастровых проектов.
          </p>
        </motion.div>

        {/* Сетка Bento Box */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px]"
        >
          {/* 1. Блок (10+ лет) — КОМПРОМИССНЫЙ ВАРИАНТ (светлее) */}
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2rem] shadow-lg lg:col-span-2 flex flex-col justify-end p-6 sm:p-8 group bg-gray-950">
            
            {/* Проявили фото до 50% */}
            <img 
              src="/stats-bg.jpg" 
              alt="Кадастровые замеры"
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Ослабили матовость и пустили снизу вверх */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent backdrop-blur-[1px]" />
            
            <div className="relative z-10">
              <div className="text-6xl md:text-7xl font-black text-white mb-1 drop-shadow-md">10+</div>
              <div className="text-lg md:text-xl font-bold uppercase tracking-widest drop-shadow-md" style={{ color: '#D4AF37' }}>
                Лет на рынке
              </div>
              <p className="text-white/85 mt-2 max-w-md text-sm sm:text-base hidden sm:block font-medium drop-shadow-sm">
                Глубокая экспертиза в геодезии и кадастровых работах любой сложности.
              </p>
            </div>
          </motion.div>

          {/* Блок 850+ */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col justify-center border border-gray-100">
            <div className="text-5xl font-black mb-2" style={{ color: '#D4AF37' }}>850+</div>
            <div className="text-base sm:text-lg font-bold uppercase text-blue-900 tracking-wider leading-tight">
              Успешных проектов
            </div>
            <p className="text-gray-500 mt-3 text-sm">
              От частных земельных участков до крупных промышленных объектов.
            </p>
          </motion.div>

          {/* Блок 50+ */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col justify-center border border-gray-100">
            <div className="text-5xl font-black mb-2 text-blue-900">50+</div>
            <div className="text-base sm:text-lg font-bold uppercase tracking-wider leading-tight" style={{ color: '#D4AF37' }}>
              Клиентов в месяц
            </div>
            <p className="text-gray-500 mt-3 text-sm">
              Доверяют нам оформление своих документов на регулярной основе.
            </p>
          </motion.div>

          {/* 4. Блок 100% — ПОДТЯНУЛИ ПОД ОБЩИЙ СТИЛЬ */}
          <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2rem] shadow-lg flex flex-col justify-end lg:col-span-2 lg:flex-row lg:items-center lg:justify-between p-6 sm:p-8 group bg-gray-950">
            
            {/* Оставили сочную видимость 55% */}
            <img 
              src="/guarantee-bg.jpg" 
              alt="Гарантия результата и документы"
              className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Сделали такой же мягкий градиент снизу вверх */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent backdrop-blur-[1px]" />
            
            <div className="relative z-10">
              <div className="text-5xl font-black mb-2" style={{ color: '#D4AF37' }}>100%</div>
              <div className="text-base sm:text-lg font-bold uppercase text-white tracking-wider drop-shadow-md">
                Гарантия результата
              </div>
            </div>

            <p className="relative z-10 text-white/85 mt-4 lg:mt-0 lg:max-w-sm lg:text-right text-sm sm:text-base font-medium drop-shadow-sm">
              Мы доводим каждое дело до конца. Полное юридическое сопровождение вплоть до получения документов на руки.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}