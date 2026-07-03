import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Certificates from "@/components/Certificates";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navigation />
      <Hero />
      
      {/* 1. Цифры и факты */}
      <Stats />
      
      {/* 2. Процесс работы (Создадим файл позже) */}
      {/* <Process /> */}

      {/* 3. Завершенные проекты */}
      <Portfolio />

      {/* 4. Лицензии и сертификаты */}
      <Certificates />

      {/* 5. Сотрудники (Создадим файл позже) */}
      {/* <Team /> */}

      {/* 6. Отзывы */}
      <Reviews />

      {/* 7. Частые вопросы */}
      <FAQ />

      {/* 8. Контакты */}
      <ContactForm />
      <Contacts />
    </main>
  );
}