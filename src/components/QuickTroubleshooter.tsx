import React, { useState } from 'react';
import { 
  ThermometerSnowflake, 
  Droplets, 
  Wind, 
  ZapOff, 
  Volume2, 
  Snowflake, 
  ArrowRight, 
  CheckCircle2, 
  Wrench,
  HelpCircle,
  AlertTriangle,
  MessageSquare,
  Clock
} from 'lucide-react';
import { AC_PROBLEMS, BUSINESS_INFO } from '../data/mockData';
import { ACProblem } from '../types';

interface QuickTroubleshooterProps {
  onSelectProblem: (problem: ACProblem) => void;
}

export const QuickTroubleshooter: React.FC<QuickTroubleshooterProps> = ({ onSelectProblem }) => {
  const [selectedProblemId, setSelectedProblemId] = useState<string>(AC_PROBLEMS[0].id);

  const activeProblem = AC_PROBLEMS.find(p => p.id === selectedProblemId) || AC_PROBLEMS[0];

  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-5 h-5 text-sky-600" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'Wind': return <Wind className="w-5 h-5 text-teal-600" />;
      case 'ZapOff': return <ZapOff className="w-5 h-5 text-amber-600" />;
      case 'Volume2': return <Volume2 className="w-5 h-5 text-rose-600" />;
      case 'Snowflake': return <Snowflake className="w-5 h-5 text-cyan-600" />;
      default: return <Wrench className="w-5 h-5 text-sky-600" />;
    }
  };

  const getSeverityBadge = (id: string) => {
    switch (id) {
      case 'leaking-water':
        return { label: 'Urgent: Wall Stain Risk', bg: 'bg-rose-100 text-rose-800 border-rose-200' };
      case 'tripping-mcb':
        return { label: 'High: Short Circuit Risk', bg: 'bg-amber-100 text-amber-800 border-amber-200' };
      case 'noise-vibration':
        return { label: 'Attention: Motor Wear', bg: 'bg-orange-100 text-orange-800 border-orange-200' };
      default:
        return { label: 'Routine Fix Available', bg: 'bg-sky-100 text-sky-800 border-sky-200' };
    }
  };

  const severity = getSeverityBadge(activeProblem.id);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200" id="troubleshooter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-black px-3.5 py-1 rounded-full mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Diagnostic Engine</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            What Issue Is Your AC Facing Today?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Click on your symptom below to see the root cause diagnosis and verified solution by Dr Air Cool Services Mumbai.
          </p>
        </div>

        {/* Problem Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {AC_PROBLEMS.map((problem) => {
            const isSelected = selectedProblemId === problem.id;
            return (
              <button
                key={problem.id}
                onClick={() => setSelectedProblemId(problem.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-full min-h-[120px] active:scale-98 ${
                  isSelected
                    ? 'bg-sky-50/90 border-sky-500 shadow-md ring-2 ring-sky-500/25'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/80 hover:border-slate-300'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-3 shrink-0">
                  {getProblemIcon(problem.iconName)}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                    {problem.name}
                  </h4>
                  {problem.hindiName && (
                    <span className="block text-[11px] text-slate-500 mt-0.5 font-medium">
                      {problem.hindiName}
                    </span>
                  )}
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-200/60 text-[11px] font-bold text-sky-700">
                  {problem.estimatedCost}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Problem Detailed Diagnostic Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full text-xs font-bold border border-sky-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dr Air Cool Diagnostic Analysis</span>
                </div>
                <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${severity.bg}`}>
                  <AlertTriangle className="w-3 h-3" />
                  <span>{severity.label}</span>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-black text-white">
                  {activeProblem.name}
                </h3>
                {activeProblem.hindiName && (
                  <p className="text-xs text-sky-300 font-medium mt-0.5">
                    ({activeProblem.hindiName})
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-extrabold mb-1">
                    🔍 Technical Root Cause:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {activeProblem.likelyReason}
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-extrabold mb-1">
                    🛠️ Verified Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-cyan-300 font-bold leading-relaxed">
                    {activeProblem.recommendedService}
                  </p>
                </div>
              </div>

              {/* Technician dispatched notice */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Technician dispatched with manifold gauges, replacement capacitors & leak-finder tools.</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3.5 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
              <div className="text-left lg:text-right">
                <span className="text-[11px] text-slate-400 uppercase font-bold block">Starting Doorstep Estimate</span>
                <span className="font-heading text-3xl font-black text-amber-400">
                  {activeProblem.estimatedCost}
                </span>
                <span className="block text-[11px] text-slate-400 mt-0.5">Includes full inspection & written quote</span>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full">
                <button
                  onClick={() => onSelectProblem(activeProblem)}
                  id="troubleshooter-book-fix-btn"
                  className="w-full min-h-[44px] bg-emerald-500 hover:bg-emerald-600 text-white font-black px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/30 text-xs sm:text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Book This Repair Online</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Dr%20Air%20Cool,%20my%20AC%20has%20an%20issue:%20${encodeURIComponent(activeProblem.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-xl border border-white/20 text-xs text-center transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Diagnosis</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
