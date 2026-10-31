import React from 'react';
import { ArrowRightIcon, PhoneIcon, FactoryIcon, ShieldCheckIcon, TruckIcon } from './icons/Icons.tsx';

interface HeroProps {
  onStartQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="bg-white lg:h-[calc(100svh-64px)] lg:max-h-[calc(100svh-64px)] lg:min-h-[580px] flex items-center overflow-hidden relative border-b border-neutral-200">
      
      {/* Wide Container */}
      <div className="max-w-[1780px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 lg:py-4 relative z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 2xl:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle, CTA, Fact Bar */}
          <div className="w-full lg:col-span-5 xl:col-span-5 2xl:col-span-5 flex flex-col justify-center">
            
            {/* Red Kicker */}
            <div className="text-[#E50916] text-[13.5px] sm:text-[15px] font-bold tracking-tight mb-2 sm:mb-2.5">
              Окна от производителя в Калининграде
            </div>

            {/* H1 Heading */}
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
              Свой завод, монтаж по ГОСТ, бесплатный замер
            </p>

            {/* CTA Button + Phone Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-7 lg:mb-8">
              <button
                type="button"
                onClick={onStartQuiz}
                className="bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white px-7 sm:px-9 py-3.5 sm:py-4.5 rounded-xl font-bold text-[15.5px] sm:text-[17.5px] flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-md cursor-pointer group whitespace-nowrap"
              >
                <span>Рассчитать за 1 минуту</span>
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <PhoneIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" />
                </div>
                <div>
                  <a
                    href="tel:84012376868"
                    className="block font-bold text-[16.5px] sm:text-[18.5px] text-[#111111] hover:text-[#E50916] transition-colors leading-tight"
                  >
                    8 (4012) 37-68-68
                  </a>
                  <span className="text-[11.5px] sm:text-[12.5px] text-[#777777] font-medium block mt-0.5">
                    Звоните с 8:00 до 20:00
                  </span>
                </div>
              </div>
            </div>

            {/* Authentic Manufacturer Specifications Bar (No AI 3-box clone) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-5 border-t border-neutral-200 text-[13px] sm:text-[13.5px] text-neutral-800 font-medium">
              <div className="flex items-center gap-2">
                <FactoryIcon className="w-4.5 h-4.5 text-[#E50916] flex-shrink-0" />
                <span>Собственное производство</span>
              </div>
              <span className="hidden sm:inline text-neutral-300 font-bold">·</span>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4.5 h-4.5 text-[#E50916] flex-shrink-0" />
                <span>Монтаж по ГОСТ</span>
              </div>
              <span className="hidden sm:inline text-neutral-300 font-bold">·</span>
              <div className="flex items-center gap-2">
                <TruckIcon className="w-4.5 h-4.5 text-[#E50916] flex-shrink-0" />
                <span>Замер бесплатно</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Architectural Photo Placeholder Frame (No radial dot-grid or gradient soup) */}
          <div className="hidden lg:flex lg:col-span-7 xl:col-span-7 2xl:col-span-7 justify-end items-center w-full">
            <div className="w-full h-[510px] xl:h-[560px] 2xl:h-[620px] rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
              
              {/* Placeholder Center Icon & Text */}
              <div className="flex flex-col items-center justify-center text-center z-10">
                <div className="w-16 h-16 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 mb-3">
                  <svg className="w-8 h-8 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="font-extrabold text-[18px] sm:text-[20px] text-neutral-800 tracking-tight">
                  Плашка под главное фото
                </div>
                <div className="text-[13.5px] text-neutral-500 font-medium mt-1">
                  Фото директора на собственном производстве
                </div>
              </div>

              {/* Red Badge: «Производитель» (top-right corner) */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 bg-[#E50916] text-white px-4 py-2.5 rounded-xl flex items-center gap-2.5 border border-red-600 select-none">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FactoryIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-extrabold text-[13px] leading-tight text-white">
                    Производитель
                  </div>
                  <div className="text-[10.5px] text-white/90 leading-tight font-medium mt-0.5">
                    Собственный завод
                  </div>
                </div>
              </div>

              {/* Director Signature (bottom-right corner) */}
              <div className="absolute bottom-5 right-6 sm:bottom-6 sm:right-8 z-20 select-none text-right">
                <div className="font-script text-[32px] sm:text-[36px] xl:text-[40px] text-neutral-800 leading-none tracking-wide italic">
                  Вячеслав Пыталев
                </div>
                <div className="text-[11px] font-bold text-neutral-600 uppercase tracking-[0.2em] mt-0.5">
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
