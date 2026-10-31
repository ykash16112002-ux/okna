import React, { useState } from 'react';
import { X, Shield, FileText, Cookie } from 'lucide-react';

export type LegalTab = 'policy' | 'consent' | 'cookie';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'policy',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden text-[#111111]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#E50916]" />
            <h3 className="font-extrabold text-[16px] text-[#111111]">
              Юридическая информация (152-ФЗ РФ)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-6 gap-2 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('policy')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-[12.5px] font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'policy'
                ? 'border-[#E50916] text-[#E50916] bg-white rounded-t-lg'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Политика конфиденциальности</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('consent')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-[12.5px] font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'consent'
                ? 'border-[#E50916] text-[#E50916] bg-white rounded-t-lg'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Согласие на обработку данных</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cookie')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-[12.5px] font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'cookie'
                ? 'border-[#E50916] text-[#E50916] bg-white rounded-t-lg'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <Cookie className="w-3.5 h-3.5" />
            <span>Файлы Cookie</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-[13px] leading-relaxed text-[#444444] space-y-4">
          {activeTab === 'policy' && (
            <div>
              <h4 className="font-bold text-[15px] text-[#111111] mb-2">
                Политика в отношении обработки персональных данных компании «ОКНА на Отлично»
              </h4>
              <p>
                Настоящая Политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности данных компанией «ОКНА на Отлично» (далее — Оператор).
              </p>
              <h5 className="font-bold text-[13.5px] text-[#111111] mt-3 mb-1">
                1. Цели обработки персональных данных
              </h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Предоставление консультаций по подбору оконных и дверных конструкций ПВХ.</li>
                <li>Организация бесплатного выезда специалиста для проведения точного замера.</li>
                <li>Расчёт предварительной и итоговой сметы стоимости остекления.</li>
                <li>Заключение и исполнение договора купли-продажи и монтажа оконных конструкций.</li>
              </ul>
              <h5 className="font-bold text-[13.5px] text-[#111111] mt-3 mb-1">
                2. Перечень обрабатываемых данных
              </h5>
              <p>
                Оператор обрабатывает следующие персональные данные: фамилия, имя, номер контактного телефона, адрес объекта проведения замера/монтажа (город/район в Калининградской области), файлы cookie и обезличенные данные аналитики.
              </p>
              <h5 className="font-bold text-[13.5px] text-[#111111] mt-3 mb-1">
                3. Безопасность и хранение данных
              </h5>
              <p>
                Первичные базы данных размещаются на серверах на территории Российской Федерации. Оператор не передает данные третьим лицам без согласия субъекта, за исключением случаев, предусмотренных законодательством РФ.
              </p>
            </div>
          )}

          {activeTab === 'consent' && (
            <div>
              <h4 className="font-bold text-[15px] text-[#111111] mb-2">
                Согласие на обработку персональных данных (отдельный документ по 152-ФЗ)
              </h4>
              <p>
                Заполняя формы обратной связи, квиз-калькулятор или заявку на замер на сайте okna-vp39.ru, Пользователь свободно, своей волей и в своем интересе дает конкретное, предметное, информированное, сознательное и однозначное согласие компании «ОКНА на Отлично» на обработку своих персональных данных.
              </p>
              <h5 className="font-bold text-[13.5px] text-[#111111] mt-3 mb-1">
                Условия согласия:
              </h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Согласие дается на обработку персональных данных: имя, номер телефона, город/район.</li>
                <li>Способы обработки: сбор, запись, систематизация, накопление, хранение, уточнение, использование, обезличивание, удаление.</li>
                <li>Срок действия согласия: до достижения целей обработки или до момента отзыва Пользователем.</li>
                <li>Отзыв согласия осуществляется направлением письменного уведомления на адрес: 236000, г. Калининград, ул. Согласия, 46.</li>
              </ul>
            </div>
          )}

          {activeTab === 'cookie' && (
            <div>
              <h4 className="font-bold text-[15px] text-[#111111] mb-2">
                Политика использования файлов Cookie
              </h4>
              <p>
                Сайт использует файлы cookie и сервисы веб-аналитики (Яндекс Метрика) для обеспечения удобной навигации, сохранения шагов квиз-расчёта и повышения качества обслуживания клиентов.
              </p>
              <p className="mt-2">
                Вы можете отключить использование cookie в настройках своего браузера. При этом некоторые интерактивные функции калькулятора могут стать недоступны.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#111111] hover:bg-black text-white px-5 py-2 rounded-lg font-bold text-[13px] transition-colors cursor-pointer"
          >
            Понятно, закрыть
          </button>
        </div>

      </div>
    </div>
  );
};
