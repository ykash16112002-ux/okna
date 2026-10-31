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
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[34px] xl:text-[38px] font-extrabold text-[#111111] tracking-tight">
            Профили и подбор
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-[#666666] font-medium mt-1.5">
            Сравните характеристики и выберите оптимальное решение
          </p>
        </div>

        {/* Content: Comparison Table + Right Recommendation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
          
          {/* Left Column (8 cols): Table */}
          <div className="lg:col-span-8 overflow-x-auto">
            <div className="min-w-[560px] border border-[#E7E7E7] rounded-2xl overflow-hidden bg-white shadow-xs">
              
              {/* Table Header: 3 Profiles with Cutaway Images */}
              <div className="grid grid-cols-4 bg-[#FBFBFB] border-b border-[#E7E7E7] p-3 sm:p-4 items-center">
                <div className="text-[13px] font-bold text-[#888888] uppercase tracking-wider pl-2">
                  Профиль
                </div>

                {/* Profile 1: VEKA Softline 70 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-12 h-14 bg-white rounded border border-[#ECECEC] p-1 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/assets/images/profile-veka70.png"
                      alt="VEKA Softline 70 сечение"
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[11px] font-bold text-[#E50916] uppercase block">VEKA</span>
                    <span className="text-[13px] font-extrabold text-[#111111] block">Softline 70</span>
                  </div>
                </div>

                {/* Profile 2: VEKA Softline 82 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-12 h-14 bg-white rounded border border-[#ECECEC] p-1 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/assets/images/profile-veka82.png"
                      alt="VEKA Softline 82 сечение"
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[11px] font-bold text-[#E50916] uppercase block">VEKA</span>
                    <span className="text-[13px] font-extrabold text-[#111111] block">Softline 82</span>
                  </div>
                </div>

                {/* Profile 3: WHS 72 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-12 h-14 bg-white rounded border border-[#ECECEC] p-1 flex items-center justify-center flex-shrink-0">
                    <img
                      src="/assets/images/profile-whs72.png"
                      alt="WHS 72 сечение"
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[11px] font-bold text-[#555555] uppercase block">WHS</span>
                    <span className="text-[13px] font-extrabold text-[#111111] block">72</span>
                  </div>
                </div>
              </div>

              {/* Row 1: Монтажная глубина */}
              <div className="grid grid-cols-4 border-b border-[#EFEFEF] p-3.5 sm:p-4 text-[13px] items-center">
                <div className="text-[#777777] font-medium pl-2">Монтажная глубина</div>
                <div className="font-semibold text-[#111111]">70 мм</div>
                <div className="font-semibold text-[#111111]">82 мм</div>
                <div className="font-semibold text-[#111111]">72 мм</div>
              </div>

              {/* Row 2: Количество камер */}
              <div className="grid grid-cols-4 border-b border-[#EFEFEF] p-3.5 sm:p-4 text-[13px] items-center bg-[#FAFAFA]/50">
                <div className="text-[#777777] font-medium pl-2">Количество камер</div>
                <div className="font-semibold text-[#111111]">5</div>
                <div className="font-semibold text-[#111111]">7</div>
                <div className="font-semibold text-[#111111]">5</div>
              </div>

              {/* Row 3: Подходит для */}
              <div className="grid grid-cols-4 p-3.5 sm:p-4 text-[12.5px] items-start">
                <div className="text-[#777777] font-medium pl-2">Подходит для</div>
                <div className="text-[#333333] leading-snug pr-2">
                  Квартиры, балконы, неотапливаемые помещения
                </div>
                <div className="text-[#333333] leading-snug pr-2">
                  Квартиры, дома, коттеджи, теплые помещения
                </div>
                <div className="text-[#333333] leading-snug">
                  Квартиры, дома, балконы, остекление больших проёмов
                </div>
              </div>

            </div>

            {/* Download PDF Passports Link */}
            <div className="mt-4 flex items-center gap-2 pl-1">
              <button
                type="button"
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#111111] hover:text-[#E50916] transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-red-50 text-[#E50916] flex items-center justify-center">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <span>Скачать паспорта профилей (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column (4 cols): Recommendation Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#F5F5F5] border border-[#EBEBEB] rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-extrabold text-[#111111] mb-5 tracking-tight">
                  Что выбрать: 70, 82 или 72?
                </h3>

                {/* 3 points */}
                <div className="space-y-4">
                  {/* Point 1: Budget */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-[#E50916] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#111111]">Бюджет</div>
                      <div className="text-[12px] text-[#555555] leading-snug mt-0.5">
                        <span className="font-semibold text-[#111111]">70</span> — оптимальный выбор по соотношению цены и качества
                      </div>
                    </div>
                  </div>

                  {/* Point 2: Sound */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-[#E50916] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#111111]">Шум</div>
                      <div className="text-[12px] text-[#555555] leading-snug mt-0.5">
                        <span className="font-semibold text-[#111111]">82</span> — лучше шумоизоляция
                      </div>
                    </div>
                  </div>

                  {/* Point 3: Insulation */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-[#E50916] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Thermometer className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#111111]">Утепление</div>
                      <div className="text-[12px] text-[#555555] leading-snug mt-0.5">
                        <span className="font-semibold text-[#111111]">82</span> — максимальная теплоизоляция
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Red CTA Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="mt-6 w-full bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white py-3.5 px-5 rounded font-bold text-[14px] flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <span>Получить консультацию</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
