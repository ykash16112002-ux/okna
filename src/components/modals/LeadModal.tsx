import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { validateLeadForm, formatPhoneNumber } from '../../utils/validation.ts';

interface LeadModalProps {
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  onClose: () => void;
  onSuccess: (data: { name: string; phone: string; note: string }) => void;
  onOpenLegal: (type: 'policy' | 'consent') => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  title = 'Получить консультацию инженера',
  subtitle = 'Оставьте контакты — специалист свяжется с вами в течение 15 минут для подробной консультации и расчёта.',
  onClose,
  onSuccess,
  onOpenLegal,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; consent?: string }>({});

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateLeadForm({ name, phone, consent });
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    onSuccess({
      name,
      phone,
      note: title,
    });

    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100 overflow-hidden text-[#111111]">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-extrabold text-[17px] text-[#111111] leading-tight">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-[13px] text-[#555555] leading-relaxed">
            {subtitle}
          </p>

          <div>
            <label className="block text-[12px] font-semibold text-[#444444] mb-1">
              Ваше имя *
            </label>
            <input
              type="text"
              placeholder="Константин"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
              }}
              className={`w-full bg-[#F8F8F8] border rounded-lg px-3.5 py-2.5 text-[14px] text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#E50916] transition-colors ${
                errors.name ? 'border-red-500' : 'border-[#E0E0E0]'
              }`}
            />
            {errors.name && <span className="text-[11px] text-red-500 block mt-0.5">{errors.name}</span>}
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#444444] mb-1">
              Номер телефона *
            </label>
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={handlePhoneChange}
              className={`w-full bg-[#F8F8F8] border rounded-lg px-3.5 py-2.5 text-[14px] text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#E50916] transition-colors ${
                errors.phone ? 'border-red-500' : 'border-[#E0E0E0]'
              }`}
            />
            {errors.phone && <span className="text-[11px] text-red-500 block mt-0.5">{errors.phone}</span>}
          </div>

          {/* 152-FZ Consent */}
          <div className="pt-1">
            <label className="flex items-start gap-2 cursor-pointer text-left">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (errors.consent) setErrors((p) => ({ ...p, consent: undefined }));
                }}
                className="mt-0.5 rounded border-gray-400 text-[#E50916] focus:ring-red-500 cursor-pointer"
              />
              <span className="text-[10.5px] text-[#777777] leading-tight">
                Я согласен с{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('policy')}
                  className="text-[#E50916] hover:underline cursor-pointer"
                >
                  политикой конфиденциальности
                </button>{' '}
                и даю согласие на обработку персональных данных.
              </span>
            </label>
            {errors.consent && (
              <span className="text-[10.5px] text-red-500 block mt-0.5">{errors.consent}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white py-3 rounded-lg font-bold text-[14px] flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer mt-2"
          >
            <Send className="w-4 h-4" />
            <span>Отправить заявку</span>
          </button>
        </form>

      </div>
    </div>
  );
};
