import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Check, ArrowRight, MoveHorizontal, ShieldCheck, Zap } from 'lucide-react';

export const BeforeAfterGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const comparisons = [
    {
      title: "Split AC Indoor Cooling Coils",
      subtitle: "Evaporator Aluminum Fins",
      beforeDesc: "Choked with thick dust, mould, and grease causing weak warm airflow and sky-high electricity bills.",
      afterDesc: "Deep chemical foam jet blasted. 100% unrestricted airflow with instant 16°C chill.",
      beforeImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      coolingGain: "+40% Faster Cooling",
      powerSaving: "Saves ~25% Power",
      stats: "Airflow doubled from 180 CFM to 390 CFM"
    },
    {
      title: "Indoor Cylindrical Blower Wheel",
      subtitle: "Rotary Cross-Flow Fan",
      beforeDesc: "Bacterial slime and fungal debris creating musty foul smell and loud straining vibration.",
      afterDesc: "High-pressure sanitization and bio-cleaning spray. Pure odorless fresh mountain-like air.",
      beforeImg: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",
      coolingGain: "Zero Odour Airflow",
      powerSaving: "Silent Whispering Fan",
      stats: "Noise level reduced from 52dB to 28dB"
    },
    {
      title: "Outdoor Condenser Unit",
      subtitle: "Heat Exchanger Matrix",
      beforeDesc: "Blocked by Mumbai city soot and dust causing compressor overheating and frequent MCB trip.",
      afterDesc: "120-Bar pressurized outdoor blast. Rapid heat expulsion preventing compressor motor breakdown.",
      beforeImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80",
      coolingGain: "Prevents Overheating",
      powerSaving: "Extends Compressor Life",
      stats: "Head pressure lowered by 35 PSI"
    }
  ];

  const current = comparisons[activeTab];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-black px-3.5 py-1 rounded-full mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Visual Proof</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Drag the Slider: Before vs After Jet Servicing
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Standard dry cloth dusting only touches the surface. Experience the power of our 120-Bar jet foam wash that penetrates through deep aluminum cooling coils.
          </p>
        </div>

        {/* Tab Switchers */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          {comparisons.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap min-h-[44px] flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 ring-2 ring-slate-900/10'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-8 shadow-xl">
          
          {/* Draggable Split Viewer */}
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] select-none cursor-ew-resize border border-slate-200 shadow-inner group"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full background) */}
            <img
              src={current.afterImg}
              alt={`Clean After: ${current.title}`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-black uppercase px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 z-10 pointer-events-none">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>After: Dr Air Cool Jet Wash</span>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={current.beforeImg}
                alt={`Dirty Before: ${current.title}`}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-rose-600/90 backdrop-blur-md text-white text-xs font-black uppercase px-3 py-1.5 rounded-lg shadow-md z-10 pointer-events-none">
                <span>Before: Choked Dirty Coil</span>
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 border-2 border-slate-300 shadow-2xl flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-sky-600" />
              </div>
            </div>

            {/* Subtle instructional prompt */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full pointer-events-none flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-cyan-300" />
              <span>Drag left or right to inspect cleanliness</span>
            </div>
          </div>

          {/* Description & Impact Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 pt-6 border-t border-slate-100 items-center">
            
            <div className="md:col-span-7 space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600 block">
                {current.subtitle}
              </span>
              <h3 className="font-heading font-black text-xl text-slate-900">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {current.afterDesc}
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Lab verification:</span>
                <span>{current.stats}</span>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="text-[10px] uppercase font-bold text-emerald-700 block">Cooling Efficiency</span>
                <span className="font-heading font-black text-lg text-emerald-900 block mt-0.5">{current.coolingGain}</span>
                <span className="text-[11px] text-emerald-700 leading-tight block mt-0.5">Airflow restored to factory output</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200">
                <span className="text-[10px] uppercase font-bold text-sky-700 block">Electricity Consumption</span>
                <span className="font-heading font-black text-lg text-sky-900 block mt-0.5">{current.powerSaving}</span>
                <span className="text-[11px] text-sky-700 leading-tight block mt-0.5">Compressor cuts off quicker</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
