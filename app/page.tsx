import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Lazy-load below-the-fold sections for a faster first paint
const Calculator = dynamic(() => import('@/components/Calculator'));
const Stats = dynamic(() => import('@/components/Stats'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const ContactForm = dynamic(() => import('@/components/ContactForm'));
const Contacts = dynamic(() => import('@/components/Contacts'));
const ChatButton = dynamic(() => import('@/components/ChatButton'));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative">
      <Navigation />
      
      {/* Hero loads immediately to avoid first-screen flicker */}
      <Hero />
      
      {/* Conversion calculator — primary hook for reels / mobile traffic */}
      <Calculator />

      {/* Remaining blocks load as the user scrolls */}
      <Stats />
      <FAQ /> 
      <ContactForm />
      <Contacts />
      
      <ChatButton />
    </main>
  );
}
