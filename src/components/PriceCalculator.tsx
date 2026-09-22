import React, { useState } from 'react';
import { Calculator, MessageSquare, Check, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface PriceCalculatorProps {
  onOpenBookingWithEstimate: (details: string) => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ onOpenBookingWithEstimate }) => {
  const [acType, setAcType] = useState<'split' | 'window'>('split');
  const [acQuantity, setAcQuantity] = useState<number>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(['jet-service']);

  const serviceOptions = [
    {
      id: 'jet-service',
      name: 'Deep Foam Jet Service',
      splitPrice: 499,
      windowPrice: 399,
      description: 'High pressure pump wash with waterproof jacket'
    },
    {
      id: 'gas-refill',
      name: 'Full Gas Charging (R32/410/22)',
      splitPrice: 1899,
      windowPrice: 1699,
      description: 'Leak detection, nitrogen testing & full gas cylinder recharge'
    },
    {
      id: 'water-leak',
      name: 'Water Dripping / Leak Fix',
      splitPrice: 349,
      windowPrice: 299,
      description: 'Clearing choked drain pipe & drain tray leveling'
    },
    {
      id: 'installation',
      name: 'AC Installation / Fitting',
      splitPrice: 1199,
      windowPrice: 699,
      description: 'Complete indoor & outdoor mounting with vacuum check'
    },
    {
      id: 'uninstallation',
      name: 'AC Uninstallation / Dismantle',
      splitPrice: 599,
      windowPrice: 399,
      description: 'Gas lock pump-down with zero refrigerant leakage'
    }
  ];

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(id => id !== serviceId));
      }
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  // Pricing calculations
  const calculatePerUnitTotal = () => {
    return selectedServices.reduce((sum, serviceId) => {
      const s = serviceOptions.find(opt => opt.id === serviceId);
      if (!s) return sum;
      return sum + (acType === 'split' ? s.splitPrice : s.windowPrice);
    }, 0);
  };

  const perUnitTotal = calculatePerUnitTotal();
  const subtotal = perUnitTotal * acQuantity;
  const multiUnitDiscount = acQuantity > 1 ? (acQuantity - 1) * 100 : 0;
  const promoDiscount = 150;
  const grandTotal = Math.max(249, subtotal - multiUnitDiscount - promoDiscount);

  const getEstimateSummaryString = () => {
    const serviceNames = selectedServices
      .map(id => serviceOptions.find(opt => opt.id === id)?.name)
      .join(', ');
    return `${acQuantity}x ${acType === 'split' ? 'Split AC' : 'Window AC'} (${serviceNames}) - Est. Total: ₹${grandTotal}`;
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Dr Air Cool Services,\nI calculated my AC service estimate on your website:\n` +
      `• AC Type: ${acType === 'split' ? 'Split AC' : 'Window AC'}\n` +
      `• Quantity: ${acQuantity} Units\n` +
      `• Services: ${selectedServices.map(id => serviceOptions.find(opt => opt.id === id)?.name).join(', ')}\n` +
      `• Estimated Amount: ₹${grandTotal} (after ₹150 discount)\n` +
      `Please confirm technician availability for my address in Mumbai.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your AC Service Cost Instantly
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            No bargaining, no surprise fees after visit. See exact transparent prices with special discounts applied.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Configuration Inputs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: AC Type */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Step 1: Choose AC Type
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAcType('split')}
                  className={`p-3.5 rounded-xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                    acType === 'split'
                      ? 'bg-sky-600 text-white border-sky-600 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span>Split AC (Wall Mounted)</span>
                  {acType === 'split' && <Check className="w-4 h-4 text-white" />}
                </button>
                <button
                  type="button"
                  onClick={() => setAcType('window')}
                  className={`p-3.5 rounded-xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                    acType === 'window'
                      ? 'bg-sky-600 text-white border-sky-600 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span>Window AC</span>
                  {acType === 'window' && <Check className="w-4 h-4 text-white" />}
                </button>
              </div>
            </div>

            {/* Step 2: Number of ACs */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Step 2: How Many ACs Need Service?
                </span>
                {acQuantity > 1 && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    ₹{multiUnitDiscount} Multi-AC Discount Applied
                  </span>
                )}
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {[1, 2, 3, 4].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setAcQuantity(qty)}
                    className={`py-3 rounded-xl border text-center font-extrabold text-sm transition-all ${
                      acQuantity === qty
                        ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {qty} {qty === 1 ? 'Unit' : 'Units'}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Services */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Step 3: Select Required Services (You can pick multiple)
              </span>

              <div className="space-y-2.5">
                {serviceOptions.map((opt) => {
                  const isChecked = selectedServices.includes(opt.id);
                  const price = acType === 'split' ? opt.splitPrice : opt.windowPrice;

                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-sky-50 border-sky-400 ring-1 ring-sky-400'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-sky-600 border-sky-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 text-sm block">
                            {opt.name}
                          </span>
                          <span className="text-xs text-slate-500 block">
                            {opt.description}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-heading font-extrabold text-slate-900 text-sm">
                          ₹{price}
                        </span>
                        <span className="text-[10px] text-slate-400 block">/ unit</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Price Summary Breakdown Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-sky-800/50">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <h3 className="font-heading font-bold text-lg text-white">Your Estimate Summary</h3>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
                  Guaranteed Quote
                </span>
              </div>

              {/* Breakdown lines */}
              <div className="py-4 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Selected AC:</span>
                  <span className="font-bold text-white">
                    {acQuantity}x {acType === 'split' ? 'Split AC' : 'Window AC'}
                  </span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Subtotal Rate:</span>
                  <span className="font-medium text-slate-200">₹{subtotal}</span>
                </div>

                {multiUnitDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Multi-AC Quantity Discount:</span>
                    <span>-₹{multiUnitDiscount}</span>
                  </div>
                )}

                <div className="flex justify-between text-amber-300 font-semibold">
                  <span>Mumbai Heat Wave Special Promo:</span>
                  <span>-₹{promoDiscount}</span>
                </div>

                <div className="flex justify-between text-slate-400 text-xs">
                  <span>Doorstep Visit & Inspection:</span>
                  <span className="text-emerald-400 font-bold">FREE (With Service)</span>
                </div>
              </div>

              {/* Total Display */}
              <div className="pt-4 pb-5 border-t border-slate-800 flex items-baseline justify-between">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Net Estimated Cost:
                  </span>
                  <span className="text-[11px] text-slate-400">All taxes & labor included</span>
                </div>
                <div className="text-right">
                  <span className="font-heading text-3xl font-black text-amber-400">
                    ₹{grandTotal}
                  </span>
                </div>
              </div>

              {/* Assurance badges */}
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 mb-5 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>30-Day unconditional cooling warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pay after job completion & cold air satisfaction</span>
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => onOpenBookingWithEstimate(getEstimateSummaryString())}
                  id="calc-book-online-btn"
                  className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold rounded-xl shadow-lg shadow-sky-600/30 text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Book Technician at This Price</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  id="calc-whatsapp-btn"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Quote to WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
