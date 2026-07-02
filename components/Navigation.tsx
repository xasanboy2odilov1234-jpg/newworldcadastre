"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Левая часть: Родное Логотип-изображение + Адаптивный Текст */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 transition-opacity hover:opacity-80 shrink-0">
          {/* Твоя круглая эмблема с тахеометром и палочкой */}
          <img 
            src="/logo.png" 
            alt="New World Cadastre Logo" 
            className="h-12 sm:h-16 md:h-20 w-auto object-contain mix-blend-multiply shrink-0" 
          />

          {/* Адаптивная текстовая надпись справа */}
          <div className="flex flex-col justify-center">
            <span className="text-blue-900 font-black text-base sm:text-xl md:text-2xl lg:text-3xl leading-none tracking-wide whitespace-nowrap">
              NEW WORLD
            </span>
            <span 
              className="font-bold text-xs sm:text-sm md:text-base lg:text-xl leading-none tracking-[0.2em] uppercase mt-1 whitespace-nowrap"
              style={{ color: '#D4AF37' }}
            >
              CADASTRE
            </span>
          </div>
        </Link>

        {/* Центральная часть: Меню — теперь скрывается на планшетах (lg вместо md) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
          <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition whitespace-nowrap">
            Услуги
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition whitespace-nowrap">
            О компании
          </Link>
          <Link href="#certificates" className="text-gray-700 hover:text-blue-600 font-medium transition whitespace-nowrap">
            Сертификаты
          </Link>
          <Link href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium transition whitespace-nowrap">
            Контакты
          </Link>
        </nav>

        {/* Правая часть: Переключатель языков и кнопка "Связаться" */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <span className="text-gray-400 cursor-pointer hover:text-gray-600">UZ</span>
            <span className="text-gray-300">|</span>
            <span className="text-blue-600 cursor-pointer">RU</span>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition shadow-sm whitespace-nowrap">
            Связаться
          </button>
        </div>

      </div>
    </header>
  );
}