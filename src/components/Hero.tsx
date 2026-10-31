import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Factory, Truck } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="bg-white lg:h-[calc(100svh-64px)] lg:max-h-[calc(100svh-64px)] lg:min-h-[560px] flex items-center overflow-hidden relative border-b border-gray-100">
      
      {/* Main Container: 1440px wide, centered */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-6 relative z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, CTA, Badges (6 cols on lg) */}
          <div className="w-full lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Red Kicker */}
            <div className="text-[#E50916] text-[14.5px] sm:text-[16px] font-bold tracking-tight mb-3">
              Окна от производителя в Калининграде
            </div>

            {/* H1 Heading (Larger) */}
            <h1 className="text-[38px] sm:text-[46px] lg:text-[50px] xl:text-[56px] font-extrabold text-[#111111] leading-[1.06] tracking-tight">
              Пластиковые окна <br />
              и остекление
            </h1>

            {/* Handwritten Accent with Red Swoosh (Larger) */}
            <div className="relative inline-block mt-1 sm:mt-2 mb-3.5 sm:mb-5">
              <span className="font-script text-[36px] sm:text-[44px] lg:text-[46px] xl:text-[52px] text-[#111111] font-bold tracking-normal italic leading-none">
                от производителя
              </span>
              <svg
                className="w-56 sm:w-64 h-3.5 text-[#E50916] -mt-1"
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

            {/* Subtitle (Larger) */}
            <p className="text-[17px] sm:text-[18.5px] xl:text-[20px] text-[#333333] font-medium mb-7 lg:mb-8 leading-relaxed">
              Свой завод, монтаж по ГОСТ, замер бесплатно
            </p>

            {/* CTA Button + Phone Row (Larger) */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 mb-7 lg:mb-9">
              <button
                type="button"
                onClick={onStartQuiz}
                className="bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white px-8 sm:px-9 py-4 sm:py-4.5 rounded-xl font-bold text-[16.5px] sm:text-[17.5px] flex items-center gap-3 transition-all shadow-md hover:shadow-xl cursor-pointer group whitespace-nowrap"
              >
                <span>Рассчитать за 1 минуту</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <a
                    href="tel:84012376868"
                    className="block font-bold text-[17.5px] sm:text-[18.5px] text-[#111111] hover:text-[#E50916] transition-colors leading-tight"
                  >
                    8 (4012) 37-68-68
                  </a>
                  <span className="text-[12px] sm:text-[12.5px] text-[#777777] font-medium block mt-0.5">
                    Звоните с 8.00 до 20.00
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Key Advantages with Icons (Larger) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 max-w-[540px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div className="text-[12.5px] sm:text-[13.5px] font-semibold text-[#222222] leading-tight">
                  Собственное <br />производство
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-[12.5px] sm:text-[13.5px] font-semibold text-[#222222] leading-tight">
                  Монтаж <br />по ГОСТ
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-[12.5px] sm:text-[13.5px] font-semibold text-[#222222] leading-tight">
                  Замер <br />бесплатно
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Centered Photo Placeholder Frame (Enlarged and Higher) */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 justify-center items-center w-full">
            <div className="w-full max-w-[620px] h-[480px] xl:h-[530px] rounded-3xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 via-gray-100/70 to-gray-200/50 flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-inner mx-auto">
              
              {/* Subtle grid pattern background */}
              <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

              {/* Placeholder Center Icon & Text */}
              <div className="flex flex-col items-center justify-center text-center z-10">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-400 mb-4">
                  <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="font-extrabold text-[18px] sm:text-[20px] text-gray-700 tracking-tight">
                  Плашка под главное фото
                </div>
                <div className="text-[13.5px] sm:text-[14.5px] text-gray-500 font-medium mt-1.5">
                  Фото директора на собственном производстве
                </div>
              </div>

              {/* Standalone HTML/CSS Red Badge: «Производитель» */}
              <div className="absolute top-5 right-5 z-20 bg-[#E50916] text-white px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5 border border-red-500/40 select-none">
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

              {/* Standalone HTML/CSS Director Signature */}
              <div className="absolute bottom-5 right-6 z-20 select-none text-right">
                <div className="font-script text-[28px] sm:text-[32px] text-gray-800 leading-none tracking-wide italic">
                  Вячеслав Пыталев
                </div>
                <div className="text-[12px] text-gray-600 font-semibold tracking-wider uppercase mt-0.5">
                  Директор
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
