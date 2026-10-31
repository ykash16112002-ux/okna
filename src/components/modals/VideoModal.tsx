import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#141414] border border-[#2A2A2A] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#222222]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50916] animate-pulse" />
            <span className="font-bold text-[14px] text-white">
              Видеообращение директора • Вячеслав Пыталев
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Закрыть видео"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Simulator */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/assets/images/video-thumb.png"
            alt="Вячеслав Пыталев на производстве"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-4">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <div className="space-y-3">
              {/* Subtitles box */}
              <div className="bg-black/70 backdrop-blur-xs px-4 py-2 rounded-lg border border-white/10 text-[13px] text-white max-w-md mx-auto text-center leading-relaxed">
                «Здравствуйте! Я лично контролирую каждый этап сборки окон на нашем заводе в Калининграде, чтобы в вашем доме всегда было тепло и тихо.»
              </div>

              {/* Bottom Play bar */}
              <div className="flex items-center gap-3 text-white">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full bg-[#E50916] text-white flex items-center justify-center cursor-pointer hover:bg-[#D00814] transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                </button>
                <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E50916] w-1/3 rounded-full" />
                </div>
                <span className="text-[11px] text-[#A0A0A0] font-mono">0:14 / 0:42</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#181818]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-950/60 border border-red-800/40 text-[#E50916] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-[12.5px] text-[#B0B0B0] leading-snug">
              Личная ответственность директора за каждый договор. <br />
              <span className="text-white font-medium">Бесплатный выезд инженера по Калининграду.</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto bg-[#E50916] hover:bg-[#D00814] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors cursor-pointer whitespace-nowrap"
          >
            Связаться с директором
          </button>
        </div>

      </div>
    </div>
  );
};
