import React, { useState } from 'react';
import { Plus, Minus, Phone, MapPin, ArrowRight } from 'lucide-react';
import { validateLeadForm, formatPhoneNumber } from '../utils/validation.ts';

interface FaqAndContactsProps {
  onSuccess: (data: { name: string; phone: string; note: string }) => void;
  onOpenLegal: (type: 'policy' | 'consent') => void;
}

export const FaqAndContacts: React.FC<FaqAndContactsProps> = ({
  onSuccess,
  onOpenLegal,
}) => {
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string; consent?: string }>({});

  const faqItems = [
    {
      q: 'Сколько стоит замер?',
      a: 'Выезд инженера по замеру по Калининграду и ближайшему пригороду абсолютно бесплатный. Специалист привезет образцы профилей и стеклопакетов, снимет точные размеры лазерным дальномером и рассчитает окончательную смету.',
    },
    {
      q: 'Как долго делают окна?',
      a: 'Стандартные белые конструкции изготавливаются за 5–7 рабочих дней на собственном автоматизированном заводе. Конструкции с ламинацией и нестандартных форм — от 10 рабочих дней.',
    },
    {
      q: 'Чем 82 отличается от 70?',
      a: 'VEKA Softline 82 имеет увеличенную монтажную глубину 82 мм, 7 воздушных камер и 3 контура уплотнения (вместо 2 у 70 мм). Это решение обеспечивает максимальную шумо- и теплоизоляцию для энергоэффективных частных домов и квартир с шумных улиц.',
    },
    {
      q: 'Можно ли в рассрочку?',
      a: 'Да! Мы предоставляем удобную беспроцентную рассрочку от компании без участия банков и скрытых переплат, а также выгодные кредитные программы от банков-партнеров.',
    },
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    if (formErrors.phone) {
      setFormErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateLeadForm({ name, phone, consent });
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    onSuccess({
      name,
      phone,
      note: 'Финальная форма «Остались вопросы»',
    });

    setName('');
    setPhone('');
  };

  return (
    <section id="faq" className="bg-[#111111] text-white py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* 3 Columns Layout matching reference photo strictly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Column 1: FAQ Accordion (4 cols) */}
          <div className="lg:col-span-4 bg-[#141414] border border-[#222222] rounded-3xl p-6 sm:p-7 flex flex-col justify-start shadow-xl">
            <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white mb-6 tracking-tight">
              Часто задаваемые вопросы
            </h3>

            <div className="space-y-3">
              {faqItems.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#2C2C2C] hover:border-[#3C3C3C] rounded-2xl overflow-hidden bg-[#1A1A1A] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 text-[13.5px] font-medium text-white hover:text-white transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="leading-snug">{item.q}</span>
                      <span className="text-[18px] text-zinc-400 font-light flex-shrink-0">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-[12.5px] text-[#A8A8A8] leading-relaxed border-t border-[#262626]">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Central Application Form with window backdrop (4 cols) */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-gray-200 bg-white text-[#111111] shadow-xl flex flex-col justify-between">
            {/* Subtle soft window silhouette background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/80 via-white to-white pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-15 pointer-events-none bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:12px_12px]" />

            <div className="p-6 sm:p-7 z-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#111111] tracking-tight leading-snug mb-1.5">
                  Остались вопросы?
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#555555] leading-snug mb-6">
                  Оставьте заявку — мы ответим <br className="hidden sm:inline" />и поможем с выбором.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Two inputs: 1-col on mobile, side-by-side on tablet/desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (formErrors.name) setFormErrors((p) => ({ ...p, name: undefined }));
                        }}
                        className={`w-full bg-[#F7F7F7] border rounded-xl px-3.5 py-3 text-[13.5px] text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#E50916] transition-colors ${
                          formErrors.name ? 'border-red-500' : 'border-[#E2E2E2]'
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-[10.5px] text-red-500 block mt-0.5">{formErrors.name}</span>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон"
                        value={phone}
                        onChange={handlePhoneChange}
                        className={`w-full bg-[#F7F7F7] border rounded-xl px-3.5 py-3 text-[13.5px] text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#E50916] transition-colors ${
                          formErrors.phone ? 'border-red-500' : 'border-[#E2E2E2]'
                        }`}
                      />
                      {formErrors.phone && (
                        <span className="text-[10.5px] text-red-500 block mt-0.5">{formErrors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Bright Red Full-width Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white py-3.5 rounded-xl font-bold text-[15px] transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Рассчитать
                  </button>

                  {/* 152-FZ Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer text-left">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (formErrors.consent) setFormErrors((p) => ({ ...p, consent: undefined }));
                        }}
                        className="mt-0.5 rounded border-red-500 text-[#E50916] focus:ring-red-500 accent-[#E50916] cursor-pointer"
                      />
                      <span className="text-[10.5px] text-[#777777] leading-tight">
                        Я согласен с{' '}
                        <button
                          type="button"
                          onClick={() => onOpenLegal('policy')}
                          className="text-[#111111] underline hover:text-[#E50916] cursor-pointer"
                        >
                          политикой обработки персональных данных
                        </button>{' '}
                        и даю согласие на обработку моих данных.
                      </span>
                    </label>
                    {formErrors.consent && (
                      <span className="text-[10.5px] text-red-500 block mt-0.5">{formErrors.consent}</span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Column 3: Contacts & Map Placeholder Frame (4 cols) */}
          <div id="contacts" className="lg:col-span-4 bg-[#141414] border border-[#222222] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white mb-5 tracking-tight">
                Наши контакты
              </h3>

              {/* Phone with Red Icon */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-950/60 border border-red-800/40 flex items-center justify-center text-[#E50916] flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 fill-[#E50916]" />
                </div>
                <div>
                  <a
                    href="tel:84012376868"
                    className="block font-bold text-[16px] text-white hover:text-[#E50916] transition-colors leading-tight"
                  >
                    8 (4012) 37-68-68
                  </a>
                  <span className="text-[11.5px] text-[#888888] font-medium block mt-0.5">
                    Звонить с 8:00 до 20:00
                  </span>
                </div>
              </div>

              {/* Address with Red Map Pin */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-red-950/60 border border-red-800/40 flex items-center justify-center text-[#E50916] flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-[13.5px] text-[#E0E0E0] leading-snug">
                  ул. Согласия, 46 <br />
                  <span className="text-[#888888]">Калининград</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder Frame ("плашка под карты") matching reference */}
            <a
              href="https://yandex.ru/maps/?text=Калининград+ул.+Согласия+46"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-2xl overflow-hidden border border-[#2F2F2F] bg-[#1E2024] group hover:border-[#E50916]/50 transition-all shadow-md aspect-[16/9] w-full"
            >
              {/* Stylized vector map background representation */}
              <div className="absolute inset-0 bg-[#E8ECEF] opacity-90">
                {/* SVG Map Roads and Blocks */}
                <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none">
                  <rect width="400" height="220" fill="#E8ECEF" />
                  {/* Green park zones */}
                  <path d="M220 120 C260 110, 310 130, 340 180 L400 180 L400 220 L200 220 Z" fill="#D7E7D0" />
                  <path d="M10 10 C50 15, 90 40, 110 80 L30 110 Z" fill="#D7E7D0" />
                  {/* Roads */}
                  <path d="M-20 60 Q120 70 200 110 T420 140" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
                  <path d="M-20 60 Q120 70 200 110 T420 140" stroke="#FDE68A" strokeWidth="8" strokeLinecap="round" />
                  
                  <path d="M160 -20 L190 240" stroke="#FFFFFF" strokeWidth="12" />
                  <path d="M160 -20 L190 240" stroke="#F3F4F6" strokeWidth="8" />

                  <path d="M280 -10 Q260 120 300 240" stroke="#FFFFFF" strokeWidth="10" />
                  <path d="M50 180 Q180 140 380 90" stroke="#FFFFFF" strokeWidth="10" />
                </svg>
              </div>

              {/* Map Red Pin Icon */}
              <div className="absolute top-[42%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform select-none pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-[#E50916] text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
                <div className="w-2.5 h-1 bg-black/30 rounded-full blur-[1px] mt-0.5" />
              </div>

              {/* "Плашка под карту" label (subtle) */}
              <div className="absolute top-2.5 left-3 bg-black/60 backdrop-blur-xs text-[10px] text-white/80 px-2 py-0.5 rounded font-medium">
                Плашка под карту
              </div>

              {/* Red pill button "Как проехать →" in bottom-right corner exactly as in reference */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-[#E50916] group-hover:bg-[#D00814] text-white px-3.5 py-1.5 sm:py-2 rounded-xl text-[12px] sm:text-[12.5px] font-bold flex items-center gap-1.5 shadow-lg transition-colors">
                <span>Как проехать</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
