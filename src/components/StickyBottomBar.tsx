import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/98 backdrop-blur-lg border-t border-slate-200 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl flex items-center gap-2">
      {/* Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        id="sticky-mobile-call-btn"
        className="flex-1 min-h-[44px] py-2.5 bg-emerald-600 active:bg-emerald-700 text-white font-black text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform"
      >
        <Phone className="w-4 h-4 shrink-0" />
        <span className="whitespace-nowrap">Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Dr%20Air%20Cool,%20I%20need%20AC%20repair%20service%20in%20Mumbai`}
        target="_blank"
        rel="noopener noreferrer"
        id="sticky-mobile-whatsapp-btn"
        className="flex-1 min-h-[44px] py-2.5 bg-teal-600 active:bg-teal-700 text-white font-black text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform"
      >
        <MessageSquare className="w-4 h-4 shrink-0" />
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>

      {/* Book Online Button */}
      <button
        onClick={onOpenBooking}
        id="sticky-mobile-book-btn"
        className="flex-1 min-h-[44px] py-2.5 bg-sky-600 active:bg-sky-700 text-white font-black text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm active:scale-98 transition-transform"
      >
        <Calendar className="w-4 h-4 shrink-0" />
        <span className="whitespace-nowrap">Book (₹150 OFF)</span>
      </button>
    </div>
  );
};
