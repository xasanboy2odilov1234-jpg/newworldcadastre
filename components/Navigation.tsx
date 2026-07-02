"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Добавили импорт

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
        scrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
    {/* Левая часть: Родное Логотип-изображение + Текст со светло-золотым акцентом */}
    <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-80">
          
          {/* Твоя круглая эмблема с тахеометром и палочкой */}
          <img 
            src="/logo.png" 
            alt="New World Cadastre Logo" 
            className="h-16 md:h-24 w-auto object-contain mix-blend-multiply shrink-0" 
          />

          {/* Крупная текстовая надпись справа */}
          <div className="flex flex-col justify-center min-w-[180px] md:min-w-[260px]">
            <span className="text-blue-900 font-black text-xl md:text-3xl leading-none tracking-wide whitespace-nowrap">
              NEW WORLD
            </span>
            {/* Слово CADASTRE — теперь чистого светло-золотого цвета */}
            <span 
              className="font-bold text-sm md:text-xl leading-none tracking-[0.2em] uppercase mt-1 whitespace-nowrap"
              style={{ color: '#D4AF37' }} // Код классического золота (Metallic Gold), он светлее и без оранжевого отлива
            >
              CADASTRE
            </span>
          </div>

        </Link>

        {/* Центральная часть: Меню */}
        <nav className="hidden md:flex gap-8">
          <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Услуги
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">
            О компании
          </Link>
          <Link href="#certificates" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Сертификаты
          </Link>
          <Link href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Контакты
          </Link>
        </nav>

        {/* Правая часть: Язык и Кнопка */}
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-900 font-bold transition">
            UZ
          </button>
          <button className="text-blue-600 font-bold hover:text-blue-800 transition">
            RU
          </button>
          
          <a 
            href="#contact" 
            className="hidden md:inline-block px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
          >
            Связаться
          </a>
          
          <button className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}