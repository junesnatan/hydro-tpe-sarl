import React, { useState } from 'react';
import { 
  Droplets, Compass, ShieldAlert, Building2, ArrowRight, CheckCircle2, 
  ExternalLink, Sparkles 
} from 'lucide-react';
import { SERVICES } from '../data/companyData';
import { ServiceModal } from './ServiceModal';

export const Services = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'Toutes les Prestations' },
    { id: 'hydraulique', label: 'Hydraulique & Forages' },
    { id: 'conseil-bureau-etudes', label: 'Ingénieur-Conseil & MOE' },
    { id: 'assainissement', label: 'Assainissement & Drainage' },
    { id: 'btp-vrd', label: 'BTP, VRD & Aménagements' },
  ];

  const filteredServices = activeFilter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
              PÔLES D'EXPERTISE TECHNIQUE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight">
              Nos Prestations en Hydraulique & Ingénierie-Conseil
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Des études préliminaires à la livraison clé en main, nous intervenons avec un niveau de rigueur certifié sur l'ensemble du cycle de vie de vos projets d'infrastructures au Bénin.
            </p>
          </div>

          <div className="mt-6 md:mt-0 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center px-5 py-3 text-sm font-bold text-brand-navy-950 bg-brand-gold hover:bg-brand-gold-400 rounded-xl shadow-md transition-all group"
            >
              <span>Consulter un Ingénieur</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-brand-navy-950 text-brand-gold shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (Inspired by Built Right & Case mockups) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Service Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/70 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-brand-navy-950/85 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-brand-gold uppercase tracking-wider border border-brand-navy-700">
                  {service.category === 'hydraulique' ? 'Hydraulique' :
                   service.category === 'conseil-bureau-etudes' ? 'Bureau d\'Études' :
                   service.category === 'assainissement' ? 'Assainissement' : 'Génie Civil & VRD'}
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy-950 group-hover:text-brand-cyan-700 transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                    {service.subtitle}
                  </p>

                  {/* Highlights points */}
                  <div className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start text-xs text-slate-600 space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-xs font-bold text-brand-navy-900 hover:text-brand-gold group/btn transition-colors"
                  >
                    <span>Fiche Technique</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-400 group-hover/btn:text-brand-gold group-hover/btn:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 hover:bg-brand-gold hover:text-brand-navy-950 transition-colors"
                  >
                    Devis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal View for Technical Sheet */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenQuoteModal={onOpenQuoteModal}
        />
      )}
    </section>
  );
};
