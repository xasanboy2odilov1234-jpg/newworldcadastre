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
          <img 
            src="/logo.png" 
            alt="New World Cadastre Logo" 
            className="h-12 sm:h-16 md:h-20 w-auto object-contain mix-blend-multiply shrink-0" 
          />

          <div className="flex flex-col justify-center">
            <span className="text-blue-900 font-black text-sm sm:text-lg md:text-xl lg:text-2xl leading-none tracking-wide whitespace-nowrap">
              NEW WORLD
            </span>
            <span 
              className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base leading-none tracking-[0.2em] uppercase mt-1 whitespace-nowrap"
              style={{ color: '#D4AF37' }}
            >
              CADASTRE
            </span>
          </div>
        </Link>

        {/* Центральная часть: Меню — показывается ТОЛЬКО на больших экранах (xl) */}
        <nav className="hidden xl:flex items-center gap-6 shrink-0">
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
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold">
            <span className="text-gray-400 cursor-pointer hover:text-gray-600">UZ</span>
            <span className="text-gray-300">|</span>
            <span className="text-blue-600 cursor-pointer">RU</span>
          </div>
          
          {/* Кнопка скрывается на планшетах, уступая место бургер-иконке */}
          <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition shadow-sm whitespace-nowrap">
            Связаться
          </button>

          {/* Иконка бургер-меню для мобилок и планшетов (до xl) */}
          <div className="xl:hidden text-gray-700 cursor-pointer p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>

      </div>
    </header>
  );
}