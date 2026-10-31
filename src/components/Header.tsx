import React from 'react';
import { Phone } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onNavigateTo }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E7E7E7] h-[64px] flex items-center transition-all">
      <div className="max-w-[1780px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none flex-shrink-0"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-11 h-11 bg-[#E50916] rounded-md flex items-center justify-center text-white shadow-sm flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="12" y1="3" x2="12" y2="21" />
              <line x1="3" y1="12" x2="21" y2="12" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-[20px] tracking-tight text-[#111111] uppercase font-sans">
              ОКНА
            </div>
            <div className="text-[13px] font-bold text-[#E50916] tracking-wide -mt-0.5">
              на Отлично
            </div>
          </div>
          <div className="hidden xl:block h-7 w-[1px] bg-gray-200 mx-1" />
          <div className="hidden xl:block text-[12px] leading-tight text-gray-500 max-w-[160px]">
            Окна от производителя в Калининграде
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[#444444]" aria-label="Основная навигация">
          <button
            onClick={() => onNavigateTo('about')}
            className="hover:text-[#E50916] transition-colors cursor-pointer"
          >
            О компании
          </button>
          <button
            onClick={() => onNavigateTo('tasks')}
            className="hover:text-[#E50916] transition-colors cursor-pointer"
          >
            Услуги
          </button>
          <button
            onClick={() => onNavigateTo('portfolio')}
            className="hover:text-[#E50916] transition-colors cursor-pointer"
          >
            Портфолио
          </button>
          <button
            onClick={() => onNavigateTo('reviews')}
            className="hover:text-[#E50916] transition-colors cursor-pointer"
          >
            Отзывы
          </button>
          <button
            onClick={() => onNavigateTo('faq')}
            className="hover:text-[#E50916] transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={() => onNavigateTo('contacts')}
            className="hover:text-[#E50916] transition-colors cursor-pointer"
          >
            Контакты
          </button>
        </nav>

        {/* Right Phone + CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex flex-col items-end text-right">
            <a
              href="tel:84012376868"
              className="font-bold text-[15px] sm:text-[16px] text-[#111111] hover:text-[#E50916] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#E50916] fill-[#E50916]" />
              <span>8 (4012) 37-68-68</span>
            </a>
            <span className="text-[11px] text-[#888888] font-medium">
              Звоните с 8:00 до 20:00
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="bg-[#E50916] hover:bg-[#D00814] active:scale-[0.98] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded text-[13.5px] font-semibold transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            Рассчитать
          </button>
        </div>
      </div>
    </header>
  );
};
