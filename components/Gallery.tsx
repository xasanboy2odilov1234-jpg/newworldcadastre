"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  // ID твоего видео. Если снимете новое крутое видео — просто поменяй эти буквы здесь.
  const videoId = "n74QZKWJ440";

  return (
    <section id="process-videos" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            Наш процесс <span style={{ color: '#D4AF37' }}>в деле</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Посмотрите короткий ролик о том, как мы работаем. Только современное оборудование и профессиональный подход.
          </p>
        </motion.div>

        {/* Большой видеоплеер с автоплеем и ссылкой */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl group bg-black border-4 border-white mb-12"
        >
          {/* 
            iframe с параметрами:
            autoplay=1 (автозапуск), mute=1 (без звука - обязательно для автозапуска),
            loop=1 (повтор), controls=0 (скрыть панель ютуба), pointer-events-none (чтобы клик уходил на нашу ссылку)
            scale-105 немного увеличивает видео, чтобы скрыть черные полосы по краям
          */}
          <iframe
            className="absolute top-0 left-0 w-full h-full pointer-events-none scale-[1.02]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title="Процесс работы New World Cadastre"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>

          {/* Невидимая кнопка поверх видео */}
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/50 transition-all duration-500 flex flex-col items-center justify-center z-10 cursor-pointer"
          >
            {/* Анимация при наведении */}
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.5)] mb-4">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl md:text-2xl drop-shadow-lg tracking-wide uppercase">
                Смотреть со звуком
              </span>
            </div>
          </a>
        </motion.div>

        {/* Кнопка перехода на канал */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a 
            href="https://www.youtube.com/@newworldcadastre" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-900 text-white rounded-full font-bold uppercase tracking-wider overflow-hidden hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-blue-900/30"
          >
            <svg 
              className="w-6 h-6 text-[#FF0000] group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Перейти на YouTube канал
          </a>
        </motion.div>

      </div>
    </section>
  );
}