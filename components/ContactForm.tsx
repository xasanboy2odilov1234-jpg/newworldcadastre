"use client";

export default function ContactForm() {
  return (
    <section id="ask" className="py-24 bg-gray-50">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Есть вопросы?</h2>
        <p className="text-gray-600 mb-8">Напишите нам, и мы ответим в течение 15 минут в Telegram.</p>
        
        {/* Здесь будет форма. Для примера - кнопка перехода в Telegram */}
        <a 
          href="https://t.me/Has_an_od" 
          target="_blank"
          className="inline-block bg-[#0088cc] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0077b5] transition-all"
        >
          Написать в Telegram
        </a>
      </div>
    </section>
  );
}