import React, { useState } from 'react';
import { FAQS, COMPANY_INFO } from '../data/companyData';
import { ChevronDown, HelpCircle, Phone, ArrowRight, MessageSquare } from 'lucide-react';

export const FAQ = ({ onOpenQuoteModal }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            QUESTIONS FRÉQUENTES & CADRE RÉGLEMENTAIRE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Réponses Techniques aux Donneurs d'Ordres
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Tout ce que vous devez savoir sur la réglementation, les normes géophysiques et les conditions d'intervention d'HYDRO TPE SARL en République du Bénin.
          </p>
        </div>

        {/* 2-Column Layout (Exact Replica of Case Construction Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Image with Engineer & Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-brand-navy-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Ingénieurs de terrain HYDRO TPE SARL au Bénin"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/40 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
                  Permanence Technique
                </span>
                <p className="text-xs text-slate-200">
                  Besoin d'un éclairage spécifique sur un sol difficile ou un appel d'offres en cours ?
                </p>
              </div>
            </div>

            {/* Direct Assistance Box */}
            <div className="p-6 rounded-2xl bg-brand-navy-900 border border-brand-navy-800 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Ligne Directe Ingénieurs-Conseils
                  </h4>
                  <a href={`tel:${COMPANY_INFO.phonePrincipal.replace(/\s+/g, '')}`} className="text-sm font-extrabold text-brand-gold hover:underline">
                    {COMPANY_INFO.phonePrincipal}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-brand-navy-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Écoute & Orientation 7j/7</span>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="text-xs font-bold text-brand-cyan-400 hover:text-cyan-300 flex items-center"
                >
                  Poser une question
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-brand-navy-900 border-brand-gold/50 shadow-lg'
                      : 'bg-brand-navy-900/60 border-brand-navy-800/80 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className={`text-sm sm:text-base font-bold font-heading leading-snug ${
                      isOpen ? 'text-brand-gold' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-gold text-brand-navy-950' : 'bg-brand-navy-800 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-brand-navy-800/60 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
