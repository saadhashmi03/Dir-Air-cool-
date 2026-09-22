import React from 'react';
import { Clock, ShieldCheck, Droplets, CheckCircle2, Wrench, Sparkles, Award, UserCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: <Clock className="w-6 h-6 text-sky-600" />,
      title: "45-Minute Doorstep Arrival",
      desc: "Based at Kamani, Kurla West, our mobile technician vans reach Kurla, BKC, Bandra, Andheri, and Chembur in record time."
    },
    {
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
      title: "100% Mess-Free Jet Wash",
      desc: "We fit a custom waterproof service jacket around your AC indoor unit. Zero water spills or dirty oil stains on your painted walls or floor."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "30-Day Cooling Guarantee",
      desc: "Every repair, foam wash, and service comes backed by a 30-day guarantee. If any issue occurs, we fix it free of charge."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "Genuine Gas & Spare Parts",
      desc: "100% brand-certified copper tubes, heavy-duty capacitors, and digitally weighed R32 / R410A / R22 refrigerant cylinders."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-teal-600" />,
      title: "Fixed Rates Before We Start",
      desc: "No sudden price hikes. You receive a crystal-clear estimate before work begins, matching our transparent catalog rates."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      title: "Police & Background Verified",
      desc: "Polite, uniformed, and verified technicians who respect your home privacy and follow clean footwear hygiene."
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full border border-sky-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Dr Air Cool Advantage</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Mumbai Homeowners Choose Dr Air Cool
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Air conditioning in Mumbai's humid climate is a necessity, not a luxury. We deliver reliable, honest cooling within minutes.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Operational Hours Strip */}
        <div className="mt-12 bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Available 7 Days a Week</span>
            </div>
            <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Open Daily: 8:00 AM – 10:00 PM (Emergency Late Evening Calls Welcome)
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Need urgent cooling before bedtime? Our technician team is on stand-by across Central & Western Mumbai.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full md:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm rounded-xl shadow-lg transition-all active:scale-95 text-center shrink-0"
          >
            Call {BUSINESS_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
