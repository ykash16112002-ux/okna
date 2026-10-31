import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Factory, Truck } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="bg-white lg:h-[calc(100svh-64px)] lg:max-h-[calc(100svh-64px)] lg:min-h-[580px] flex items-center overflow-hidden relative border-b border-gray-100">
      
      {/* Wide Container: Minimal side whitespace matching reference */}
      <div className="max-w-[1780px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-4 relative z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 2xl:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle, CTA, Badges (5 cols on lg for a compact, bold text block) */}
          <div className="w-full lg:col-span-5 xl:col-span-5 2xl:col-span-5 flex flex-col justify-center">
            
            {/* Red Kicker */}
            <div className="text-[#E50916] text-[13.5px] sm:text-[15px] xl:text-[16px] font-bold tracking-tight mb-2 sm:mb-2.5">
              Окна от производителя в Калининграде
            </div>

            {/* H1 Heading (Responsive to avoid collision) */}
            <h1 className="text-[32px] sm:text-[44px] lg:text-[48px] xl:text-[54px] 2xl:text-[60px] font-extrabold text-[#111111] leading-[1.08] sm:leading-[1.05] tracking-tight">
              Пластиковые окна <br />
              и остекление
            </h1>

            {/* Handwritten Accent with Red Swoosh */}
            <div className="relative inline-block mt-1 sm:mt-1.5 mb-3 sm:mb-4.5">
              <span className="font-script text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[52px] 2xl:text-[58px] text-[#111111] font-bold tracking-normal italic leading-none">
                от производителя
              </span>
              <svg
                className="w-48 sm:w-64 xl:w-72 h-3.5 text-[#E50916] -mt-1"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7C50 1.5 140 1 198 9.5"
                  stroke="currentColor"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Subtitle */}
            <p className="text-[15px] sm:text-[18px] xl:text-[20px] text-[#333333] font-medium mb-6 lg:mb-7 leading-relaxed">
              Свой завод, монтаж по ГОСТ, замер бесплатно
            </p>

            {/* CTA Button + Phone Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-7 lg:mb-8">
              <button
                type="button"
                onClick={onStartQuiz}
                className="bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white px-7 sm:px-9 py-3.5 sm:py-4.5 rounded-xl font-bold text-[15.5px] sm:text-[17.5px] flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-xl cursor-pointer group whitespace-nowrap"
              >
                <span>Рассчитать за 1 минуту</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" />
                </div>
                <div>
                  <a
                    href="tel:84012376868"
                    className="block font-bold text-[16.5px] sm:text-[18.5px] text-[#111111] hover:text-[#E50916] transition-colors leading-tight"
                  >
                    8 (4012) 37-68-68
                  </a>
                  <span className="text-[11.5px] sm:text-[12.5px] text-[#777777] font-medium block mt-0.5">
                    Звоните с 8.00 до 20.00
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Key Advantages with Icons (Vertical on mobile, 3-column on tablet/desktop to eliminate text collisions) */}
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-4 pt-5 border-t border-gray-100 max-w-[560px]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <Factory className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[13px] sm:text-[13.5px] font-semibold text-[#222222] leading-tight">
                  Собственное производство
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[13px] sm:text-[13.5px] font-semibold text-[#222222] leading-tight">
                  Монтаж по ГОСТ
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <Truck className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="text-[13px] sm:text-[13.5px] font-semibold text-[#222222] leading-tight">
                  Замер бесплатно
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Much Larger, Stretched Photo Placeholder Frame (7 cols on lg, filling space to right edge) */}
          <div className="hidden lg:flex lg:col-span-7 xl:col-span-7 2xl:col-span-7 justify-end items-center w-full">
            <div className="w-full h-[510px] xl:h-[560px] 2xl:h-[620px] rounded-[28px] border-2 border-dashed border-[#CCD2DB] bg-gradient-to-br from-[#FAFAFC] via-[#F3F5F8] to-[#E9EDF2] flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-inner">
              
              {/* Subtle dot pattern background matching reference */}
              <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-45 pointer-events-none" />

              {/* Placeholder Center Icon & Text */}
              <div className="flex flex-col items-center justify-center text-center z-10">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-gray-200/80 flex items-center justify-center text-gray-400 mb-4 transition-transform hover:scale-105">
                  <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="font-extrabold text-[19px] sm:text-[21px] text-[#2D3748] tracking-tight">
                  Плашка под главное фото
                </div>
                <div className="text-[14px] sm:text-[15px] text-[#718096] font-medium mt-1.5">
                  Фото директора на собственном производстве
                </div>
              </div>

              {/* Standalone HTML/CSS Red Badge: «Производитель» (top-right corner) */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 bg-[#E50916] text-white px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5 border border-red-500/40 select-none">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold text-[13px] leading-tight tracking-tight text-white">
                    Производитель
                  </div>
                  <div className="text-[10.5px] text-white/90 leading-tight font-medium mt-0.5">
                    Собственный завод
                  </div>
                </div>
              </div>

              {/* Standalone HTML/CSS Director Signature matching reference (bottom-right corner) */}
              <div className="absolute bottom-5 right-6 sm:bottom-6 sm:right-8 z-20 select-none text-right">
                <div className="font-script text-[32px] sm:text-[36px] xl:text-[40px] text-[#1E293B] leading-none tracking-wide italic">
                  Вячеслав Пыталев
                </div>
                <div className="text-[11px] sm:text-[12px] font-bold text-[#475569] uppercase tracking-[0.2em] mt-0.5">
                  ДИРЕКТОР
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile View Placeholder */}
        <div className="lg:hidden w-full pb-6 pt-4">
          <div className="relative w-full rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-gray-200 flex items-center justify-center text-gray-400 mb-2">
              <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div className="font-extrabold text-[14px] text-gray-700">
              Плашка под главное фото
            </div>
            <div className="text-[11.5px] text-gray-500 mt-0.5">
              Вячеслав Пыталев • Директор на производстве
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
