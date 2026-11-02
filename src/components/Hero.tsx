import React from 'react';
import { ArrowRightIcon, PhoneIcon, FactoryIcon, ShieldCheckIcon, TruckIcon, AwardMedalIcon } from './icons/Icons.tsx';
import { APP_IMAGES } from '../constants/images.ts';

interface HeroProps {
  onStartQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="bg-white lg:min-h-[calc(100svh-64px)] flex items-center overflow-hidden relative border-b border-neutral-200 py-4 sm:py-6 lg:py-3">
      
      {/* Wide Container */}
      <div className="max-w-[1780px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6 lg:py-4 relative z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 2xl:gap-12 items-stretch">
          
          {/* Left Column: Heading, Subtitle, CTA, Fact Bar */}
          <div className="w-full lg:col-span-6 xl:col-span-6 2xl:col-span-6 flex flex-col justify-between py-1">
            
            {/* Top Typography Group */}
            <div>
              {/* Red Kicker */}
              <div className="text-[#E50916] text-[17px] sm:text-[19px] xl:text-[22px] 2xl:text-[24px] font-bold tracking-normal mb-2.5 sm:mb-3">
                Окна от производителя в Калининграде
              </div>

              {/* H1 Heading - softened font weight as requested */}
              <h1 className="text-[42px] sm:text-[54px] lg:text-[58px] xl:text-[70px] 2xl:text-[80px] font-bold text-[#111111] leading-[1.04] tracking-tight">
                Пластиковые окна <br />
                и остекление
              </h1>

              {/* Handwritten Accent with Red Swoosh - tuned to be smaller and proportional */}
              <div className="relative inline-block mt-2 sm:mt-2.5 mb-3.5 sm:mb-4 transform -rotate-[3.5deg] origin-bottom-left">
                <span className="font-script text-[32px] sm:text-[40px] lg:text-[44px] xl:text-[52px] 2xl:text-[58px] text-[#111111] font-normal tracking-wide italic leading-none whitespace-nowrap">
                  от производителя
                </span>
                <svg
                  className="w-48 sm:w-60 lg:w-68 xl:w-76 2xl:w-84 h-4 sm:h-5 text-[#E50916] -mt-0.5 sm:-mt-1"
                  viewBox="0 0 240 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C70 1.5 175 1.5 238 11.5"
                    stroke="currentColor"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Subtitle */}
              <p className="text-[18px] sm:text-[21px] xl:text-[23px] 2xl:text-[25px] text-[#444444] font-normal leading-relaxed">
                Свой завод, монтаж по ГОСТ, замер бесплатно
              </p>
            </div>

            {/* CTA Button + Phone Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-7 my-6 lg:my-8">
              <button
                type="button"
                onClick={onStartQuiz}
                className="group bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white px-9 sm:px-12 py-4.5 sm:py-5.5 rounded-2xl font-bold text-[18px] sm:text-[20px] 2xl:text-[22px] flex items-center justify-center gap-3.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Рассчитать за 1 минуту</span>
                <ArrowRightIcon className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-red-50 flex items-center justify-center text-[#E50916] flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current" />
                </div>
                <div>
                  <a
                    href="tel:84012376868"
                    className="block font-medium text-[18px] sm:text-[20px] xl:text-[22px] text-[#111111] hover:text-[#E50916] transition-colors leading-tight"
                  >
                    8 (4012) 37-68-68
                  </a>
                  <span className="text-[12.5px] sm:text-[13.5px] text-[#777777] font-normal block mt-0.5">
                    Звоните с 8:00 до 20:00
                  </span>
                </div>
              </div>
            </div>

            {/* Manufacturer Specifications Bar matching screenshot with larger icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3 pt-6 border-t border-neutral-200">
              <div className="flex items-center gap-3.5">
                <FactoryIcon className="w-12 h-12 sm:w-14 sm:h-14 xl:w-15 xl:h-15 flex-shrink-0" />
                <div className="font-normal text-[14.5px] sm:text-[15.5px] xl:text-[16.5px] text-[#111111] leading-snug">
                  Собственное <br />производство
                </div>
              </div>

              <div className="flex items-center justify-start sm:justify-center gap-3.5">
                <ShieldCheckIcon className="w-12 h-12 sm:w-14 sm:h-14 xl:w-15 xl:h-15 flex-shrink-0" />
                <div className="font-normal text-[14.5px] sm:text-[15.5px] xl:text-[16.5px] text-[#111111] leading-snug">
                  Монтаж <br />по ГОСТ
                </div>
              </div>

              <div className="flex items-center justify-start sm:justify-end gap-3.5">
                <TruckIcon className="w-13 h-12 sm:w-15 sm:h-14 xl:w-16 xl:h-15 flex-shrink-0" />
                <div className="font-normal text-[14.5px] sm:text-[15.5px] xl:text-[16.5px] text-[#111111] leading-snug">
                  Замер <br />бесплатно
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Photo (Director on factory floor) matching screenshot */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 2xl:col-span-6 justify-end items-center w-full">
            <div className="w-full h-full min-h-[540px] xl:min-h-[620px] 2xl:min-h-[680px] rounded-3xl bg-neutral-100 relative overflow-hidden shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] border border-neutral-200/70">
              {/* Photo */}
              <img
                src={APP_IMAGES.heroDirector}
                alt="Вячеслав Пыталев — директор на собственном производстве окон Лидер"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: '30% 45%',
                }}
                loading="eager"
              />

              {/* Subtle dark gradient overlay restricted to bottom right for signature contrast */}
              <div className="absolute bottom-0 right-0 w-3/5 h-44 bg-gradient-to-tl from-black/85 via-black/25 to-transparent pointer-events-none z-10" />

              {/* Red Badge: «Производитель» with AwardMedalIcon */}
              <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20 bg-[#E50916] text-white min-w-[205px] sm:min-w-[225px] px-4 sm:px-4.5 py-2.5 sm:py-3 rounded-2xl flex items-center gap-3 border border-red-400 shadow-xl select-none">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <AwardMedalIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-[15px] sm:text-[16px] leading-tight text-white">
                    Производитель
                  </div>
                  <div className="font-light text-[11.5px] sm:text-[12px] text-white/90 leading-snug mt-0.5">
                    Собственный завод <br />в Калининграде
                  </div>
                </div>
              </div>

              {/* Director Signature & Name: Вячеслав Пыталев / Директор as in screenshot */}
              <div className="absolute bottom-4 right-5 sm:bottom-5 sm:right-7 z-20 select-none text-right">
                <div className="transform -rotate-[3.5deg] origin-bottom-right inline-block">
                  <div className="font-script text-[34px] sm:text-[40px] xl:text-[46px] text-white leading-none tracking-wide italic drop-shadow-md">
                    Вячеслав Пыталев
                  </div>
                </div>
                <div className="rotate-0 text-[12.5px] sm:text-[13.5px] font-normal text-white/90 tracking-wide mt-0.5 drop-shadow-sm">
                  Директор
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile View Hero Photo */}
        <div className="lg:hidden w-full pb-6 pt-3">
          <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-neutral-200 shadow-lg">
            <img
              src={APP_IMAGES.heroDirector}
              alt="Вячеслав Пыталев — директор на производстве"
              className="w-full h-full object-cover"
              style={{ objectPosition: '28% 40%' }}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            
            {/* Mobile Red Badge: на углу, не капсом, нежирный */}
            <div className="absolute top-2.5 right-2.5 z-10 bg-[#E50916] text-white px-3.5 py-2 rounded-xl flex items-center gap-2.5 text-[12px] shadow-md border border-red-400">
              <AwardMedalIcon className="w-5 h-5 text-white" />
              <div>
                <div className="font-normal text-white leading-tight">Производитель</div>
                <div className="font-light text-[10px] text-white/85 leading-tight">собственный завод <br />в Калининграде</div>
              </div>
            </div>

            <div className="absolute bottom-4 left-5 right-5 z-10 flex items-end justify-between text-white">
              <div>
                <div className="font-medium text-[15px] leading-tight">Вячеслав Пыталев</div>
                <div className="text-[10.5px] text-neutral-300 font-normal">директор производства</div>
              </div>
              <div className="transform -rotate-[3.5deg] origin-bottom-right">
                <div className="font-script text-[32px] text-white italic leading-none drop-shadow-md">
                  Пыталев
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
