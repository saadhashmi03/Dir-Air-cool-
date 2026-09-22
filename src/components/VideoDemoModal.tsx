import React, { useState } from 'react';
import { X, Play, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface VideoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const VideoDemoModal: React.FC<VideoDemoModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 text-white rounded-3xl max-w-2xl w-full shadow-2xl border border-sky-500/40 overflow-hidden relative animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Screen / Player Container */}
        <div className="relative aspect-video bg-black overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
            alt="Dr Air Cool Jet Servicing Demonstration"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? 'opacity-80' : 'opacity-90'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/60"></div>

          {/* Simulated Active Video Animation */}
          {isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/60 backdrop-blur-xs">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mb-3 animate-pulse">
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-heading font-black text-xl text-white">
                Live Jet Foam Demonstration (0:22)
              </h4>
              <p className="text-xs text-slate-300 max-w-md mt-1">
                Technician using 120-Bar high pressure pump inside waterproof catch jacket. Notice how wall paint and floor remain completely dry while black dirt flushes out!
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-full border border-emerald-500/40">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero Mess Guaranteed on Your Walls</span>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white flex items-center justify-center shadow-xl shadow-cyan-500/30 transition-transform hover:scale-110 active:scale-95 mb-3 group"
              >
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </button>
              <span className="text-xs font-bold text-white uppercase tracking-wider bg-black/50 px-3 py-1 rounded-full border border-white/20">
                Preview 0:22 Jet Service in Mumbai
              </span>
            </div>
          )}

          <div className="absolute bottom-3 left-3 text-xs bg-slate-900/80 px-2.5 py-1 rounded-md text-slate-300 font-mono flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>0:22 Demonstration Video</span>
          </div>
        </div>

        {/* Video Description & Direct Booking CTA */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-[11px] text-cyan-400 font-bold uppercase tracking-wider block">
              100% Waterproof Wall Protection
            </span>
            <h3 className="font-heading font-extrabold text-lg text-white">
              Why Our Jet Foam Wash Never Leaves a Single Wall Stain
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              We mount a heavy-duty vinyl service jacket beneath your AC indoor split unit with an attached drainage pipe directed safely into a bucket. Every drop of dirty water and chemical foam flushes away cleanly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700">
              <span className="text-slate-400 block text-[10px]">Pressure Capacity:</span>
              <span className="font-bold text-white">120 Bar High-Pressure Pump</span>
            </div>
            <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700">
              <span className="text-slate-400 block text-[10px]">Cooling Increase:</span>
              <span className="font-bold text-emerald-400">+40% Faster Room Chill</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold rounded-xl text-xs sm:text-sm text-center shadow-lg shadow-sky-600/30 transition-all active:scale-95"
            >
              Book This Jet Foam Service (₹499)
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs sm:text-sm text-center transition-all"
            >
              Call Technician
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
