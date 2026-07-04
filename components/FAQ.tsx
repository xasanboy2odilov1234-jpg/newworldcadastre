"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Как быстро я получаю готовые документы?",
    answer: "Сроки зависят от сложности объекта, но в среднем подготовка технического или межевого плана занимает от 3 до 5 рабочих дней после выезда специалиста. Мы сразу озвучиваем точные сроки на этапе аудита и строго фиксируем их в договоре."
  },
  {
    question: "Что делать, если государственный реестр приостановит учет?",
    answer: "Мы несем полную юридическую ответственность за результат. Если регистрирующий орган выносит приостановку по техническим причинам, наши инженеры бесплатно и в кратчайшие сроки вносят корректировки вплоть до успешной постановки на учет."
  },
  {
    question: "Может ли измениться стоимость работ в процессе?",
    answer: "Нет. После первичного бесплатного изучения ваших документов мы рассчитываем точную смету. Сумма фиксируется в официальном договоре и не меняется. У нас нет скрытых платежей и внезапных доплат."
  },
  {
    question: "Обязательно ли мое личное присутствие при замерах?",
    answer: "Ваше присутствие желательно, но не обязательно. Главное — обеспечить инженерам доступ на территорию объекта. Все согласования мы можем провести онлайн, а оригиналы документов доставить курьером."
  },
  {
    question: "Какое оборудование вы используете для съемки?",
    answer: "Мы применяем высокоточные роботизированные тахеометры, GNSS-приемники последнего поколения и промышленные дроны для аэрофотосъемки. Всё оборудование проходит регулярную государственную поверку, что исключает погрешности."
  },
  {
    question: "Работаете ли вы с застройщиками и промышленными объектами?",
    answer: "Да, значительную долю нашего портфолио составляют B2B-проекты. Мы осуществляем полное геодезическое сопровождение: от создания геодезической разбивочной основы до финальной исполнительной съемки здания."
  },
  {
    question: "Можно ли исправить кадастровую ошибку, допущенную другим инженером?",
    answer: "Да, мы регулярно решаем такие задачи. Наши специалисты проводят контрольную геодезическую съемку, готовят юридическое обоснование и формируют новый пакет документов для оперативного исправления реестровой ошибки."
  },
  {
    question: "Зачем нужна топографическая съемка перед покупкой участка?",
    answer: "Она позволяет выявить скрытые юридические и технические проблемы: наложение границ соседей, прохождение скрытых коммуникаций (трубы, кабели) или нахождение участка в природоохранной зоне. Это защищает вас от рискованных инвестиций."
  },
  {
    question: "Как происходит оплата ваших услуг?",
    answer: "Работаем официально. Оплата обычно делится на две части: авансовый платеж перед началом полевых работ и окончательный расчет только после того, как вы получаете на руки готовый и проверенный пакет документов."
  },
  {
    question: "С чего начать, если я не знаю, какие именно документы мне нужны?",
    answer: "Просто оставьте заявку на сайте или позвоните нам. Наш инженер бесплатно проконсультирует вас, изучит имеющиеся бумаги и составит понятный пошаговый план действий конкретно для вашей ситуации."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight uppercase">
            Частые <span style={{ color: '#D4AF37' }}>вопросы</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Мы ценим ваше время, поэтому собрали ответы на самые популярные вопросы о нашей работе, гарантиях и сроках.
          </p>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {displayedFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-100 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-lg text-blue-900 pr-8">
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 text-blue-900"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Обновленная Кнопка "Показать все / Скрыть" */}
        <motion.div 
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => {
              setShowAll(!showAll);
              if (showAll) setOpenIndex(null); // Закрываем открытый вопрос при сворачивании списка
            }}
            className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-blue-900 text-blue-900 rounded-full font-bold uppercase tracking-wider hover:bg-blue-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            {showAll ? "Скрыть вопросы" : "Показать все вопросы"}
            <motion.svg 
              animate={{ rotate: showAll ? 180 : 0 }}
              className="w-5 h-5 transition-transform duration-300" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}