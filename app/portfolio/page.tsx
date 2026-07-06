import Navigation from "@/components/Navigation";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white pt-24">
      <Navigation />
      
      {/* 1. Как мы работаем (Услуги/Процесс) */}
      <Process />
      
      {/* 2. Наши проекты */}
      <Portfolio />
      
      {/* 3. Видео галерея */}
      <Gallery />
      
      {/* Подвал оставляем везде для удобства связи */}
      <Contacts />
    </main>
  );
}