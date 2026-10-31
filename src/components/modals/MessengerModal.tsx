import React from 'react';
import { X, MessageSquare, PhoneCall, Send } from 'lucide-react';

interface MessengerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MessengerModal: React.FC<MessengerModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-gray-100 overflow-hidden text-[#111111] p-5">
        
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
          <h3 className="font-extrabold text-[16px] text-[#111111]">
            Выберите мессенджер
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[13px] text-[#555555] mb-4 leading-relaxed">
          Напишите нам в удобный мессенджер — дежурный специалист ответит в течение 10–15 минут:
        </p>

        <div className="space-y-2.5">
          {/* WhatsApp */}
          <a
            href="https://wa.me/74012376868?text=Здравствуйте!+Хочу+рассчитать+стоимость+окон"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-4 rounded-xl font-bold text-[13.5px] flex items-center justify-center gap-2.5 shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Написать в WhatsApp</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/okna_otlichno"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white py-3 px-4 rounded-xl font-bold text-[13.5px] flex items-center justify-center gap-2.5 shadow-xs transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Написать в Telegram</span>
          </a>

          {/* Direct Phone Call */}
          <a
            href="tel:84012376868"
            className="w-full bg-[#111111] hover:bg-black text-white py-3 px-4 rounded-xl font-bold text-[13.5px] flex items-center justify-center gap-2.5 shadow-xs transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#E50916]" />
            <span>Позвонить 8 (4012) 37-68-68</span>
          </a>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 text-center">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="text-[12px] text-[#E50916] hover:underline font-semibold cursor-pointer"
          >
            Или заказать обратный звонок
          </button>
        </div>

      </div>
    </div>
  );
};
