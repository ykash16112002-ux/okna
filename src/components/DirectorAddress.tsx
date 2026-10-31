import React from 'react';

interface DirectorAddressProps {
  onOpenVideo?: () => void;
}

export const DirectorAddress: React.FC<DirectorAddressProps> = () => {
  return (
    <section id="about" className="bg-[#111111] text-white py-14 sm:py-18 border-b border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left: Heading with Red Dash Line */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="w-10 h-1 bg-[#E50916] rounded-full mb-3.5" />
            <h2 className="text-[28px] sm:text-[32px] xl:text-[36px] font-extrabold text-white tracking-tight leading-tight">
              Что говорит <br className="hidden sm:inline" />
              руководитель
            </h2>
          </div>

          {/* Right: Stretched Quote with Red Quotes and Director Info */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
            
            {/* Quote Text */}
            <div className="flex items-start gap-3 flex-1">
              <span className="text-[#E50916] text-[34px] sm:text-[40px] font-serif leading-none flex-shrink-0 select-none -mt-1">
                “
              </span>
              <p className="text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-relaxed text-[#D6D6D6] font-normal">
                Мы производим окна и остекление в Калининграде уже много лет. Для нас это не просто работа — это ответственность перед каждым клиентом. Мы контролируем качество на всех этапах, от замера до монтажа, и уверены в своём продукте.
                <span className="text-[#E50916] text-[24px] font-serif ml-1 select-none">”</span>
              </p>
            </div>

            {/* Divider and Director Info (No signature, clean layout) */}
            <div className="flex items-center gap-6 md:gap-8 flex-shrink-0 pt-2 md:pt-0">
              <div className="hidden md:block w-px h-16 bg-white/20 flex-shrink-0" />
              <div>
                <div className="font-extrabold text-[16px] sm:text-[17px] text-white leading-tight">
                  Вячеслав Пыталев
                </div>
                <div className="text-[13px] text-[#888888] font-medium mt-1">
                  Директор
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
