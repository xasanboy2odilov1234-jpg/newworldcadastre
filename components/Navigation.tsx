"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const linkStyles = "text-gray-700 hover:text-blue-900 font-bold transition whitespace-nowrap text-lg xl:text-base";

  if (!t || !t.nav) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        
        <div className="flex items-center justify-between gap-4 w-full">
          
          <Link href="/" prefetch={false} onClick={closeMenu} className="flex items-center gap-2 md:gap-4 transition-opacity hover:opacity-80 shrink-0">
            <img src="/logo.png" alt="New World Cadastre Logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain mix-blend-multiply shrink-0" />
            <div className="flex flex-col justify-center">
              <span className="text-blue-900 font-black text-sm sm:text-lg md:text-xl lg:text-2xl leading-none tracking-wide whitespace-nowrap">
                NEW WORLD
              </span>
              <span className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base leading-none tracking-[0.2em] uppercase mt-1 whitespace-nowrap" style={{ color: '#D4AF37' }}>
                CADASTRE
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-8 shrink-0">
            <Link href="/" prefetch={false} className={linkStyles}>{t.nav.home}</Link>
            <Link href="/portfolio" prefetch={false} className={linkStyles}>{t.nav.services}</Link>
            <Link href="/about" prefetch={false} className={linkStyles}>{t.nav.about}</Link>
            <Link href="/#faq" prefetch={false} className={linkStyles}>{t.nav.faq}</Link>
            <Link href="/#contacts" prefetch={false} className={linkStyles}>{t.nav.contacts}</Link>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1 text-xs sm:text-sm font-bold">
              <span 
                onClick={() => setLanguage('uz')}
                className={`cursor-pointer transition-colors ${language === 'uz' ? 'text-blue-900' : 'text-gray-400 hover:text-blue-900'}`}
              >
                UZ
              </span>
              <span className="text-gray-300 mx-1">|</span>
              <span 
                onClick={() => setLanguage('ru')}
                className={`cursor-pointer transition-colors ${language === 'ru' ? 'text-blue-900' : 'text-gray-400 hover:text-blue-900'}`}
              >
                RU
              </span>
            </div>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="xl:hidden text-blue-900 cursor-pointer p-2 focus:outline-none bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              )}
            </button>
          </div>
        </div>

        {!isHome && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-2 pt-2 border-t border-gray-100 w-full"
          >
            <Link 
              href="/" 
              prefetch={false}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-400 hover:text-[#D4AF37] transition-colors uppercase tracking-widest"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              {t.nav.backToHome}
            </Link>
          </motion.div>
        )}

      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="xl:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg">
            <nav className="flex flex-col px-6 py-6 gap-6">
              <Link href="/" prefetch={false} onClick={closeMenu} className={linkStyles}>{t.nav.home}</Link>
              <Link href="/portfolio" prefetch={false} onClick={closeMenu} className={linkStyles}>{t.nav.services}</Link>
              <Link href="/about" prefetch={false} onClick={closeMenu} className={linkStyles}>{t.nav.about}</Link>
              <Link href="/#faq" prefetch={false} onClick={closeMenu} className={linkStyles}>{t.nav.faq}</Link>
              <Link href="/#contacts" prefetch={false} onClick={closeMenu} className={linkStyles}>{t.nav.contacts}</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}