import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { SUPPORTED_BRANDS } from '../data/mockData';

export const BrandTrustStrip: React.FC = () => {
  return (
    <div className="bg-slate-900 border-y border-slate-800 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="text-center md:text-left">
            <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-extrabold block">
              Certified Multi-Brand Technicians
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white mt-0.5">
              Expert Repairs for All Inverter, Split & Commercial AC Brands
            </h3>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Genuine Spare Parts</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Company Trained</span>
            </span>
          </div>
        </div>

        {/* Brand Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SUPPORTED_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/40 p-3 rounded-xl transition-all text-center group"
            >
              <div className="font-heading font-black text-base text-slate-200 group-hover:text-cyan-300 transition-colors">
                {brand.name}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                {brand.badge}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
