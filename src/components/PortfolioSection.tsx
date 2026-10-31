import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  spec: string;
  details: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    image: '/assets/images/port-1.png',
    title: 'Квартира, ул. Гайдара',
    spec: 'VEKA Softline 82',
    details: 'Замена остекления в 3-комнатной квартире с энергосберегающими 2-камерными стеклопакетами 44 мм и немецкой фурнитурой Siegenia.',
  },
  {
    id: 2,
    image: '/assets/images/port-2.png',
    title: 'Балкон, ул. Лесная',
    spec: 'Остекление + утепление',
    details: 'Теплое панорамное остекление лоджии с отделкой и утеплением пеноплексом. Встроенный контур гидро- и пароизоляции по ГОСТ.',
  },
  {
    id: 3,
    image: '/assets/images/port-3.png',
    title: 'Коттедж, пос. Прибрежный',
    spec: 'WHS 72',
    details: 'Остекление двухэтажного коттеджа 240 м²: 16 оконных блоков с внешней ламинацией «Темный дуб» и мультифункциональным напылением.',
  },
  {
    id: 4,
    image: '/assets/images/port-4.png',
    title: 'Веранда, п. А. Кутузова',
    spec: 'Остекление',
    details: 'Светопрозрачная конструкция веранды с усиленным армированием для защиты от балтийских ветровых нагрузок.',
  },
];

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="bg-white py-12 sm:py-16 border-t border-[#F0F0F0]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header with Title and "Все объекты →" */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#111111] tracking-tight">
            Наши работы
          </h2>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#E50916] hover:text-[#C50713] transition-colors cursor-pointer"
          >
            <span>Все объекты</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-[#FAFAFA] border border-[#ECECEC] rounded-2xl overflow-hidden hover:border-[#E50916]/50 transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Card Footer */}
              <div className="p-3.5 sm:p-4">
                <h3 className="font-bold text-[13px] sm:text-[14px] text-[#111111] leading-tight mb-1">
                  {item.title}
                </h3>
                <div className="text-[11.5px] sm:text-[12px] font-medium text-[#777777]">
                  {item.spec}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Item Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-64 object-cover"
              />
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
