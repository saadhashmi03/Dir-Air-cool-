import React, { useState, useMemo } from 'react';
import { 
  Check, Clock, ShieldCheck, Sparkles, MessageSquare, 
  ArrowRight, Search, ChevronDown, ChevronUp, Wrench, Award, CheckCircle2 
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onBookService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cleaning', label: 'Jet Foam Wash' },
    { id: 'repair', label: 'Repair & PCB' },
    { id: 'gas', label: 'Gas Refilling' },
    { id: 'installation', label: 'Fitting & Shifting' },
    { id: 'commercial', label: 'Commercial AMC' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((s) => {
      const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        s.title.toLowerCase().includes(q) || 
        s.description.toLowerCase().includes(q) ||
        s.features.some(f => f.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedServiceId(prev => prev === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-extrabold px-3 py-1 rounded-full mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Certified Transparent Rate Card</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Professional AC Repair & Servicing Catalog
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Standardized fixed pricing for all Mumbai households and corporate offices. Performed with industrial 120-Bar jet pumps, 100% waterproof catch jackets, and verified digital gas scales.
            </p>
          </div>

          {/* Quick Trust Pill */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>30-Day Cooling Assurance</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-2 rounded-xl shadow-xs">
              <Award className="w-4 h-4 text-sky-600" />
              <span>Zero Wall Stain Guarantee</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Instant Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Jet wash, Gas refill, Leak, PCB, Installation)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const count = cat.id === 'all'
                ? SERVICES_DATA.length
                : SERVICES_DATA.filter(s => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 min-h-[40px] ${
                    activeCategory === cat.id
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    activeCategory === cat.id ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
            <Wrench className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-lg text-slate-800">
              No service matching "{searchQuery}"
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              We repair all AC issues. Call our Mumbai workshop directly for an immediate estimate.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
              >
                Reset Filter
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl"
              >
                Call: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredServices.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              const savings = service.originalPrice ? service.originalPrice - service.price : 0;

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-3xl border transition-all duration-200 hover:shadow-xl flex flex-col justify-between overflow-hidden group ${
                    service.popular ? 'border-sky-400 ring-2 ring-sky-400/20 shadow-md' : 'border-slate-200'
                  }`}
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                      
                      {/* Popular / Best Seller Tag */}
                      {service.popular && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md tracking-wider">
                          ⭐ Most Popular in Mumbai
                        </div>
                      )}

                      {/* Time and Savings in image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <div className="flex items-center gap-1.5 text-xs font-semibold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                          <Clock className="w-3.5 h-3.5 text-cyan-300" />
                          <span>{service.timeEstimate}</span>
                        </div>
                        {savings > 0 && (
                          <div className="bg-emerald-500 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
                            Save ₹{savings}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 space-y-4">
                      
                      <div>
                        {service.acTypeSupported && (
                          <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 uppercase tracking-wide inline-block mb-1.5">
                            {service.acTypeSupported}
                          </span>
                        )}
                        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Pricing Bar */}
                      <div className="flex items-baseline justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">Fixed Doorstep Rate</span>
                          <div className="flex items-baseline gap-2">
                            <span className="font-heading text-2xl sm:text-3xl font-black text-slate-900">
                              ₹{service.price}
                            </span>
                            {service.originalPrice && (
                              <span className="text-xs sm:text-sm text-slate-400 line-through">
                                ₹{service.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">Assurance</span>
                          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 justify-end">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{service.warrantyDays || 30}-Day Guarantee</span>
                          </span>
                        </div>
                      </div>

                      {/* What's Included */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Included in Service:
                        </span>
                        <div className="space-y-1.5">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expandable Step-by-Step Procedure Accordion */}
                      {service.steps && service.steps.length > 0 && (
                        <div className="pt-2 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => toggleExpand(service.id)}
                            className="w-full flex items-center justify-between text-xs font-bold text-sky-700 hover:text-sky-900 py-1 transition-colors"
                          >
                            <span>{isExpanded ? 'Hide Technician Process' : 'View Technician 5-Step Process'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>

                          {isExpanded && (
                            <div className="mt-3 p-3 bg-sky-50/60 rounded-xl border border-sky-100 text-xs space-y-2 animate-in fade-in duration-200">
                              <span className="text-[10px] uppercase font-black text-sky-900 tracking-wider block">
                                SOP Procedure by Certified Technician:
                              </span>
                              <ol className="space-y-1.5 pl-4 list-decimal text-slate-700 text-[11px] leading-relaxed">
                                {service.steps.map((st, i) => (
                                  <li key={i}>{st}</li>
                                ))}
                              </ol>
                              {service.sparePartGuarantee && (
                                <div className="pt-1.5 border-t border-sky-200/60 text-[10px] text-sky-800 font-semibold flex items-center gap-1">
                                  <span>🛡️ {service.sparePartGuarantee}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Card Actions Bottom */}
                  <div className="p-5 pt-0 mt-auto border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onBookService(service)}
                      id={`catalog-book-${service.id}`}
                      className="flex-1 min-h-[44px] py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-extrabold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-sky-600/20 active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Dr%20Air%20Cool,%20I%20want%20to%20book%20${encodeURIComponent(service.title)}%20(₹${service.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-3.5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-xl transition-all flex items-center justify-center"
                      title="Direct WhatsApp Booking"
                      aria-label="Book on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Multi-Unit Bulk Discount Banner */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-sky-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider block">
              Multi-AC Discount for Mumbai Homes & Offices
            </span>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
              Servicing 2 or More ACs in One Visit?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Get an instant <span className="text-emerald-400 font-bold">₹100 to ₹150 OFF</span> per unit when servicing multiple air conditioners at the same address.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-xl text-xs sm:text-sm text-center shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Call For Multi-AC Quote</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Dr%20Air%20Cool,%20I%20have%20multiple%20ACs%20for%20servicing%20in%20Mumbai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
