import React, { useState } from 'react';
import { Phone, MessageSquare, Star, ShieldCheck, Clock, MapPin, Zap, CheckCircle2, ChevronRight, Award, Play, Flame, ThermometerSun } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenVideo }) => {
  const [selectedAcType, setSelectedAcType] = useState('Split AC');
  const [selectedIssue, setSelectedIssue] = useState('Not Cooling Properly');
  const [customerPincode, setCustomerPincode] = useState('');

  const handleQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(`${selectedAcType} - ${selectedIssue}`);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 text-white pt-8 pb-16 lg:py-20">
      {/* Ambient background glow & subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mumbai Live Temperature & Urgency Alert Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
          <div className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 px-3 py-1 rounded-full font-bold shadow-xs">
            <ThermometerSun className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span>Mumbai Today: 34°C (Humidity 78%) • Peak AC Load</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full font-bold shadow-xs">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Today's Status: 6 Technicians Active • 3 Slots Left</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Google Verified Rating Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-slate-800/80 backdrop-blur-md border border-sky-500/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm text-slate-200 shadow-lg">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="font-extrabold text-white">4.9 / 5</span>
              <span className="text-slate-400 font-medium">(72 Verified Google Reviews)</span>
              <span className="bg-sky-500/30 text-sky-300 text-[11px] font-bold px-2 py-0.5 rounded-full">
                Kurla West, Mumbai
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Mumbai’s Expert <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">AC Repair & Jet Foam</span> Servicing
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Certified cooling technician at your doorstep within <span className="text-cyan-300 font-bold">45 minutes</span>. Specialized 2x power jet cleaning with waterproof bag, precision gas charging, and guaranteed cooling in the Mumbai heat.
            </p>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 pb-2">
              <div className="flex items-center gap-2 text-left bg-slate-800/50 border border-slate-700/60 p-2.5 rounded-lg backdrop-blur-xs">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="text-xs">
                  <span className="block font-bold text-slate-100">45-Min Arrival</span>
                  <span className="text-slate-400 text-[11px]">Across Mumbai</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left bg-slate-800/50 border border-slate-700/60 p-2.5 rounded-lg backdrop-blur-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <span className="block font-bold text-slate-100">30-Day Warranty</span>
                  <span className="text-slate-400 text-[11px]">Workmanship Cover</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-left bg-slate-800/50 border border-slate-700/60 p-2.5 rounded-lg backdrop-blur-xs col-span-2 sm:col-span-1">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <span className="block font-bold text-slate-100">100% Clean Wash</span>
                  <span className="text-slate-400 text-[11px]">Zero Wall Stains</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="hero-call-now-cta"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold px-6 py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all text-base active:scale-95 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] uppercase tracking-wider text-emerald-100 font-semibold leading-none">Emergency Helpline</span>
                  <span className="text-lg font-black tracking-tight">{BUSINESS_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Dr%20Air%20Cool%20Services,%20I%20need%20AC%20repair%20service%20in%20Mumbai`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="flex items-center justify-center gap-2.5 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600 text-white font-bold px-5 py-4 rounded-xl shadow-md transition-all text-sm active:scale-95"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Booking</span>
              </a>

              {onOpenVideo && (
                <button
                  type="button"
                  onClick={onOpenVideo}
                  id="hero-watch-demo-btn"
                  className="flex items-center justify-center gap-2 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-cyan-300 font-bold px-4 py-4 rounded-xl shadow-md transition-all text-sm active:scale-95"
                >
                  <Play className="w-4 h-4 fill-cyan-300" />
                  <span>Watch Jet Demo (0:22)</span>
                </button>
              )}
            </div>

            {/* Address pill */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

          </div>

          {/* Right Column: Interactive Instant Cost Calculator & Quick Book Widget */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-sky-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                ₹150 OFF Applied
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-amber-400" />
                <h3 className="font-heading text-lg font-bold text-white">Instant Service Booking</h3>
              </div>
              <p className="text-xs text-slate-300 mb-5">
                Book in 30 seconds. Pay only after service completion & satisfaction.
              </p>

              <form onSubmit={handleQuickEstimate} className="space-y-4">
                {/* AC Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    1. Select Your AC Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Split AC', 'Window AC'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedAcType(type)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                          selectedAcType === type
                            ? 'bg-sky-600 text-white border-sky-400 shadow-md'
                            : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Issue Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    2. Select Problem / Required Service
                  </label>
                  <select
                    value={selectedIssue}
                    onChange={(e) => setSelectedIssue(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="Jet Foam Cleaning Service">Split/Window Jet Foam Deep Service (₹499)</option>
                    <option value="Not Cooling Properly">AC Not Cooling / Warm Air (Inspection ₹249)</option>
                    <option value="Water Dripping Inside Room">Water Leaking Inside Room</option>
                    <option value="Gas Leakage & Refill">Gas Refilling & Leak Detection</option>
                    <option value="New AC Installation">New AC Installation (From ₹1199)</option>
                    <option value="AC Dismantling / Shifting">AC Uninstallation / Shifting (₹599)</option>
                    <option value="Loud Noise or Power Trip">Loud Noise / Tripping Power</option>
                  </select>
                </div>

                {/* Location / Area */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    3. Your Area in Mumbai
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kurla West, BKC, Bandra, Andheri, Ghatkopar"
                    value={customerPincode}
                    onChange={(e) => setCustomerPincode(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                {/* Offer notice */}
                <div className="p-3 bg-sky-950/60 border border-sky-700/50 rounded-lg flex items-start gap-2.5 text-xs text-sky-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Zero Visit Fee</span> if repair or servicing is approved. 30-day post service guarantee included.
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  id="hero-quick-book-submit-btn"
                  className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold rounded-xl shadow-lg shadow-sky-600/30 text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Book Doorstep Technician</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Technicians available now
                </span>
                <span>Open till 10:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
