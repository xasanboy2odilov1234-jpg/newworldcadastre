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
      
      {/* 2. Процесс работы (Закомментировано, чтобы не сломать сайт. Создадим файл следующим шагом!) */}
      {/* <Process /> */}

      {/* 3. Завершенные проекты */}
      <Portfolio />

      {/* 4. Лицензии и сертификаты */}
      <Certificates />

      {/* 5. Сотрудники (Пока поставил Gallery на это место, позже заменим на новый блок Team) */}
      <Gallery />

      {/* 6. Отзывы */}
      <Reviews />

      {/* 7. Частые вопросы */}
      <FAQ />

      {/* 8. Контакты (Сначала форма связи, затем сами контактные данные) */}
      <ContactForm />
      <Contacts />
    </main>
  );
}