import React from 'react';
import { APP_IMAGES } from '../constants/images.ts';

export const WhyUsSection: React.FC = () => {
  const cards = [
    {
      title: 'Собственное производство',
      sub: 'Полный цикл контроля качества',
      icon: (
        <svg className="w-11 h-11 text-[#E50916] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M2 20h20M4 20V9l6 4V5l6 4v11M18 11l4 2v7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 16h2M13 16h2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Свои монтажники',
      sub: 'Опытные бригады с опытом',
      icon: (
        <svg className="w-11 h-11 text-[#E50916] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="9" cy="7" r="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 19v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 17v-1.5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3V17" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Сервис и регулировка',
      sub: 'Поддержка после установки',
      icon: (
        <svg className="w-11 h-11 text-[#E50916] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Контроль на каждом этапе',
      sub: 'От замера до монтажа',
      icon: (
        <svg className="w-11 h-11 text-[#E50916] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white pt-10 sm:pt-14 pb-4 sm:pb-6">
      <div className="max-w-[1780px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* Section Heading + Larger Red Dynamic Swoosh Arrow */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <h2 className="text-[28px] sm:text-[36px] xl:text-[40px] font-extrabold text-[#111111] tracking-tight">
            Почему выбирают нас
          </h2>
          <svg
            className="w-14 sm:w-16 h-10 sm:h-11 text-[#E50916] ml-2 -mb-2 flex-shrink-0"
            viewBox="0 0 54 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 22C16 31 34 33 46 16C49 12 51 8 52 4M46 16L38 18M46 16L48 24"
              stroke="currentColor"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Layout: 4 compact text cards on left + significantly taller and wider photo frame on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Left: 4 Cards placed side-by-side in one row (7 cols on lg), responsive height */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EDEDED] rounded-3xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#E50916] transition-colors shadow-xs group min-h-[170px] sm:min-h-[190px]"
              >
                {/* Red Outline Icon */}
                <div className="mb-2">
                  {card.icon}
                </div>

                <div>
                  {/* Title */}
                  <h3 className="font-extrabold text-[13.5px] sm:text-[14.5px] text-[#111111] leading-snug mb-1">
                    {card.title}
                  </h3>

                  {/* Subtitle (fully visible, no clipping) */}
                  <p className="text-[11.5px] sm:text-[12.5px] text-[#666666] leading-snug">
                    {card.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Enlarged Photo Frame (Шире сверху и снизу, без анимации приближения) with much bigger 25 Years badge */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-3xl border border-neutral-200 bg-neutral-900 relative group overflow-hidden min-h-[300px] sm:h-[350px] xl:h-[390px] shadow-md">
              <img
                src={APP_IMAGES.whyUsProduction}
                alt="Собственное производство и сборка окон ПВХ"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

              {/* Caption in bottom-left */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 text-white">
                <div className="text-[16px] sm:text-[18px] xl:text-[20px] font-black drop-shadow-md">
                  Собственный цех сборки
                </div>
                <div className="text-[12px] sm:text-[13.5px] text-neutral-200 font-medium drop-shadow-xs mt-0.5">
                  Контроль качества каждого изделия
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
