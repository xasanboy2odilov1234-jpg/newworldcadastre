export default function Stats() {
    return (
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Лет на рынке", value: "10+" },
            { label: "Успешных проектов", value: "850+" },
            { label: "Клиентов в месяц", value: "50+" },
            { label: "Гарантия результата", value: "100%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-[#c9a227] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }