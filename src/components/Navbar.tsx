import React, { useState } from 'react';
import { Phone, Clock, MapPin, Star, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div id="top-announcement-bar" className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 text-white text-xs py-2 px-4 border-b border-sky-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="bg-amber-400 text-sky-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">Special Offer</span>
            <span className="text-slate-200">
              ⚡ Mumbai Heat Special: Flat ₹150 OFF on Jet Foam Service | 45-Min Arrival
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.hours}</span>
            </div>
            <span className="hidden md:inline text-slate-500">|</span>
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="top-bar-phone-link"
              className="hidden md:flex items-center gap-1.5 font-bold text-amber-300 hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Google Score */}
            <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                <span className="font-heading font-black text-2xl tracking-tighter">Dr.</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none">
                    Dr Air Cool <span className="text-sky-600">Services</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-amber-900 ml-1">4.9</span>
                    <span className="text-slate-500 text-[11px] ml-1">(72 Reviews)</span>
                  </div>
                  <span className="text-[11px] text-slate-500 hidden sm:inline">• Kurla West, Mumbai</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <a href="#services" className="hover:text-sky-600 transition-colors" id="nav-link-services">Services</a>
              <a href="#calculator" className="hover:text-sky-600 transition-colors" id="nav-link-calculator">Price Estimator</a>
              <a href="#reviews" className="hover:text-sky-600 transition-colors" id="nav-link-reviews">Google Reviews</a>
              <a href="#why-us" className="hover:text-sky-600 transition-colors" id="nav-link-why-us">Why Us</a>
              <a href="#coverage" className="hover:text-sky-600 transition-colors" id="nav-link-coverage">Mumbai Areas</a>
              <a href="#faqs" className="hover:text-sky-600 transition-colors" id="nav-link-faqs">FAQs</a>
            </nav>

            {/* Call & Book CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="header-call-button"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg border-2 border-slate-200 hover:border-sky-500 text-slate-800 font-bold text-sm transition-all hover:bg-sky-50"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-slate-500 uppercase font-semibold leading-none">Call Technician</span>
                  <span className="text-xs font-extrabold">{BUSINESS_INFO.phone}</span>
                </div>
              </a>

              <button
                onClick={() => onOpenBooking()}
                id="header-book-service-btn"
                className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white font-bold px-4 py-2.5 rounded-lg text-sm shadow-md shadow-sky-600/20 hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Book Service</span>
                <span className="bg-sky-500/40 text-[10px] px-1.5 py-0.5 rounded font-medium">₹150 OFF</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                id="header-mobile-quick-call"
                className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-sm"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                className="p-2 text-slate-700 hover:text-sky-600"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-dropdown" className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 mb-3">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{BUSINESS_INFO.shortAddress}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold mt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>45-Min Doorstep in Mumbai • 30-Day Guarantee</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-100/70 text-slate-800 hover:bg-sky-50"
              >
                Our Services
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-100/70 text-slate-800 hover:bg-sky-50"
              >
                Price Calculator
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-100/70 text-slate-800 hover:bg-sky-50"
              >
                Google Reviews (72)
              </a>
              <a 
                href="#coverage" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-100/70 text-slate-800 hover:bg-sky-50"
              >
                Mumbai Areas
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                id="mobile-menu-book-btn"
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg text-center shadow-md text-sm"
              >
                Book Doorstep AC Service (₹150 OFF)
              </button>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Dr%20Air%20Cool%20Services,%20I%20need%20AC%20repair%20service%20in%20Mumbai`}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-menu-whatsapp-btn"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-center shadow-sm text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
