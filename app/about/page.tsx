import Navigation from "@/components/Navigation";
import Team from "@/components/Team";
import Certificates from "@/components/Certificates";
import Contacts from "@/components/Contacts";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 pt-24">
      <Navigation />
      
      {/* 1. Блок с сотрудниками (тот самый Team.tsx, который мы создали) */}
      <Team />
      
      {/* 2. Лицензии и сертификаты */}
      <Certificates />
      
      {/* Подвал */}
      <Contacts />
    </main>
  );
}