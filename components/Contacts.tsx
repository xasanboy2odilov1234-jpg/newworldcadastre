"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Telegram",
    handle: "@newworldcadastre",
    url: "https://t.me/newworldcadastre",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@newworldcadastre",
    url: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "/newworldcadastre",
    url: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@newworldcadastre",
    url: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Contacts() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 sm:pt-24 pb-8 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === БЛОК СОЦИАЛЬНЫХ СЕТЕЙ === */}
        <div className="mb-16 sm:mb-24">
          <h3 className="text-center text-sm sm:text-base font-bold text-gray-400 tracking-[0.2em] uppercase mb-8">
            Мы в социальных сетях
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                  {social.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {social.name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-0.5">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* === ОСНОВНОЙ ПОДВАЛ === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Логотип и Описание (Занимает 4 колонки) */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white font-black text-xl leading-none tracking-wide">
                  NEW WORLD
                </span>
                <span className="font-bold text-xs leading-none tracking-[0.2em] uppercase mt-1 text-[#D4AF37]">
                  CADASTRE
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Ведущая кадастровая компания — где исключительная точность встречается с безупречным сервисом и юридической надежностью.
            </p>
          </div>

          {/* Страницы (Занимает 3 колонки) */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-6">
              Страницы
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm w-fit">Главная</Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm w-fit">Услуги и Проекты</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm w-fit">О компании</Link>
              <Link href="/#faq" className="text-gray-300 hover:text-white transition-colors text-sm w-fit">Частые вопросы</Link>
            </nav>
          </div>

          {/* Контакты (Занимает 5 колонок) */}
          <div className="md:col-span-6 lg:col-span-5">
            <h4 className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-6">
              Контакты
            </h4>
            
            <div className="flex flex-col gap-4 mb-8">
              {/* Адрес */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Ферганская область, <br/> Алтыарыкский район
                </span>
              </div>
              
              {/* График */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 text-sm">
                  Пн-Пт · 9:00 – 18:00
                </span>
              </div>
              
              {/* Телефон */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+998509003337" className="text-gray-300 text-sm hover:text-[#D4AF37] transition-colors">
                  +998 (50) 900-33-37
                </a>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Присоединяйтесь к нам для безупречного решения любых кадастровых задач в Узбекистане.
            </p>
            
            <a 
              href="https://yandex.uz/maps/-/CDu~m..." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              Как добраться
            </a>
          </div>
        </div>

        {/* === НИЖНЯЯ ПОЛОСА КОПИРАЙТА === */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} New World Cadastre. Все права защищены.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right">
            Ведущие кадастровые инженеры Узбекистана
          </p>
        </div>

      </div>
    </footer>
  );
}