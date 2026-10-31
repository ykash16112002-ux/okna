import React from 'react';
import { ShieldCheckIcon } from './icons/Icons.tsx';

interface DirectorAddressProps {
  onOpenVideo?: () => void;
}

export const DirectorAddress: React.FC<DirectorAddressProps> = () => {
  return (
    <section id="about" className="bg-[#111111] text-white py-10 sm:py-20 border-b border-neutral-800 overflow-hidden">
      <div className="max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left: Heading with Red Dash Line */}
          <div className="lg:col-span-3">
            <div className="w-12 sm:w-16 h-1.5 bg-[#E50916] rounded-full mb-3 sm:mb-4" />
            <h2 className="text-[26px] sm:text-[32px] xl:text-[36px] font-extrabold text-white tracking-tight leading-tight">
              Что говорит <br className="hidden sm:inline" />
              руководитель
            </h2>
          </div>

          {/* Middle: Professional Manufacturer Quote (No AI cliché) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className="text-[#E50916] text-[40px] sm:text-[56px] font-black leading-none flex-shrink-0 select-none -mt-2">
                “
              </span>
              <p className="text-[14.5px] sm:text-[17px] leading-relaxed text-[#D6D6D6] font-normal">
                Мы остекляем дома и квартиры в Калининграде с 2000 года. На собственном производстве контролируем геометрию каждого сварного шва и герметичность стеклопакетов. Лично отвечаю за качество монтажа по ГОСТ 30971 и гарантийные обязательства компании.
                <span className="text-[#E50916] text-[28px] sm:text-[38px] font-black ml-1 select-none leading-none">”</span>
              </p>
            </div>

            <div className="mt-4 sm:mt-5 pl-0 sm:pl-8 flex items-center gap-3 sm:gap-4">
              <div className="w-5 sm:w-6 h-px bg-[#E50916]" />
              <div>
                <div className="font-extrabold text-[15px] sm:text-[16px] text-white leading-tight">
                  Вячеслав Пыталев
                </div>
                <div className="text-[12px] sm:text-[12.5px] text-[#888888] font-medium mt-0.5">
                  Директор компании
                </div>
              </div>
            </div>
          </div>

          {/* Right: Personal Guarantee Card (Crisp border, no puffy shadow) */}
          <div className="lg:col-span-4 xl:col-span-4 flex justify-start lg:justify-end">
            <div className="bg-[#181818] border border-neutral-800 rounded-xl p-5 sm:p-6 text-white flex flex-col justify-between max-w-full sm:max-w-[340px] w-full">
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-[#E50916] flex-shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 text-[#E50916]" />
                  </div>
                  <h3 className="font-extrabold text-[15px] sm:text-[16px] text-white leading-snug">
                    Личная гарантия <br />обработки заявки
                  </h3>
                </div>
                <p className="text-[13px] text-[#A8A8A8] leading-relaxed">
                  Вы получите ответ от меня лично или дежурного инженера в течение 15 минут.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-4 flex justify-end items-end pt-2">
                <span className="font-script text-[24px] sm:text-[26px] text-white/80 italic select-none">
                  В. Пыталев
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
