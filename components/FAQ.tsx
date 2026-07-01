"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    { q: "А что, если в кадастре откажут?", a: "Мы проводим предварительный аудит документов. Если есть риск отказа, мы заранее устраняем причины, поэтому вероятность одобрения — 99%." },
    { q: "Как быстро я получу выписку?", a: "В среднем процесс занимает от 3 до 7 рабочих дней, в зависимости от сложности объекта и загруженности госорганов." },
    { q: "Нужно ли мне ехать в офис?", a: "Большую часть документов мы оформляем дистанционно. Визит в офис нужен только для подписания оригиналов, если это требуется по закону." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-widest">Частые вопросы</h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 font-semibold bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between"
              >
                {item.q}
                <span>{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="p-6 text-gray-600 border-t border-gray-100">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
