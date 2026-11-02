import React, { useState } from 'react';
import { ArrowRight, Star, X } from 'lucide-react';

export interface PortfolioItem {
  id: number;
  title: string;
  spec: string;
  details: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Квартира, ул. Гайдара',
    spec: 'VEKA Softline 82',
    details: 'Замена окон в 3-комнатной квартире. 7-камерный профиль VEKA Softline 82, 2-камерный энергосберегающий стеклопакет, фурнитура Siegenia.',
  },
  {
    id: 2,
    title: 'Балкон, ул. Лесная',
    spec: 'Остекление + утепление',
    details: 'Теплое остекление лоджии от пола до потолка с утеплением парапета и пола, вывод освещения и отделка под ключ.',
  },
  {
    id: 3,
    title: 'Коттедж, пос. Прибрежный',
    spec: 'WHS 72',
    details: 'Остекление коттеджа 220 м²: 14 окон с внешней ламинацией «Антрацит» и мультифункциональными стеклопакетами Solar.',
  },
  {
    id: 4,
    title: 'Веранда, п. А. Кутузова',
    spec: 'Остекление',
    details: 'Панорамная веранда с усиленным статическим соединителем для защиты от балтийских ветров.',
  },
];

interface PortfolioAndReviewsProps {
  onOpenConsultation: () => void;
}

export const PortfolioAndReviews: React.FC<PortfolioAndReviewsProps> = ({
  onOpenConsultation,
}) => {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="bg-white py-14 sm:py-20 border-t border-[#F0F0F0]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Unified Row: Left = Наши работы (60%), Right = Отзывы (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* Left: Наши работы (7 cols on desktop) */}
          <div className="lg:col-span-7">
            {/* Header with Title and "Все объекты →" */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#111111] tracking-tight">
                Наши работы
              </h2>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#E50916] hover:text-[#C50713] transition-colors cursor-pointer"
              >
                <span>Все объекты</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4 Cards Grid in 1 Row with enlarged clean photo placeholder blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {portfolioData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="bg-white border border-[#EDEDED] rounded-2xl overflow-hidden hover:border-[#E50916]/40 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between group min-h-[210px] sm:min-h-[230px]"
                >
                  {/* Photo Placeholder Card (Плашка для фото - увеличена) */}
                  <div className="aspect-[4/3.3] sm:aspect-[4/3.2] w-full bg-gradient-to-b from-[#F6F7F9] to-[#E9ECEF] border-b border-[#E2E6EA] flex flex-col items-center justify-center text-[#8C95A5] group-hover:from-[#EEF2F6] transition-colors p-4">
                    <div className="w-10 h-10 rounded-xl bg-white/90 shadow-xs border border-white flex items-center justify-center mb-1.5">
                      <svg className="w-5 h-5 text-[#9AA3B2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <span className="text-[10.5px] font-semibold text-[#7D8798]">Плашка под фото</span>
                  </div>

                  {/* Footer */}
                  <div className="p-3 sm:p-3.5 bg-white flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-[12px] sm:text-[13.5px] text-[#111111] leading-tight min-h-[28px] sm:min-h-[32px] flex items-center mb-1">
                      {item.title}
                    </h3>
                    <div className="text-[10.5px] sm:text-[11.5px] text-[#777777] font-medium leading-tight">
                      {item.spec}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Отзывы (5 cols on desktop) */}
          <div id="reviews" className="lg:col-span-5">
            {/* Header with Title and "Все отзывы →" */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#111111] tracking-tight">
                Отзывы
              </h2>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#E50916] hover:text-[#C50713] transition-colors cursor-pointer"
              >
                <span>Все отзывы</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 2 Review Cards in 1 Row (enlarged) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Card 1: Яндекс Карты */}
              <div className="bg-white border border-[#EDEDED] rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between hover:border-gray-300 transition-all shadow-xs min-h-[210px] sm:min-h-[230px]">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#E50916] text-white font-extrabold text-[15px] flex items-center justify-center flex-shrink-0">
                      Я
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-[15.5px] text-[#111111]">5,0</span>
                      <div className="flex items-center text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-[12.5px] sm:text-[13px] text-[#333333] leading-relaxed italic">
                    «Отличная компания! Все сделали быстро и аккуратно. Рекомендую!»
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAEAEA]">
                  <a
                    href="https://yandex.ru/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11.5px] font-bold text-[#0066FF] hover:underline"
                  >
                    Яндекс Карты
                  </a>
                </div>
              </div>

              {/* Card 2: 2ГИС */}
              <div className="bg-white border border-[#EDEDED] rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between hover:border-gray-300 transition-all shadow-xs min-h-[210px] sm:min-h-[230px]">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#27AE60] text-white font-extrabold text-[15px] flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-[15.5px] text-[#111111]">5,0</span>
                      <div className="flex items-center text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-[12.5px] sm:text-[13px] text-[#333333] leading-relaxed italic">
                    «Понравилось качество работы и отношение к клиенту. Спасибо!»
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAEAEA]">
                  <a
                    href="https://2gis.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11.5px] font-bold text-[#27AE60] hover:underline"
                  >
                    2ГИС
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Item Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative bg-gradient-to-b from-[#F2F4F7] to-[#E5E7EB] h-52 flex flex-col items-center justify-center border-b border-gray-200">
              <svg className="w-12 h-12 text-[#9CA3AF] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-[12px] font-semibold text-[#808A9B]">Плашка объекта</span>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="text-[12px] font-bold text-[#E50916] uppercase tracking-wider mb-1">
                {activeItem.spec}
              </div>
              <h3 className="text-[20px] font-bold text-[#111111] mb-3">
                {activeItem.title}
              </h3>
              <p className="text-[14px] text-[#555555] leading-relaxed mb-6">
                {activeItem.details}
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveItem(null);
                  onOpenConsultation();
                }}
                className="w-full bg-[#E50916] hover:bg-[#D00814] text-white py-3 rounded-lg font-bold text-[14px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Рассчитать подобный объект</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
