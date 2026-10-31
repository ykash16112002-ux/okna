import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface MobileBottomBarProps {
  onStartQuiz: () => void;
  onOpenMessengers: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onStartQuiz,
  onOpenMessengers,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#E50916] text-white shadow-2xl border-t border-red-700/40">
      <div className="grid grid-cols-3 h-14 items-center divide-x divide-red-600/50">
        
        {/* Action 1: Call Phone */}
        <a
          href="tel:84012376868"
          className="flex items-center justify-center gap-1.5 px-2 py-3 text-center active:bg-[#CC0813] transition-colors"
          aria-label="Позвонить в компанию ОКНА на Отлично"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span className="text-[12.5px] font-bold tracking-tight">Позвонить</span>
        </a>

        {/* Action 2: Messengers */}
        <button
          type="button"
          onClick={onOpenMessengers}
          className="flex items-center justify-center gap-1 px-1.5 py-3 text-center active:bg-[#CC0813] transition-colors cursor-pointer"
          aria-label="Написать в WhatsApp или Telegram"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[11px] sm:text-[12px] font-bold tracking-tight leading-tight line-clamp-1">
            WhatsApp / Telegram / MAX
          </span>
        </button>

        {/* Action 3: Calculate Quiz */}
        <button
          type="button"
          onClick={onStartQuiz}
          className="flex items-center justify-center gap-1.5 px-2 py-3 text-center active:bg-[#CC0813] transition-colors cursor-pointer"
          aria-label="Перейти к квиз-расчёту окон"
        >
          <ArrowRight className="w-4 h-4" />
          <span className="text-[12.5px] font-bold tracking-tight">Рассчитать</span>
        </button>

      </div>
    </div>
  );
};
