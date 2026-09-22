import React from 'react';
import { Calendar, Clock, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS, BUSINESS_INFO } from '../data/mockData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const icons = [
    <Calendar className="w-5 h-5 text-sky-600" />,
    <Clock className="w-5 h-5 text-emerald-600" />,
    <Sparkles className="w-5 h-5 text-cyan-600" />,
    <ShieldCheck className="w-5 h-5 text-amber-600" />
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full border border-sky-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Effortless Doorstep Experience</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Doorstep AC Servicing Works in Mumbai
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            From booking to ice-cold breeze in 4 simple, hassle-free steps. No advance payment needed.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-200 group"
            >
              {/* Step Number Top Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                  {icons[idx]}
                </div>
                <span className="font-heading font-black text-3xl text-slate-300 group-hover:text-sky-500 transition-colors">
                  {step.step}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-extrabold px-7 py-3.5 rounded-xl shadow-lg shadow-sky-600/25 text-sm transition-all active:scale-95"
          >
            <span>Book Your 45-Min Doorstep Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="block text-xs text-slate-500 mt-2">
            Or call directly: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-sky-600 hover:underline">{BUSINESS_INFO.phone}</a>
          </span>
        </div>

      </div>
    </section>
  );
};
