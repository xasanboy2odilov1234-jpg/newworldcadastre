import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import Process from "@/components/Process";

// Ленивая загрузка для тяжелых блоков ниже первого экрана (особенно для видео!)
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Contacts = dynamic(() => import("@/components/Contacts"));

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white pt-24">
      <Navigation />
      
      {/* Верхний блок загружается сразу */}
      <Process />
      
      {/* 2. Наши проекты с картинками (ленивая загрузка) */}
      <Portfolio />
      
      {/* 3. Видео галерея - ОЧЕНЬ важно грузить лениво, так как iframe с ютубом весит много */}
      <Gallery />
      
      {/* Подвал оставляем везде для удобства связи */}
      <Contacts />
    </main>
  );
}