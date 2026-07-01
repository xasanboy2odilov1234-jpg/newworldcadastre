"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("RU");

  const t = {
    RU: { cert: "Сертификаты", proc: "Процесс", cont: "Контакты" },
    UZ: { cert: "Sertifikatlar", proc: "Jarayon", cont: "Kontaktlar" }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLang = () => setLang(lang === "RU" ? "UZ" : "RU");

  return (
    <header className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
      <nav className="flex items-center gap-6 text-sm font-medium text-slate-800 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-md border border-gray-100">
        
        <div className="hidden md:flex items-center gap-6">
        <a href="#certificates" className="hover:text-[#c9a227] transition-colors">{t[lang as 'RU' | 'UZ'].cert}</a>
<a href="#gallery" className="hover:text-[#c9a227] transition-colors">{t[lang as 'RU' | 'UZ'].proc}</a>
<a href="#contacts" className="hover:text-[#c9a227] transition-colors">{t[lang as 'RU' | 'UZ'].cont}</a>
        </div>

        <button onClick={toggleLang} className="font-bold hover:text-[#c9a227] transition-colors w-6">
          {lang}
        </button>

        <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1 w-6">
          <span className="w-full h-0.5 bg-slate-800"></span>
          <span className="w-full h-0.5 bg-slate-800"></span>
          <span className="w-full h-0.5 bg-slate-800"></span>
        </button>
      </nav>
    </header>
  );
}