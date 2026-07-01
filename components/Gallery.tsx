export default function Gallery() {
    return (
      <section id="gallery" className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-center text-slate-900">
            Процесс работы
          </h2>
  
          {/* Сетка для фотографий */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Фото 1: Полевые работы */}
            <div className="h-64 bg-gray-100 rounded-xl flex flex-col items-center justify-center border border-gray-200 hover:bg-gray-200 transition-colors">
              <span className="text-gray-500 font-medium mb-2">Фото 1</span>
              <span className="text-sm text-gray-400">Топографическая съемка</span>
            </div>
  
            {/* Фото 2: Аэросъемка */}
            <div className="h-64 bg-gray-100 rounded-xl flex flex-col items-center justify-center border border-gray-200 hover:bg-gray-200 transition-colors">
              <span className="text-gray-500 font-medium mb-2">Фото 2</span>
              <span className="text-sm text-gray-400">Съемка с дрона</span>
            </div>
  
            {/* Фото 3: Офис */}
            <div className="h-64 bg-gray-100 rounded-xl flex flex-col items-center justify-center border border-gray-200 hover:bg-gray-200 transition-colors">
              <span className="text-gray-500 font-medium mb-2">Фото 3</span>
              <span className="text-sm text-gray-400">Камеральная обработка</span>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  