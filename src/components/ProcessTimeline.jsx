import React from 'react';
import { WORK_PROCESS } from '../data/companyData';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const ProcessTimeline = ({ onOpenQuoteModal }) => {
  return (
    <section id="methode" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            DÉMARCHE MÉTHODOLOGIQUE ÉPROUVÉE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight">
            De l'Étude Préalable à la Réception Sans Réserve
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Chaque projet confié à HYDRO TPE SARL fait l'objet d'un protocole d'ingénierie rigoureux garantissant la conformité aux normes internationales, la pérennité de l'ouvrage et la maîtrise des coûts.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {WORK_PROCESS.map((item, index) => (
            <div
              key={item.step}
              className="relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Step Number Top Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-3xl text-slate-200 group-hover:text-brand-gold transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-navy-50 text-brand-navy-900 border border-brand-navy-100">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-brand-navy-950 mb-2 leading-snug group-hover:text-brand-cyan-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-brand-gold">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                <span>Validation formelle</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Process Section */}
        <div className="mt-14 bg-brand-navy-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-navy-800 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
              Vous avez un appel d'offres ou des termes de référence (TDR) ?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nos ingénieurs analysent votre cahier des charges sous 48h et élaborent une offre technique et financière sur-mesure.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="shrink-0 px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
          >
            <span>Soumettre un Cahier des Charges</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
