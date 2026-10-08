import React from 'react';
import { X, MapPin, Calendar, CheckCircle2, Building, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export const ProjectModal = ({ project, onClose, onOpenQuoteModal }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/60 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-brand-navy-950/80 hover:bg-brand-navy-900 text-white transition-colors"
            aria-label="Fermer la vue projet"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-gold text-brand-navy-950 text-[11px] font-bold uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[11px] font-semibold">
                {project.status}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              {project.title}
            </h3>
            
            <div className="flex items-center space-x-4 text-xs text-slate-300 mt-1">
              <span className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-brand-cyan-400" />
                {project.location}
              </span>
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                Année {project.year}
              </span>
            </div>
          </div>
        </div>

        {/* Project Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-700 text-sm leading-relaxed overflow-y-auto">
          {/* Key Metric Bar */}
          <div className="p-4 rounded-xl bg-brand-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Indicateur Technique Clé</span>
              <span className="text-lg font-bold font-heading text-brand-gold">{project.keyMetric}</span>
            </div>
            <div className="text-right sm:text-right">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Maître d'Ouvrage / Commanditaire</span>
              <span className="text-xs font-semibold text-slate-200">{project.client}</span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-brand-navy-950 font-heading mb-2">
              Présentation & Portée du Chantier
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-brand-navy-950 font-heading mb-3">
              Spécifications & Résultats Techniques Obtenus
            </h4>
            <div className="space-y-2.5">
              {project.details.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Fermer
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal(`Projet similaire à : ${project.title}`);
            }}
            className="px-5 py-2.5 text-xs font-bold text-brand-navy-950 bg-brand-gold hover:bg-brand-gold-400 rounded-lg shadow-md flex items-center transition-all"
          >
            <span>Lancer un Projet Similaire</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
