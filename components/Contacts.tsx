export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-center">Контакты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Информация */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Свяжитесь с нами</h3>
            <p className="text-gray-600">Мы готовы ответить на ваши вопросы и помочь с оформлением документов.</p>
            
            <div className="space-y-4">
              <p><strong>Телефон:</strong> <a href="tel:+998509003337" className="text-[#c9a227] hover:underline">+998 50 900 33 37</a></p>
              <p><strong>Telegram:</strong> <a href="https://t.me/Has_an_od" target="_blank" className="text-[#c9a227] hover:underline">@Has_an_od</a></p>
              <p><strong>Instagram:</strong> <a href="https://instagram.com/newworldcadastre" target="_blank" className="text-[#c9a227] hover:underline">@newworldcadastre</a></p>
              <p><strong>Адрес:</strong> Ферганская область, Алтыарыкский район</p>
            </div>
          </div>

          {/* Карта */}
          <div className="h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48383.35415701889!2d71.428612!3d40.457857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb78d4625f1901%3A0x8e8a609d56221d8b!2z0JDQu9GC0YLRjNGA0YvQutC40LssINCQ0LvRgtGM0YDRi9C10LssINCe0LfQdNCw0YDQvtCy0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1688123456789!5m2!1sru!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}