import React from 'react';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenLegal: (type: 'policy' | 'consent' | 'cookie') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo, onOpenLegal }) => {
  return (
    <footer className="bg-[#0D0D0D] text-white border-t border-[#222222] py-8 pb-24 md:pb-10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Row: Logo, Nav, Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#1E1E1E]">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#E50916] rounded flex items-center justify-center text-white shadow-xs">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="12" y1="3" x2="12" y2="21" />
                <line x1="3" y1="12" x2="21" y2="12" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-[15px] tracking-tight text-white uppercase font-sans">
                ОКНА
              </div>
              <div className="text-[10.5px] font-bold text-[#E50916] tracking-wide -mt-0.5">
                на Отлично
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[12.5px] text-[#A0A0A0]" aria-label="Навигация в подвале">
            <button
              onClick={() => onNavigateTo('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              О компании
            </button>
            <button
              onClick={() => onNavigateTo('tasks')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Услуги
            </button>
            <button
              onClick={() => onNavigateTo('portfolio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Портфолио
            </button>
            <button
              onClick={() => onNavigateTo('reviews')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Отзывы
            </button>
            <button
              onClick={() => onNavigateTo('faq')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => onNavigateTo('contacts')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Контакты
            </button>
          </nav>

          {/* Legal Document Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-[11px] text-[#777777]">
            <button
              onClick={() => onOpenLegal('policy')}
              className="hover:text-[#A8A8A8] underline transition-colors cursor-pointer"
            >
              Политика обработки персональных данных
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('cookie')}
              className="hover:text-[#A8A8A8] underline transition-colors cursor-pointer"
            >
              Политика cookie
            </button>
          </div>

        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#666666] gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} «ОКНА на Отлично». Производство пластиковых окон в Калининграде. Личная ответственность директора Вячеслава Пыталева.
          </div>
          <div>
            Калининград, ул. Согласия, 46 • Телефон: +7 (4012) 37-68-68
          </div>
        </div>

      </div>
    </footer>
  );
};
