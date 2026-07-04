import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Gallery from "@/components/Gallery";
import Certificates from "@/components/Certificates";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navigation />
      <Hero />
      <Stats />
      
      {/* Сначала показываем процесс работы / услуги */}
      <Process /> 
      
      {/* Затем подкрепляем это реальными проектами и видео */}
      <Portfolio />
      <Gallery />
      
      {/* Добиваем доверие лицензиями */}
      <Certificates />
      
      {/* Снимаем вопросы и закрываем на заявку */}
      <FAQ />
      <ContactForm />
      <Contacts />
    </main>
  );
}