import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import CompanyInfo from "@/components/CompanyInfo";

// Ленивая загрузка для тяжелых блоков ниже первого экрана
const Team = dynamic(() => import("@/components/Team"));
const Certificates = dynamic(() => import("@/components/Certificates"));
const Contacts = dynamic(() => import("@/components/Contacts"));

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 pt-24">
      <Navigation />
      
      {/* Верхний блок оставляем обычной загрузкой, чтобы он появился мгновенно и без рывков */}
      <CompanyInfo />
      
      {/* 1. Блок с сотрудниками (грузится в фоне) */}
      <Team />
      
      {/* 2. Лицензии и сертификаты (грузится в фоне) */}
      <Certificates />
      
      {/* Подвал (грузится в фоне) */}
      <Contacts />
    </main>
  );
}