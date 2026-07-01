export default function Portfolio() {
    return (
      <section id="portfolio" className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-center text-slate-900">
            Завершенные проекты
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Проект 1 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold text-slate-800">Кадастровая съемка ЖК «Новый Город»</h3>
              <p className="text-gray-600 mt-2">Топографическая съемка участка 5 гектар с последующей постановкой на учет.</p>
            </div>
  
            {/* Проект 2 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold text-slate-800">Геодезия промышленного объекта</h3>
              <p className="text-gray-600 mt-2">Разбивка осей для фундамента завода площадью 2000 м².</p>
            </div>
          </div>
        </div>
      </section>
    );
  }