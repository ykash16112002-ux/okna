import React from 'react';

export const StagesSection: React.FC = () => {
  const stages = [
    { num: 1, title: 'Расчёт', desc: 'Консультация, подбор решения' },
    { num: 2, title: 'Замер', desc: 'Бесплатный выезд специалиста' },
    { num: 3, title: 'Договор', desc: 'Фиксация условий' },
    { num: 4, title: 'Производство', desc: 'Изготовление конструкций' },
    { num: 5, title: 'Монтаж', desc: 'Профессиональная установка' },
    { num: 6, title: 'Гарантия', desc: 'Сервис и поддержка' },
  ];

  return (
    <section className="bg-white pt-2 sm:pt-4 pb-12 sm:pb-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading with Casual Wavy Red Underline under "Этапы" */}
        <div className="mb-8 sm:mb-10">
          <div className="relative inline-block">
            <h2 className="text-[28px] sm:text-[34px] xl:text-[38px] font-extrabold text-[#111111] tracking-tight">
              Этапы работы
            </h2>
            {/* Wavy casual red underline precisely under "Этапы" */}
            <svg
              className="w-20 sm:w-24 h-3.5 text-[#E50916] mt-1 -mb-1"
              viewBox="0 0 80 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 7C16 3 28 9 42 5C54 1 66 8 76 4"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* 6 Connected Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 relative">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="bg-white border border-[#EDEDED] rounded-2xl p-4 sm:p-5 flex flex-col justify-start hover:border-[#E50916]/40 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-xs group min-h-[140px]"
            >
              <div className="flex items-center gap-2 mb-2.5">
                {/* Red Step Number Badge */}
                <div className="w-7 h-7 rounded-full bg-[#E50916] text-white flex items-center justify-center font-bold text-[13px] group-hover:scale-105 transition-transform shadow-xs flex-shrink-0">
                  {stage.num}
                </div>

                <h3 className="font-extrabold text-[15px] sm:text-[16px] text-[#111111] leading-snug">
                  {stage.title}
                </h3>
              </div>

              <p className="text-[12px] sm:text-[12.5px] text-[#777777] leading-snug">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
