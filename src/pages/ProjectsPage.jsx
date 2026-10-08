import React from 'react';
import { Link } from 'react-router-dom';
import { Projects } from '../components/Projects';
import { ImpactStats } from '../components/ImpactStats';
import { Testimonials } from '../components/Testimonials';
import { ArrowRight } from 'lucide-react';

export const ProjectsPage = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-[#0B1B2B] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=80')` }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            RÉFÉRENCES & CHANTIERS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white mb-4">
            Nos Réalisations au Bénin
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Découvrez une sélection de projets livrés par nos équipes : forages d'exploitation, châteaux d'eau, stations de pompage et voiries urbaines.
          </p>
        </div>
      </section>

      {/* Full Projects Component */}
      <Projects onOpenQuoteModal={onOpenQuoteModal} />

      {/* Impact Stats Banner */}
      <ImpactStats onOpenQuoteModal={onOpenQuoteModal} />

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-xl text-brand-navy-950">
              Un projet similaire à concrétiser ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Contactez-nous pour étudier les spécificités de votre sol et obtenir un dimensionnement précis.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-brand-gold hover:bg-amber-400 text-[#0B1B2B] font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center space-x-1.5"
            >
              <span>Nous Contacter</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
