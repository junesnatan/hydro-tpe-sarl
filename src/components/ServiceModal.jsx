import React from 'react';
import { X, CheckCircle2, Cpu, FileText, ArrowRight, ShieldCheck, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ServiceModal = ({ service, onClose, onOpenQuoteModal }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Service Image Banner */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/60 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-brand-navy-950/70 hover:bg-brand-navy-900 text-white transition-colors"
            aria-label="Fermer la modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-gold text-brand-navy-950 text-xs font-bold uppercase tracking-wider mb-2">
              Spécialité Technique
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-700 text-sm leading-relaxed overflow-y-auto">
          <div>
            <h4 className="text-base font-bold text-brand-navy-950 font-heading mb-2">
              Description de l'Expertise
            </h4>
            <p className="text-slate-600">
              {service.description}
            </p>
          </div>

          {/* Key Deliverables & Methodologies */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-brand-navy-950 font-heading">
              Cahier des Charges & Méthodologie d'Exécution
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipments & Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-brand-navy-50 border border-brand-navy-100 space-y-2">
              <div className="flex items-center text-brand-navy-900 font-bold text-xs uppercase tracking-wider">
                <Wrench className="w-4 h-4 mr-2 text-brand-cyan-600" />
                Matériels & Outils Mobilisés
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                {service.equipments.map((eq, i) => (
                  <li key={i}>{eq}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 space-y-2">
              <div className="flex items-center text-brand-navy-900 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4 mr-2 text-brand-gold" />
                Livrables & Dossier Final (DOE)
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                {service.deliverables.map((dl, i) => (
                  <li key={i}>{dl}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Besoin d'une offre technique pour ce pôle ?
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(service.title);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold text-brand-navy-950 bg-brand-gold hover:bg-brand-gold-400 rounded-lg shadow-md flex items-center justify-center transition-all"
            >
              <span>Demander un Devis</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
