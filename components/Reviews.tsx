export default function Reviews() {
    return (
      <section className="w-full py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 uppercase tracking-widest">Отзывы клиентов</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 border border-slate-700 rounded-2xl hover:border-[#c9a227] transition-colors">
                <div className="text-[#c9a227] mb-4">★★★★★</div>
                <p className="italic mb-6">«Очень оперативно провели съемку участка. Все документы подготовили в срок, вопросов со стороны госорганов не возникло.»</p>
                <h4 className="font-bold">Клиент #{i}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }