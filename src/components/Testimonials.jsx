import React from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            TÉMOIGNAGES & RETOURS D'EXPÉRIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight">
            La Parole à Nos Maîtres d'Ouvrage
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Découvrez comment notre rigueur d'ingénierie et le respect strict de nos engagements font la différence sur le terrain.
          </p>
        </div>

        {/* 3 Testimonials Grid (Case Construction mockup style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center space-x-1 mb-4 text-brand-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-gold/40"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-navy-950">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-brand-cyan-700 font-semibold">
                    {item.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
