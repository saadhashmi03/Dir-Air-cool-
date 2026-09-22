import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';
import { COMPARISON_DATA, BUSINESS_INFO } from '../data/mockData';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            <span>Don't Settle For Shoddy Service</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dr Air Cool Services vs Ordinary Local Mechanics
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            See why over 500+ Mumbai homes & offices trust us to protect their costly air conditioners and maintain pristine walls.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
          
          {/* Table Headers */}
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-6 items-center">
            <div className="col-span-4 sm:col-span-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
              Service Standards
            </div>
            <div className="col-span-4 sm:col-span-4 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 bg-sky-500/20 text-cyan-300 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-black border border-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dr Air Cool Services</span>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-3 text-right sm:text-left text-xs sm:text-sm font-bold text-slate-400">
              Typical Local Mechanic
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/70 transition-colors"
              >
                {/* Metric Title */}
                <div className="col-span-12 sm:col-span-5 font-bold text-slate-900 mb-2 sm:mb-0">
                  {row.metric}
                </div>

                {/* Dr Air Cool column (Winner) */}
                <div className="col-span-6 sm:col-span-4 pr-3 sm:pr-4 flex items-start gap-2 text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-slate-900">
                    {row.drAirCool}
                  </span>
                </div>

                {/* Typical local mechanic column */}
                <div className="col-span-6 sm:col-span-3 flex items-start gap-2 text-slate-500">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-500 text-xs">
                    {row.localMechanic}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom guarantee footer */}
          <div className="p-4 sm:p-5 bg-sky-50/70 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="font-bold text-sky-900 text-center sm:text-left">
              ⭐ Rated 4.9★ on Google with 72+ Verified Reviews in Kurla West & Mumbai
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-sky-700 hover:text-sky-900 font-extrabold flex items-center gap-1"
            >
              <span>Call For Doorstep Service: {BUSINESS_INFO.phone}</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
