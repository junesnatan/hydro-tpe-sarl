import React from 'react';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';

export const ContactPage = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-[#0B1B2B] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=80')` }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            CONSULTATION TECHNIQUE & LOCALISATION
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white mb-4">
            Contactez le Bureau d'Études
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Échangez directement avec nos ingénieurs pour vos travaux de forages, d'adduction d'eau ou de génie civil partout en République du Bénin.
          </p>
        </div>
      </section>

      {/* Full Contact Component */}
      <Contact />

      {/* FAQ Assistance */}
      <FAQ onOpenQuoteModal={onOpenQuoteModal} />

    </div>
  );
};
