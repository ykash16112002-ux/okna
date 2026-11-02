import React from 'react';
import { ArrowRightIcon } from './icons/Icons.tsx';
import { APP_IMAGES } from '../constants/images.ts';

export interface TaskItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

interface TaskSelectionProps {
  onSelectTask: (taskTitle: string) => void;
}

const tasks: TaskItem[] = [
  {
    id: 'kvartira',
    title: 'Квартира',
    subtitle: 'Замена окон',
    image: APP_IMAGES.apartmentWindows,
  },
  {
    id: 'balkon',
    title: 'Балкон / лоджия',
    subtitle: 'Остекление',
    image: APP_IMAGES.balconyGlazing,
  },
  {
    id: 'cottage',
    title: 'Коттедж / дача',
    subtitle: 'Окна для дома',
    image: APP_IMAGES.cottageHouse,
  },
  {
    id: 'terrace',
    title: 'Терраса и веранда',
    subtitle: 'Остекление',
    image: APP_IMAGES.terraceVeranda,
  },
  {
    id: 'doors',
    title: 'Двери и конструкции',
    subtitle: 'ПВХ',
    image: APP_IMAGES.doorsStructures,
  },
];

export const TaskSelection: React.FC<TaskSelectionProps> = ({ onSelectTask }) => {
  return (
    <section id="tasks" className="bg-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      {/* Expanded Container with reduced lateral padding */}
      <div className="max-w-[1780px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* Section Heading + Larger Red Dynamic Swoosh Arrow */}
        <div className="flex items-center gap-2 mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[36px] xl:text-[40px] font-extrabold text-[#111111] tracking-tight">
            Выберите вашу задачу
          </h2>
          <svg
            className="w-14 sm:w-16 h-10 sm:h-11 text-[#E50916] ml-2 -mb-2 flex-shrink-0"
            viewBox="0 0 54 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 22C16 31 34 33 46 16C49 12 51 8 52 4M46 16L38 18M46 16L48 24"
              stroke="currentColor"
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 5 Cards Horizontal Grid: Expanded width, larger photo aspect ratio */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 lg:gap-5 xl:gap-6">
          {tasks.map((task, idx) => (
            <button
              key={task.id}
              type="button"
              onClick={() => onSelectTask(task.title)}
              className={`group bg-white hover:bg-white rounded-3xl overflow-hidden border border-[#ECECEC] hover:border-[#E50916] transition-colors duration-200 shadow-sm text-left flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E50916] h-[270px] sm:h-[310px] xl:h-[340px] ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : 'col-span-1'
              }`}
            >
              {/* Photo Card with Real Rendered Image (Увеличена и растянута, без анимации приближения) */}
              <div className="w-full h-[160px] sm:h-[195px] xl:h-[220px] bg-neutral-100 border-b border-[#E2E6EA] relative overflow-hidden flex-shrink-0">
                <img
                  src={task.image}
                  alt={`${task.title} — ${task.subtitle}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Card Footer: Ruler-aligned Title, Subtitle, Red Arrow */}
              <div className="p-3.5 sm:p-5 flex items-center justify-between gap-2.5 bg-white flex-1 w-full">
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-[14.5px] sm:text-[16.5px] lg:text-[18px] text-[#111111] group-hover:text-[#E50916] transition-colors leading-snug min-h-[38px] sm:h-[44px] flex items-center sm:items-start">
                    {task.title}
                  </h3>
                  <div className="text-[12px] sm:text-[13.5px] text-[#777777] font-semibold mt-0.5 truncate">
                    {task.subtitle}
                  </div>
                </div>

                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#E50916] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#D00814] transition-colors shadow-sm">
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
