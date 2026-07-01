import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Certificates from "@/components/Certificates";
import Portfolio from "@/components/Portfolio";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Certificates />
      <Portfolio />
      <Gallery />
      <Reviews />
      <FAQ />
      <ContactForm />
      <Contacts />
    </main>
  );
}