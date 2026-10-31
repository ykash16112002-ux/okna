import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface TaskItem {
  id: string;
  title: string;
  subtitle: string;
}

interface TaskSelectionProps {
  onSelectTask: (taskTitle: string) => void;
}

const tasks: TaskItem[] = [
  {
    id: 'kvartira',
    title: 'Квартира',
    subtitle: 'Замена окон',
  },
  {
    id: 'balkon',
    title: 'Балкон / лоджия',
    subtitle: 'Остекление',
  },
  {
    id: 'cottage',
    title: 'Коттедж / дача',
    subtitle: 'Окна для дома',
  },
  {
    id: 'terrace',
    title: 'Терраса и веранда',
    subtitle: 'Остекление',
  },
  {
    id: 'doors',
    title: 'Двери и конструкции',
    subtitle: 'ПВХ',
  },
];

export const TaskSelection: React.FC<TaskSelectionProps> = ({ onSelectTask }) => {
  return (
    <section id="tasks" className="bg-white py-14 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading + Exact Red Dynamic Swoosh Arrow from Reference */}
        <div className="flex items-center gap-2 mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[34px] xl:text-[38px] font-extrabold text-[#111111] tracking-tight">
            Выберите вашу задачу
          </h2>
          <svg
            className="w-10 sm:w-12 h-7 sm:h-8 text-[#E50916] ml-2 -mb-2 flex-shrink-0"
            viewBox="0 0 54 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 22C16 31 34 33 46 16C49 12 51 8 52 4M46 16L38 18M46 16L48 24"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 5 Cards Horizontal Grid with clean Photo Placeholders (Плашки для фото) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 xl:gap-6">
          {tasks.map((task) => (
            <button
              key={task.id}
              type="button"
              onClick={() => onSelectTask(task.title)}
              className="group bg-white hover:bg-white rounded-2xl overflow-hidden border border-[#ECECEC] hover:border-[#E50916]/50 transition-all duration-300 shadow-xs hover:shadow-lg text-left flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E50916]"
            >
              {/* Photo Placeholder Card (Плашка для фото без самой фотографии) */}
              <div className="w-full aspect-[4/3] bg-gradient-to-b from-[#F6F7F9] to-[#E9ECEF] border-b border-[#E2E6EA] flex flex-col items-center justify-center text-[#8C95A5] group-hover:from-[#EEF2F6] transition-colors relative">
                <div className="w-11 h-11 rounded-xl bg-white/80 shadow-2xs border border-white flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-[#9AA3B2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <span className="text-[10.5px] font-semibold text-[#808A9B] tracking-wide">
                  Плашка фото
                </span>
              </div>

              {/* Card Footer: Title, Subtitle, Red Arrow */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-2.5 mt-auto bg-white">
                <div>
                  <h3 className="font-bold text-[15px] sm:text-[16px] xl:text-[17px] text-[#111111] group-hover:text-[#E50916] transition-colors leading-tight">
                    {task.title}
                  </h3>
                  <div className="text-[12.5px] sm:text-[13px] text-[#777777] font-medium mt-1">
                    {task.subtitle}
                  </div>
                </div>

                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E50916] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#D00814] transition-all shadow-xs">
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
