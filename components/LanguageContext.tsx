"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ru; // Функция для получения текста
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // По умолчанию ставим русский
  const [language, setLanguage] = useState<Language>('ru');

  // Сохраняем выбор пользователя в браузере
  useEffect(() => {
    const savedLang = localStorage.getItem('app_lang') as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app_lang', lang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language], // Автоматически подставляет нужный словарь
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Хук для быстрого использования в любом компоненте
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}