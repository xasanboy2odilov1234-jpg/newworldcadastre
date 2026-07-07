import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Ленивая загрузка для всех компонентов, кроме Hero (он на первом экране)
const Stats = dynamic(() => import('@/components/Stats'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const ContactForm = dynamic(() => import('@/components/ContactForm'));
const Contacts = dynamic(() => import('@/components/Contacts'));
const ChatButton = dynamic(() => import('@/components/ChatButton'));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative">
      <Navigation />
      
      {/* Hero грузится сразу, чтобы не было "мигания" при открытии сайта */}
      <Hero />
      
      {/* Эти блоки подгружаются только когда пользователь до них докрутит */}
      <Stats />
      <FAQ /> 
      <ContactForm />
      <Contacts />
      
      <ChatButton />
    </main>
  );
}