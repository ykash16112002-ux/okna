import React from 'react';

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
    <section className="bg-white pt-10 sm:pt-14 pb-2 sm:pb-3">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading + Larger Red Dynamic Swoosh Arrow */}
        <div className="flex items-center gap-2 mb-6 sm:mb-7">
          <h2 className="text-[28px] sm:text-[34px] xl:text-[38px] font-extrabold text-[#111111] tracking-tight">
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

        {/* Layout: 4 compact text cards on left + significantly taller photo placeholder frame on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-5 items-center">
          
          {/* Left: 4 Cards placed side-by-side in one row (7 cols on lg), responsive height */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 items-stretch">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EDEDED] rounded-2xl p-3 sm:p-3.5 flex flex-col justify-start hover:border-[#E50916]/40 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xs group min-h-[148px] sm:min-h-[145px]"
              >
                {/* Red Outline Icon */}
                <div className="transition-transform group-hover:scale-105 mb-1.5 sm:mb-2">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-[12.5px] sm:text-[13px] text-[#111111] leading-snug mb-1">
                  {card.title}
                </h3>

                {/* Subtitle (fully visible, no clipping) */}
                <p className="text-[11px] sm:text-[11.5px] text-[#666666] leading-snug">
                  {card.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Significantly taller Photo Placeholder Frame (higher than text cards) with 25 Years badge */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 via-gray-100/60 to-gray-200/40 relative group flex flex-col items-center justify-center p-5 sm:p-6 min-h-[220px] sm:h-[275px] shadow-2xs hover:border-[#E50916]/40 transition-colors">
              
              {/* Photo Placeholder icon and caption */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-xs border border-gray-200 flex items-center justify-center text-gray-400 mb-2 sm:mb-2.5 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="font-extrabold text-[14.5px] sm:text-[16px] text-gray-700 tracking-tight">
                  Плашка под фото
                </div>
                <div className="text-[11.5px] sm:text-[12px] text-gray-500 font-medium mt-0.5">
                  Собственное производство окон ПВХ
                </div>
              </div>

              {/* Authentic 25 years badge in bottom-right corner */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 w-15 h-15 sm:w-20 sm:h-20 rounded-full bg-[#E50916] text-white flex flex-col items-center justify-center shadow-lg border-2 border-white/20 select-none pointer-events-none">
                <span className="font-extrabold text-[18px] sm:text-[24px] leading-none tracking-tight">25</span>
                <span className="text-[8.5px] sm:text-[10px] font-bold leading-tight uppercase tracking-wider">лет</span>
                <span className="text-[8.5px] sm:text-[10px] font-bold leading-tight uppercase tracking-wider">опыта</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
