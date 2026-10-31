import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface ReviewsSectionProps {
  onOpenAllReviews: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenAllReviews }) => {
  return (
    <section id="reviews" className="bg-white py-12 sm:py-16 border-t border-[#F0F0F0]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header with Title and "Все отзывы →" */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#111111] tracking-tight">
            Отзывы
          </h2>

          <button
            type="button"
            onClick={onOpenAllReviews}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#E50916] hover:text-[#C50713] transition-colors cursor-pointer"
          >
            <span>Все отзывы</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2 Review Cards: Yandex Maps & 2GIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Card 1: Яндекс Карты */}
          <div className="bg-[#FAFAFA] border border-[#ECECEC] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-gray-300 transition-all shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* Red Yandex Icon "Я" */}
                <div className="w-9 h-9 rounded-full bg-[#E50916] text-white font-extrabold text-[17px] flex items-center justify-center flex-shrink-0 shadow-xs">
                  Я
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-[16px] text-[#111111]">5,0</span>
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[13px] sm:text-[13.5px] text-[#333333] leading-relaxed italic">
                «Отличная компания! Все сделали быстро и аккуратно. Рекомендую!»
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EAEAEA]">
              <a
                href="https://yandex.ru/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-semibold text-[#0066FF] hover:underline"
              >
                Яндекс Карты
              </a>
            </div>
          </div>

          {/* Card 2: 2ГИС */}
          <div className="bg-[#FAFAFA] border border-[#ECECEC] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-gray-300 transition-all shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* Green 2GIS Icon "2" */}
                <div className="w-9 h-9 rounded-full bg-[#27AE60] text-white font-extrabold text-[17px] flex items-center justify-center flex-shrink-0 shadow-xs">
                  2
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-[16px] text-[#111111]">5,0</span>
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[13px] sm:text-[13.5px] text-[#333333] leading-relaxed italic">
                «Понравилось качество работы и отношение к клиенту. Спасибо!»
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EAEAEA]">
              <a
                href="https://2gis.ru/kaliningrad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-semibold text-[#0066FF] hover:underline"
              >
                2ГИС
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
