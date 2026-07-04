"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Эффект для отслеживания скролла страницы
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Функция для закрытия меню при клике на ссылку (очень важно для мобилок)
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Левая часть: Логотип */}
        <Link 
          href="/" 
          onClick={closeMenu}
          className="flex items-center gap-2 md:gap-4 transition-opacity hover:opacity-80 shrink-0"
        >
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

        {/* Центральная часть: Десктопное меню (только для больших экранов xl) */}
        <nav className="hidden xl:flex items-center gap-8 shrink-0">
          <Link href="#services" className="text-gray-700 hover:text-blue-900 font-bold transition whitespace-nowrap">
            Услуги
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-900 font-bold transition whitespace-nowrap">
            О компании
          </Link>
          <Link href="#certificates" className="text-gray-700 hover:text-blue-900 font-bold transition whitespace-nowrap">
            Сертификаты
          </Link>
          <Link href="#faq" className="text-gray-700 hover:text-blue-900 font-bold transition whitespace-nowrap">
            Вопросы
          </Link>
          <Link href="#contacts" className="text-gray-700 hover:text-blue-900 font-bold transition whitespace-nowrap">
            Контакты
          </Link>
        </nav>

        {/* Правая часть: Переключатель языков и Бургер */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-1 text-xs sm:text-sm font-bold">
            <span className="text-gray-400 cursor-pointer hover:text-blue-900 transition-colors">UZ</span>
            <span className="text-gray-300 mx-1">|</span>
            <span className="text-blue-900 cursor-pointer">RU</span>
          </div>
          
          {/* Иконка бургер-меню для мобилок и планшетов */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-blue-900 cursor-pointer p-2 focus:outline-none bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              // Иконка крестика (закрыть)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Иконка гамбургера (открыть)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Выпадающее мобильное меню с плавной анимацией */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              <Link href="#services" onClick={closeMenu} className="text-lg font-bold text-gray-800 hover:text-blue-900">
                Услуги
              </Link>
              <Link href="#about" onClick={closeMenu} className="text-lg font-bold text-gray-800 hover:text-blue-900">
                О компании
              </Link>
              <Link href="#certificates" onClick={closeMenu} className="text-lg font-bold text-gray-800 hover:text-blue-900">
                Сертификаты
              </Link>
              <Link href="#faq" onClick={closeMenu} className="text-lg font-bold text-gray-800 hover:text-blue-900">
                Вопросы
              </Link>
              <Link href="#contacts" onClick={closeMenu} className="text-lg font-bold text-gray-800 hover:text-blue-900">
                Контакты
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}