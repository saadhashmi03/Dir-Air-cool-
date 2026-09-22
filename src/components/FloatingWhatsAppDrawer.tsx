import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const FloatingWhatsAppDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { text: "Book Jet Foam Wash (₹499)", icon: "🔥", msg: "Hi Dr Air Cool, I want to book Split AC Jet Foam Servicing for ₹499." },
    { text: "AC Not Cooling / Warm Air", icon: "❄️", msg: "Hi Dr Air Cool, my AC is running but not cooling the room. Need urgent inspection." },
    { text: "Water Dripping Inside Room", icon: "💧", msg: "Hi Dr Air Cool, water is leaking continuously from my indoor AC unit." },
    { text: "Gas Leakage & Refilling", icon: "⚡", msg: "Hi Dr Air Cool, I need AC gas leakage check and refrigerant refill." },
    { text: "New AC Installation / Shifting", icon: "🔧", msg: "Hi Dr Air Cool, I need AC installation / shifting in Mumbai." }
  ];

  const handleSendPrompt = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 z-40">
      {/* Drawer Window */}
      {isOpen && (
        <div className="bg-slate-900 text-white rounded-3xl max-w-xs sm:max-w-sm w-80 shadow-2xl border border-emerald-500/40 overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm">
                  Dr Air Cool WhatsApp Help
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                  <span>Online now • Replies in ~2 mins</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-700/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat options */}
          <div className="p-4 space-y-2 text-xs">
            <p className="text-slate-300 mb-2 font-medium">
              Select an issue below for instant direct WhatsApp quote:
            </p>

            <div className="space-y-1.5">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(p.msg)}
                  className="w-full p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 text-left transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2 text-slate-200 font-medium">
                    <span>{p.icon}</span>
                    <span>{p.text}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Kurla West, Mumbai</span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-300 font-bold hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/40 transition-transform active:scale-95 group border-2 border-white/20"
        aria-label="Open WhatsApp Chat"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
        <span className="text-xs tracking-wide hidden sm:inline font-heading font-black">
          {isOpen ? 'Close Chat' : 'Chat on WhatsApp'}
        </span>
        <span className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-pulse"></span>
      </button>
    </div>
  );
};
