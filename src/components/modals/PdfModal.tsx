import React from 'react';
import { X, Download, FileCheck, Shield } from 'lucide-react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  if (!isOpen) return null;

  const passports = [
    {
      title: 'Технический паспорт VEKA Softline 70',
      specs: '70 мм, 5 камер, ГОСТ 30673-2013, звукоизоляция до 40 дБ',
      size: '2.4 МБ (PDF)',
    },
    {
      title: 'Технический паспорт VEKA Softline 82',
      specs: '82 мм, 7 камер, 3 контура уплотнения, класс энергоэффективности А++',
      size: '3.1 МБ (PDF)',
    },
    {
      title: 'Сертификат соответствия WHS 72 by VEKA',
      specs: '72 мм, 5 камер, сертифицировано для Северо-Западного региона',
      size: '1.8 МБ (PDF)',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-100 overflow-hidden text-[#111111]">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#E50916]" />
            <h3 className="font-extrabold text-[16px] text-[#111111]">
              Официальные паспорта профильных систем
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

        {/* Content */}
        <div className="p-6 space-y-3">
          <p className="text-[13px] text-[#555555] mb-2 leading-relaxed">
            Вся продукция компании «ОКНА на Отлично» изготавливается в строгом соответствии с ГОСТ и санитарно-эпидемиологическими стандартами РФ.
          </p>

          {passports.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between gap-3 hover:border-[#E50916]/40 transition-colors"
            >
              <div>
                <div className="font-bold text-[13.5px] text-[#111111]">{item.title}</div>
                <div className="text-[11.5px] text-[#666666] mt-0.5">{item.specs}</div>
                <span className="text-[10px] text-gray-400 font-medium">{item.size}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  alert(`Скачивание документа: ${item.title}`);
                }}
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-[#E50916] hover:bg-[#E50916] hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow-xs flex-shrink-0"
                title="Скачать файл"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}

          <div className="pt-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full bg-[#E50916] hover:bg-[#D00814] text-white py-2.5 rounded-lg font-bold text-[13px] transition-colors cursor-pointer"
            >
              Подобрать профиль вместе с инженером
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
