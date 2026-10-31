import React from 'react';
import { CheckCircle2, X, MessageSquare, Phone } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    phone: string;
    estimate?: string;
    channel?: string;
  } | null;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100 overflow-hidden text-[#111111] p-6 text-center">
        
        <div className="flex justify-end -mt-2 -mr-2">
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4 border border-green-200">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h3 className="text-[22px] font-extrabold text-[#111111] mb-2 leading-tight">
          Заявка принята!
        </h3>

        <p className="text-[14px] text-[#555555] leading-relaxed mb-4">
          Спасибо, <span className="font-bold text-[#111111]">{data.name}</span>! Наш инженер уже рассчитывает ориентировочную смету и свяжется с вами по номеру <span className="font-bold text-[#111111]">{data.phone}</span> в течение 15 минут.
        </p>

        {data.estimate && (
          <div className="bg-red-50 border border-red-100 rounded-xl p-3.5 mb-5 text-left text-[12px] text-[#333333]">
            <span className="font-bold text-[#E50916] block uppercase tracking-wider text-[10px] mb-1">
              Параметры расчёта:
            </span>
            {data.estimate}
          </div>
        )}

        <div className="space-y-2 pt-1">
          <a
            href="https://t.me/okna_otlichno"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white py-2.5 rounded-lg font-bold text-[13px] flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Написать в Telegram напрямую</span>
          </a>

          <a
            href="tel:84012376868"
            className="w-full bg-gray-100 hover:bg-gray-200 text-[#111111] py-2.5 rounded-lg font-bold text-[13px] flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E50916]" />
            <span>Позвонить прямо сейчас: 8 (4012) 37-68-68</span>
          </a>
        </div>

      </div>
    </div>
  );
};
