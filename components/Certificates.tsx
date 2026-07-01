export default function Certificates() {
    return (
      <section id="certificates" className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-center text-slate-900">
            Лицензии и Сертификаты
          </h2>
  
          {/* Сетка для карточек (на телефонах 1 в ряд, на ПК - 3 в ряд) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Сертификат 1 */}
            <div className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow rounded-xl flex flex-col items-center text-center border border-gray-100">
              <div className="w-full h-72 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Фото лицензии 1</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-800">Государственная лицензия</h3>
              <p className="text-sm text-gray-500 mt-2">На право проведения кадастровых и геодезических работ</p>
            </div>
  
            {/* Сертификат 2 */}
            <div className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow rounded-xl flex flex-col items-center text-center border border-gray-100">
              <div className="w-full h-72 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Фото лицензии 2</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-800">Сертификат соответствия</h3>
              <p className="text-sm text-gray-500 mt-2">Международный стандарт качества оказываемых услуг</p>
            </div>
  
            {/* Сертификат 3 */}
            <div className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow rounded-xl flex flex-col items-center text-center border border-gray-100">
              <div className="w-full h-72 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Фото лицензии 3</span>
              </div>
              <h3 className="font-semibold text-lg text-slate-800">Аттестат инженера</h3>
              <p className="text-sm text-gray-500 mt-2">Квалификационный аттестат главного кадастрового инженера</p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }