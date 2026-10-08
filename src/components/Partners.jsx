import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Building, Award } from 'lucide-react';
import { PARTNERS_LOGOS } from '../data/companyData';

export const Partners = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Duplicate items for continuous smooth infinite scrolling
  const marqueeItems = [...PARTNERS_LOGOS, ...PARTNERS_LOGOS];

  return (
    <section className="py-8 sm:py-10 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <span className="text-[11px] font-black uppercase tracking-widest text-brand-gold">
                PARTENAIRES & INSTITUTIONS
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black font-heading text-[#0B1B2B] mt-1">
              Ils Accordent Leur Confiance à HYDRO TPE SARL
            </h3>
          </div>

          {/* Scrolling controls & pause hint */}
          <div className="flex items-center space-x-2 self-end sm:self-auto">
            <span className="text-[11px] text-slate-400 font-medium hidden md:inline-block mr-2">
              (Défilement automatique • Survolez pour figer)
            </span>
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#0B1B2B] transition-colors border border-slate-200/80"
              aria-label="Faire défiler vers la gauche"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#0B1B2B] transition-colors border border-slate-200/80"
              aria-label="Faire défiler vers la droite"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Scrolling Ticker / Carousel with Left & Right Gradient Fade Masks */}
      <div className="relative w-full">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Container with manual scroll fallback */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar py-2"
        >
          <div className="animate-marquee flex items-center space-x-4 pl-4">
            {marqueeItems.map((partner, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center space-x-3.5 px-5 py-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200/90 hover:border-amber-300 transition-all duration-200 group cursor-pointer shadow-sm hover:shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-gold group-hover:scale-105 transition-transform shadow-2xs shrink-0">
                  <Building className="w-4 h-4 text-brand-gold" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-heading font-black text-xs sm:text-sm text-slate-900 group-hover:text-[#0B1B2B] transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {partner.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
