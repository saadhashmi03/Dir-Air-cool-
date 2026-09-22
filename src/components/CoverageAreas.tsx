import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Search, ExternalLink, Phone, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, MUMBAI_LOCALITIES } from '../data/mockData';

interface CoverageAreasProps {
  onOpenBooking: (location?: string) => void;
}

export const CoverageAreas: React.FC<CoverageAreasProps> = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocality, setSelectedLocality] = useState<string>(MUMBAI_LOCALITIES[0].name);

  const zones = [
    { label: 'All Mumbai', filter: '' },
    { label: 'Kurla Hub', filter: 'Kurla' },
    { label: 'BKC / Bandra', filter: 'Bandra' },
    { label: 'Powai / Ghatkopar', filter: 'Ghatkopar' },
    { label: 'Andheri West', filter: 'Andheri' },
    { label: 'Chembur', filter: 'Chembur' }
  ];

  const filteredLocalities = MUMBAI_LOCALITIES.filter(loc => 
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentLocalityObj = MUMBAI_LOCALITIES.find(l => l.name === selectedLocality) || MUMBAI_LOCALITIES[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200" id="coverage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full border border-emerald-200 mb-3 shadow-xs">
            <Navigation className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fast Mumbai Doorstep Coverage</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Serving Kurla, BKC, Bandra, Andheri & All Mumbai
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Headquartered at Kamani, Kurla West with mobile vans and technicians positioned across major suburbs for 30–45 minute arrival.
          </p>
        </div>

        {/* Two-Column: Interactive Location Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Location Search & Localities List */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Quick Area Pill Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {zones.map((zone, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchTerm(zone.filter)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    searchTerm === zone.filter
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {zone.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your Mumbai pincode or area (e.g. Kurla, BKC, Bandra, Ghatkopar)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Selected Locality Live ETA Banner */}
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-sky-800 text-xs font-extrabold">
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>Doorstep ETA for {currentLocalityObj.name}:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-slate-900 text-lg sm:text-xl">
                    {currentLocalityObj.time} Arrival
                  </span>
                  <span className="text-xs text-slate-500">
                    (from Kurla West Central Hub)
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(currentLocalityObj.name)}
                className="min-h-[40px] px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-sm shrink-0 flex items-center justify-center gap-1.5 active:scale-95"
              >
                <span>Dispatch Technician Here</span>
                <span>→</span>
              </button>
            </div>

            {/* Localities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1 no-scrollbar">
              {filteredLocalities.map((loc, idx) => {
                const isSelected = selectedLocality === loc.name;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedLocality(loc.name)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-sky-50/80 border-sky-400 ring-2 ring-sky-400/20 shadow-sm'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <h4 className="font-heading font-extrabold text-sm text-slate-900">
                          {loc.name}
                        </h4>
                        <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1 shrink-0">
                          <Clock className="w-3 h-3 text-emerald-600" />
                          <span>{loc.time}</span>
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {loc.address}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-sky-700">
                        {isSelected ? '✓ Selected Locality' : 'Tap to Select'}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking(loc.name);
                        }}
                        className="text-xs font-bold text-slate-700 hover:text-sky-600 flex items-center gap-0.5"
                      >
                        <span>Book</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredLocalities.length === 0 && (
              <div className="text-center py-8 text-sm text-slate-500 bg-slate-50 rounded-2xl border border-slate-200 p-4">
                <p className="font-semibold text-slate-700">Can't spot your specific building or lane?</p>
                <p className="text-xs text-slate-500 mt-1">We service all Mumbai postal pin codes from Colaba to Dahisar and Thane.</p>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sky-600 font-extrabold text-xs mt-2.5 inline-block hover:underline">
                  Call {BUSINESS_INFO.phone} for immediate dispatch
                </a>
              </div>
            )}

          </div>

          {/* Right: Business Headquarters Card & Map Frame */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800 space-y-5">
            
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-600/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-sky-400 font-black block">
                  Official Central Workshop
                </span>
                <h3 className="font-heading font-black text-lg text-white leading-snug">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="rounded-2xl overflow-hidden border border-slate-700 aspect-video relative bg-slate-800 shadow-inner">
              <iframe
                title="Dr Air Cool Services Location"
                src="https://maps.google.com/maps?q=Shop+No+04+Jai+Ambika+Nagar+Sunder+Baug+Ln+Kamani+Kurla+West+Mumbai+400070&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact quick strip */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-slate-400">Open Hours:</span>
                <span className="font-extrabold text-emerald-400">{BUSINESS_INFO.hours}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="text-slate-400">Direct Helpline:</span>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-extrabold text-amber-300 hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={BUSINESS_INFO.googleSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-extrabold text-center flex items-center justify-center gap-1.5 border border-white/20 transition-colors"
              >
                <span>Google Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="min-h-[44px] py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black text-center flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/25 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Workshop</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
