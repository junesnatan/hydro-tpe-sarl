import React from 'react';
import { Link } from 'react-router-dom';
import { About } from '../components/About';
import { Partners } from '../components/Partners';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutPage = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-[#0B1B2B] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=80')` }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            NOTRE HISTOIRE & EXPERTISE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white mb-4">
            À Propos de HYDRO TPE SARL
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Bureau d'études techniques, cabinet d'ingénieur-conseil et entreprise générale de travaux hydrauliques et BTP agréée en République du Bénin.
          </p>
        </div>
      </section>

      {/* Full About Component (Tabs, Story, Metrics) */}
      <About onOpenQuoteModal={onOpenQuoteModal} />

      {/* Partners Section */}
      <Partners />

      {/* Bottom CTA to Contact or Services */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-xl text-brand-navy-950">
              Prêt à collaborer avec nos ingénieurs ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Consultez nos réalisations ou demandez une étude technique personnalisée.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/services"
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Nos Services
            </Link>
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
