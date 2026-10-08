import React from 'react';
import { PARTNERS_LOGOS } from '../data/companyData';

export const Partners = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Exact Built Right Style: TRUSTED BY / Building Strong Relationships) */}
        <div className="mb-8">
          <div className="text-[11px] font-black uppercase tracking-widest text-brand-gold mb-1">
            PARTENAIRES STRATÉGIQUES
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-heading text-[#0B1B2B]">
            Bâtir des Relations de Confiance Durables
          </h3>
        </div>

        {/* Partners Logos row (Clean monochromatic/subtle badges) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {PARTNERS_LOGOS.map((partner, index) => (
            <div
              key={index}
              className="p-5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all flex flex-col items-center justify-center text-center group"
            >
              <span className="font-heading font-black text-xs sm:text-sm text-slate-800 group-hover:text-[#0B1B2B] transition-colors leading-snug">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">
                {partner.type}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
