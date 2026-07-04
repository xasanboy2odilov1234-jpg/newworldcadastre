"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Топографическая съемка",
    desc: "Процесс работы нашего инженера на объекте с тахеометром.",
    youtubeId: "n74QZKWJ440" 
  },
  {
    id: 2,
    title: "Съемка с дрона",
    desc: "Аэрофотосъемка больших территорий для создания ортофотопланов.",
    youtubeId: "n74QZKWJ440"
  },
  {
    id: 3,
    title: "Камеральная обработка",
    desc: "Оцифровка данных и подготовка финальных чертежей в офисе.",
    youtubeId: "n74QZKWJ440"
  }
];

export default function Gallery() {
  return (
    <section id="process-videos" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            Процесс <span style={{ color: '#D4AF37' }}>Работы</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Посмотрите, как мы работаем в полях и в офисе. Современное оборудование и полная прозрачность на каждом этапе.
          </p>
        </motion.div>

        {/* Сетка с видео */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <h3 className="font-bold text-xl text-blue-900 mb-2">{video.title}</h3>
              <p className="text-sm text-gray-500 mb-4 flex-grow">{video.desc}</p>
              
              {/* Контейнер для YouTube iframe, сохраняющий пропорции 16:9 */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-gray-900 shadow-inner" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Кнопка перехода на канал */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a 
            href="https://www.youtube.com/@newworldcadastre" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-900 text-white rounded-full font-bold uppercase tracking-wider overflow-hidden hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-blue-900/30"
          >
            {/* Иконка YouTube (SVG) */}
            <svg 
              className="w-6 h-6 text-[#FF0000] group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Больше видео на нашем канале
          </a>
        </motion.div>

      </div>
    </section>
  );
}