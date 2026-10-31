import React, { useState } from 'react';
import { ArrowRight, Clock, X, Check, Send, ArrowLeft } from 'lucide-react';
import { validateLeadForm, formatPhoneNumber } from '../utils/validation.ts';
import { computeQuizEstimate } from '../utils/calculator.ts';

interface QuizSectionProps {
  selectedCategory?: string;
  onSuccess: (data: { name: string; phone: string; estimate: string; channel: string }) => void;
  onOpenLegal: (type: 'policy' | 'consent') => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  selectedCategory,
  onSuccess,
  onOpenLegal,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [objectType, setObjectType] = useState<string>(selectedCategory || 'Квартира');
  const [windowCount, setWindowCount] = useState<string>('3–4 окна');
  const [profileType, setProfileType] = useState<string>('VEKA Softline 70');
  const [district, setDistrict] = useState<string>('Калининград');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [contactChannel, setContactChannel] = useState<'whatsapp' | 'telegram' | 'phone' | 'max'>('whatsapp');
  const [consent, setConsent] = useState<boolean>(true);
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string; consent?: string }>({});

  // Sync if parent updates selectedCategory (only on user click, not on mount)
  const isFirstMount = React.useRef(true);
  React.useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (selectedCategory) {
      setObjectType(selectedCategory);
      setIsModalOpen(true);
      setCurrentStep(1);
    }
  }, [selectedCategory]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    if (formErrors.phone) {
      setFormErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateLeadForm({ name, phone, consent });
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    const estimate = computeQuizEstimate({
      objectType,
      profileType,
      district,
    });

    onSuccess({
      name,
      phone,
      estimate: estimate.summary,
      channel: contactChannel,
    });

    setIsModalOpen(false);
  };

  const stepsList = [
    {
      num: 1,
      title: 'Тип объекта',
      sub: 'Квартира, балкон, коттедж и др.',
    },
    {
      num: 2,
      title: 'Размеры / количество',
      sub: 'Укажите размеры или число окон',
    },
    {
      num: 3,
      title: 'Профиль',
      sub: 'Подберём оптимальный (или выберите сами)',
    },
    {
      num: 4,
      title: 'Район',
      sub: 'Ваш населённый пункт',
    },
    {
      num: 5,
      title: 'Контакты',
      sub: 'Телефон и удобный канал связи',
    },
  ];

  return (
    <section id="quiz" className="bg-[#111111] text-white py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid: Left Steps + CTA, Right Clock Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          
          {/* Left Column (9 cols on desktop): Header, 5 connected steps, Button */}
          <div className="lg:col-span-9 flex flex-col justify-between">
            
            {/* Title & Subtitle */}
            <div className="mb-8 sm:mb-10">
              <h2 className="text-[30px] sm:text-[36px] xl:text-[40px] font-extrabold text-white tracking-tight leading-tight">
                Квиз-расчёт — 5 простых шагов
              </h2>
              
              <div className="flex items-center gap-2.5 sm:gap-3 mt-2 flex-wrap">
                <span className="text-[13.5px] sm:text-[15px] text-[#B0B0B0] font-medium leading-relaxed">
                  Оставьте заявку, и мы подберём оптимальное решение под ваш объект
                </span>
                {/* Red decorative squiggle */}
                <svg
                  className="w-16 sm:w-24 h-4 sm:h-5 text-[#E50916] inline-block flex-shrink-0"
                  viewBox="0 0 60 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 13L15 3L30 11L45 4L58 8"
                    stroke="currentColor"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* 5 Steps: Mobile clean vertical/2-col flow, Desktop horizontal flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:items-start md:justify-between gap-2.5 sm:gap-4 mb-8 sm:mb-9">
              {stepsList.map((step, idx) => (
                <React.Fragment key={step.num}>
                  {/* Step Item */}
                  <div
                    onClick={() => {
                      setCurrentStep(step.num);
                      setIsModalOpen(true);
                    }}
                    className="flex items-center md:items-start gap-3 p-3 md:p-0 rounded-xl bg-[#1B1B1B] md:bg-transparent border border-[#2B2B2B] md:border-transparent flex-1 cursor-pointer group hover:border-[#E50916]/40 transition-colors"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E50916] text-white flex items-center justify-center font-extrabold text-[13px] sm:text-[14px] flex-shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-extrabold text-[13.5px] sm:text-[15px] text-white group-hover:text-[#E50916] transition-colors leading-snug">
                        {step.title}
                      </div>
                      <div className="text-[11.5px] sm:text-[12px] text-[#8E8E8E] leading-tight mt-0.5">
                        {step.sub}
                      </div>
                    </div>
                  </div>

                  {/* Connecting line between steps on desktop */}
                  {idx < stepsList.length - 1 && (
                    <div className="hidden md:flex items-center pt-3 flex-shrink-0">
                      <div className="w-4 sm:w-6 lg:w-8 h-[1px] bg-[#3A3A3A]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Red Button: "Начать расчёт →" directly below steps */}
            <div>
              <button
                type="button"
                onClick={() => {
                  setCurrentStep(1);
                  setIsModalOpen(true);
                }}
                className="bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white px-9 py-4 rounded-xl font-bold text-[16px] flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Начать расчёт</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Taller and stretched Photo Placeholder Card + 15 Min Clock */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[270px] sm:max-w-[290px] bg-[#181818] border border-[#2B2B2B] rounded-2xl p-4 flex flex-col justify-between shadow-2xl">
              
              {/* Photo Placeholder Frame (Taller and stretched) */}
              <div className="h-[170px] sm:h-[190px] w-full rounded-xl overflow-hidden mb-3.5 border-2 border-dashed border-[#444444] bg-[#222222] flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D2D2D] border border-white/10 flex items-center justify-center text-zinc-400 mb-2">
                  <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="text-[12px] font-bold text-zinc-300">
                  Плашка под фото
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">
                  Остекление объекта
                </div>
              </div>

              {/* Clock + Text */}
              <div className="p-1 pt-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="w-4.5 h-4.5 stroke-[2]" />
                  </div>
                  <div className="text-[13px] font-bold text-white leading-tight">
                    Ориентировочная <br />
                    смета в течение <br />
                    <span className="text-white">15 минут</span>
                  </div>
                </div>

                {/* Hand-drawn neon red curve going under the card */}
                <svg
                  className="w-full h-7 text-[#E50916] mt-2.5"
                  viewBox="0 0 160 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 22C45 2 110 28 156 6"
                    stroke="currentColor"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Interactive Modal Stepper when "Начать расчёт →" is clicked */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#181818] border border-[#2B2B2B] rounded-2xl max-w-xl w-full p-6 sm:p-7 text-white shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#2B2B2B] pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <span className="text-[#E50916] font-bold text-[13px] tracking-wide">
                  ШАГ {currentStep} ИЗ 5
                </span>
                <span className="text-[#666666] text-[12px]">•</span>
                <span className="text-[13px] font-bold text-white">
                  {stepsList[currentStep - 1].title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Step 1: Object Type */}
            {currentStep === 1 && (
              <div>
                <h4 className="text-[17px] font-bold text-white mb-4">
                  Выберите тип объекта для расчёта:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Квартира',
                    'Балкон / лоджия',
                    'Коттедж / дача',
                    'Терраса и веранда',
                    'Двери и конструкции',
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setObjectType(item);
                        handleNextStep();
                      }}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        objectType === item
                          ? 'bg-[#E50916]/20 border-[#E50916] text-white font-bold'
                          : 'bg-[#222222] border-[#333333] text-[#D0D0D0] hover:border-[#555555]'
                      }`}
                    >
                      <span className="text-[13.5px]">{item}</span>
                      {objectType === item && <Check className="w-4 h-4 text-[#E50916]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Window count */}
            {currentStep === 2 && (
              <div>
                <h4 className="text-[17px] font-bold text-white mb-4">
                  Укажите размеры или приблизительное количество окон:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    '1–2 окна',
                    '3–4 окна',
                    '5 и более окон',
                    'Остекление под ключ',
                    'Точные размеры из проекта',
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setWindowCount(item);
                        handleNextStep();
                      }}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        windowCount === item
                          ? 'bg-[#E50916]/20 border-[#E50916] text-white font-bold'
                          : 'bg-[#222222] border-[#333333] text-[#D0D0D0] hover:border-[#555555]'
                      }`}
                    >
                      <span className="text-[13.5px]">{item}</span>
                      {windowCount === item && <Check className="w-4 h-4 text-[#E50916]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Profile System */}
            {currentStep === 3 && (
              <div>
                <h4 className="text-[17px] font-bold text-white mb-4">
                  Выберите профильную систему:
                </h4>
                <div className="space-y-2.5">
                  {[
                    { id: 'VEKA Softline 70', desc: '70 мм, 5 камер — оптимальный выбор по цене и качеству' },
                    { id: 'VEKA Softline 82', desc: '82 мм, 7 камер — максимальная шумо- и теплоизоляция' },
                    { id: 'WHS 72', desc: '72 мм, 5 камер — надежный практичный выбор для любых проёмов' },
                    { id: 'Подберём оптимальный (или выберите сами)', desc: 'Инженер подберёт решение под ваш бюджет' },
                  ].map((prof) => (
                    <button
                      key={prof.id}
                      type="button"
                      onClick={() => {
                        setProfileType(prof.id);
                        handleNextStep();
                      }}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                        profileType === prof.id
                          ? 'bg-[#E50916]/20 border-[#E50916] text-white'
                          : 'bg-[#222222] border-[#333333] text-[#D0D0D0] hover:border-[#555555]'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-[13.5px] text-white">{prof.id}</div>
                        <div className="text-[11.5px] text-[#888888] mt-0.5">{prof.desc}</div>
                      </div>
                      {profileType === prof.id && <Check className="w-4 h-4 text-[#E50916] flex-shrink-0 mt-0.5" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: District */}
            {currentStep === 4 && (
              <div>
                <h4 className="text-[17px] font-bold text-white mb-4">
                  Ваш населённый пункт / район:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Калининград',
                    'Гурьевск',
                    'Зеленоградск',
                    'Светлогорск',
                    'Пионерский',
                    'Балтийск',
                    'Черняховск',
                    'Советск',
                    'Другой населённый пункт',
                  ].map((dist) => (
                    <button
                      key={dist}
                      type="button"
                      onClick={() => {
                        setDistrict(dist);
                        handleNextStep();
                      }}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer text-[12.5px] ${
                        district === dist
                          ? 'bg-[#E50916]/25 border-[#E50916] text-white font-bold'
                          : 'bg-[#222222] border-[#333333] text-[#B0B0B0] hover:border-[#555555]'
                      }`}
                    >
                      {dist}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Contact Info */}
            {currentStep === 5 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-[17px] font-bold text-white">
                  Куда направить предварительную смету?
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11.5px] font-semibold text-[#A0A0A0] mb-1">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (formErrors.name) setFormErrors((p) => ({ ...p, name: undefined }));
                      }}
                      placeholder="Иван"
                      className={`w-full bg-[#222222] border rounded-lg px-3 py-2 text-white text-[13.5px] focus:outline-none focus:border-[#E50916] ${
                        formErrors.name ? 'border-red-500' : 'border-[#333333]'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[10.5px] text-red-400 mt-0.5 block">{formErrors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11.5px] font-semibold text-[#A0A0A0] mb-1">
                      Номер телефона *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+7 (___) ___-__-__"
                      className={`w-full bg-[#222222] border rounded-lg px-3 py-2 text-white text-[13.5px] focus:outline-none focus:border-[#E50916] ${
                        formErrors.phone ? 'border-red-500' : 'border-[#333333]'
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="text-[10.5px] text-red-400 mt-0.5 block">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Channel */}
                <div>
                  <label className="block text-[11.5px] font-semibold text-[#A0A0A0] mb-1.5">
                    Удобный канал связи:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'whatsapp', label: 'WhatsApp' },
                      { id: 'telegram', label: 'Telegram' },
                      { id: 'phone', label: 'Звонок' },
                      { id: 'max', label: 'MAX' },
                    ].map((ch) => (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => setContactChannel(ch.id as any)}
                        className={`py-1.5 px-2 rounded-lg border text-[11.5px] font-medium transition-all cursor-pointer text-center ${
                          contactChannel === ch.id
                            ? 'bg-[#E50916] border-[#E50916] text-white font-bold'
                            : 'bg-[#242424] border-[#333333] text-[#B0B0B0]'
                        }`}
                      >
                        {ch.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 152-FZ Consent */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer text-left">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (formErrors.consent) setFormErrors((p) => ({ ...p, consent: undefined }));
                      }}
                      className="mt-0.5 rounded border-gray-600 text-[#E50916] focus:ring-red-500 cursor-pointer"
                    />
                    <span className="text-[10.5px] text-[#888888] leading-tight">
                      Я согласен с{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegal('policy')}
                        className="text-[#E50916] hover:underline cursor-pointer"
                      >
                        политикой обработки данных
                      </button>{' '}
                      и даю согласие на обработку персональных данных.
                    </span>
                  </label>
                  {formErrors.consent && (
                    <span className="text-[10.5px] text-red-400 mt-0.5 block">{formErrors.consent}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E50916] hover:bg-[#D00814] text-white py-3 rounded-lg font-bold text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Получить ориентировочную смету</span>
                </button>
              </form>
            )}

            {/* Modal Footer Controls */}
            {currentStep < 5 && (
              <div className="mt-6 pt-3 border-t border-[#2B2B2B] flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 text-[12.5px] text-[#888888] hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Назад</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#E50916] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Далее</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
