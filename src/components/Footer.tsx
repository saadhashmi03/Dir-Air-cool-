import React from 'react';
import { Phone, MapPin, Clock, Star, ExternalLink, ShieldCheck, Heart, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center text-white font-heading font-black text-xl shadow-md">
                Dr.
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                Dr Air Cool <span className="text-sky-400">Services</span>
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Mumbai's trusted doorstep air conditioning repair, deep jet foam servicing, and installation specialists. Providing 45-minute rapid response and 30-day cooling assurance.
            </p>

            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-xs w-fit">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-slate-400">({BUSINESS_INFO.reviewCount} Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              AC Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Split AC Jet Foam Wash</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Window AC Overhaul</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gas Leak Detection & Refill</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Water Leakage Unclogging</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AC Installation & Fitting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial AMC Contracts</a></li>
            </ul>
          </div>

          {/* Mumbai Localities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Coverage Localities
            </h4>
            <ul className="space-y-2">
              <li><a href="#coverage" className="hover:text-white transition-colors">Kurla West & East (HQ)</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Bandra Kurla Complex (BKC)</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Bandra West & East</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Santacruz, Kalina & Vidyavihar</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Ghatkopar & Chembur</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Andheri East & West</a></li>
            </ul>
          </div>

          {/* Direct Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-300 font-bold hover:underline text-sm">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">{BUSINESS_INFO.hours}</span>
              </div>

              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.googleSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 underline font-semibold"
                >
                  <span>View Official Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Serving Mumbai, Maharashtra.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>30-Day Guaranteed Cooling Warranty</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
