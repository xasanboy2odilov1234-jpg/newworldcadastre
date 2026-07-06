import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ"; // <-- Вернули импорт
import ContactForm from "@/components/ContactForm";
import Contacts from "@/components/Contacts";
import ChatButton from "@/components/ChatButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative">
      <Navigation />
      
      <Hero />
      <Stats />
      
      {/* Вернули блок с вопросами на законное место */}
      <FAQ /> 
      
      <ContactForm />
      <Contacts />
      
      {/* Плавающая золотая кнопка чата */}
      <ChatButton />
    </main>
  );
}