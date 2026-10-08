import React from 'react';
import { Link } from 'react-router-dom';
import { Services } from '../components/Services';
import { FAQ } from '../components/FAQ';
import { ArrowRight } from 'lucide-react';

export const ServicesPage = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-[#0B1B2B] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=80')` }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            PÔLES D'EXPERTISE & INGÉNIERIE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white mb-4">
            Nos Prestations Techniques
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            De la reconnaissance hydrogéologique et foration profonde aux châteaux d'eau, réseaux AEP et maîtrise d'œuvre sur l'ensemble du Bénin.
          </p>
        </div>
      </section>

      {/* Full Services Component (Interactive filter pills & technical modals) */}
      <Services onOpenQuoteModal={onOpenQuoteModal} />

      {/* Technical FAQ */}
      <FAQ onOpenQuoteModal={onOpenQuoteModal} />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-xl text-brand-navy-950">
              Besoin d'un devis estimatif ou d'une visite de site ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Nos ingénieurs examinent votre cahier des charges et vous répondent dans les plus brefs délais.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/projets"
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Voir les Réalisations
            </Link>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3 rounded-xl bg-brand-gold hover:bg-amber-400 text-[#0B1B2B] font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center space-x-1.5"
            >
              <span>Demander un Devis</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
