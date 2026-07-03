import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process"; // <--- 1. Должно быть раскомментировано
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
      <Stats />
      <Portfolio />
      
      <Process /> {/* <--- 2. Здесь должен быть вызов */}
      
      <Certificates />
      <Gallery />
      <Reviews />
      <FAQ />
      <ContactForm />
      <Contacts />
    </main>
  );
}