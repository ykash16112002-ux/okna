import React from 'react';
import { ArrowRight, FileText, Wallet, Volume2, Thermometer } from 'lucide-react';

interface ProfilesSectionProps {
  onOpenConsultation: () => void;
  onOpenPdf: () => void;
}

export const ProfilesSection: React.FC<ProfilesSectionProps> = ({
  onOpenConsultation,
  onOpenPdf,
}) => {
  return (
    <section className="bg-white pt-4 sm:pt-6 pb-12 sm:pb-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="mb-7 sm:mb-9">
          <h2 className="text-[28px] sm:text-[34px] xl:text-[38px] font-extrabold text-[#111111] tracking-tight">
            Профили и подбор
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-[#666666] font-medium mt-1.5">
            Сравните характеристики и выберите оптимальное решение
          </p>
        </div>

        {/* Content: Wider Comparison Table + Right Recommendation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 xl:gap-8 items-start">
          
          {/* Left Column (8 cols): Wider Table without cutaway images */}
          <div className="lg:col-span-8 overflow-x-auto">
            {/* Mobile swipe helper */}
            <div className="flex sm:hidden items-center justify-between text-[11.5px] font-semibold text-[#888888] mb-2 px-1">
              <span>← Проведите пальцем для сравнения →</span>
              <span className="text-[#E50916]">3 профиля</span>
            </div>
            <div className="min-w-[560px] sm:min-w-[620px] border border-[#E5E5E5] rounded-2xl overflow-hidden bg-white shadow-xs">
              
              {/* Table Header: 3 Profiles with clean names (NO cutaway images as requested) */}
              <div className="grid grid-cols-4 bg-[#FBFBFB] border-b border-[#E5E5E5] p-4 sm:p-5 items-center">
                <div className="text-[13px] sm:text-[14px] font-bold text-[#888888] uppercase tracking-wider pl-2">
                  Профиль
                </div>

                {/* Profile 1: VEKA Softline 70 */}
                <div className="pl-2">
                  <div className="inline-block bg-[#0055A5] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wider mb-1">
                    VEKA
                  </div>
                  <div className="text-[15px] sm:text-[16px] font-extrabold text-[#111111] leading-tight">
                    Softline 70
                  </div>
                </div>

                {/* Profile 2: VEKA Softline 82 */}
                <div className="pl-2">
                  <div className="inline-block bg-[#0055A5] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wider mb-1">
                    VEKA
                  </div>
                  <div className="text-[15px] sm:text-[16px] font-extrabold text-[#111111] leading-tight">
                    Softline 82
                  </div>
                </div>

                {/* Profile 3: WHS 72 */}
                <div className="pl-2">
                  <div className="inline-block bg-[#333333] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wider mb-1">
                    WHS
                  </div>
                  <div className="text-[15px] sm:text-[16px] font-extrabold text-[#111111] leading-tight">
                    72
                  </div>
                </div>
              </div>

              {/* Row 1: Монтажная глубина */}
              <div className="grid grid-cols-4 border-b border-[#EFEFEF] p-4 sm:p-4.5 text-[14px] items-center">
                <div className="text-[#666666] font-medium pl-2">Монтажная глубина</div>
                <div className="font-bold text-[#111111] pl-2">70 мм</div>
                <div className="font-bold text-[#111111] pl-2">82 мм</div>
                <div className="font-bold text-[#111111] pl-2">72 мм</div>
              </div>

              {/* Row 2: Количество камер */}
              <div className="grid grid-cols-4 border-b border-[#EFEFEF] p-4 sm:p-4.5 text-[14px] items-center bg-[#FAFAFA]/60">
                <div className="text-[#666666] font-medium pl-2">Количество камер</div>
                <div className="font-bold text-[#111111] pl-2">5</div>
                <div className="font-bold text-[#111111] pl-2">7</div>
                <div className="font-bold text-[#111111] pl-2">5</div>
              </div>

              {/* Row 3: Подходит для */}
              <div className="grid grid-cols-4 p-4 sm:p-5 text-[13px] sm:text-[13.5px] items-start">
                <div className="text-[#666666] font-medium pl-2">Подходит для</div>
                <div className="text-[#333333] leading-snug pl-2 pr-2">
                  Квартиры, балконы, неотапливаемые помещения
                </div>
                <div className="text-[#333333] leading-snug pl-2 pr-2">
                  Квартиры, дома, коттеджи, высокие требования к теплу и тишине
                </div>
                <div className="text-[#333333] leading-snug pl-2">
                  Квартиры, дома, балконы, остекление больших проёмов
                </div>
              </div>

            </div>

            {/* Download PDF Passports Link */}
            <div className="mt-4 flex items-center gap-2 pl-1">
              <button
                type="button"
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#111111] hover:text-[#E50916] transition-colors cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-full bg-red-50 text-[#E50916] flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="underline underline-offset-2">Скачать паспорта профилей (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column (4 cols): Recommendation Card matching reference photo strictly */}
          <div className="lg:col-span-4">
            <div className="bg-[#F8F9FA] border border-[#EAEAEA] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-[18px] sm:text-[19px] font-extrabold text-[#111111] mb-5 tracking-tight leading-snug">
                  Что выбрать: 70, 82 или 72?
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Item 1: Бюджет */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[#E50916] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Wallet className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="font-bold text-[14px] text-[#111111] leading-tight">
                        Бюджет
                      </div>
                      <div className="text-[12px] text-[#666666] leading-snug mt-0.5">
                        70 — оптимальный выбор по соотношению цены и качества
                      </div>
                    </div>
                  </div>

                  {/* Item 2: Шум */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[#E50916] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Volume2 className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="font-bold text-[14px] text-[#111111] leading-tight">
                        Шум
                      </div>
                      <div className="text-[12px] text-[#666666] leading-snug mt-0.5">
                        82 — лучшее шумопоглощение
                      </div>
                    </div>
                  </div>

                  {/* Item 3: Утепление */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[#E50916] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Thermometer className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="font-bold text-[14px] text-[#111111] leading-tight">
                        Утепление
                      </div>
                      <div className="text-[12px] text-[#666666] leading-snug mt-0.5">
                        82 — максимальная теплоизоляция
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[11.5px] sm:text-[12px] text-[#777777] leading-relaxed mb-6 pt-2 border-t border-gray-200">
                  Точный подбор зависит от объекта, климата и ваших задач. Наш инженер поможет выбрать лучшее решение.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white py-3.5 rounded-xl font-bold text-[14.5px] flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer group"
              >
                <span>Получить консультацию</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
