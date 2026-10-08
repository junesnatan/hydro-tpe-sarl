import React, { useState } from 'react';
import { 
  ShieldCheck, Award, Users, Wrench, CheckCircle, ArrowRight, 
  MapPin, Clock, FileCheck, Layers, Cpu, Target 
} from 'lucide-react';
import { COMPANY_INFO, KEY_METRICS } from '../data/companyData';
import { AnimatedMetric } from './AnimatedMetric';

export const About = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState('vision');

  const tabs = [
    { id: 'vision', label: 'Vision & Identité', icon: Target },
    { id: 'moyens', label: 'Moyens Matériels & Équipements', icon: Cpu },
    { id: 'qhse', label: 'Engagement Qualité & QHSE', icon: ShieldCheck }
  ];

  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-navy-50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            À PROPOS DE NOTRE ENTREPRISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight">
            Une Ingénierie Engagée pour le Développement Durable du Bénin
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Depuis plus de 15 ans, <strong className="text-brand-navy-950 font-semibold">HYDRO TPE SARL</strong> conjugue l'expertise hydrogéologique, le savoir-faire du génie civil et la rigueur du conseil pour apporter des solutions fiables et durables aux défis de l'eau et de l'aménagement du territoire.
          </p>
        </div>

        {/* 2-Column Presentation: Story & Graphic Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Ingénieurs HYDRO TPE SARL en réunion technique de chantier au Bénin"
                className="w-full h-80 sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Rigueur & Déontologie
                </span>
                <p className="text-sm font-medium text-slate-200 mt-1">
                  Une équipe pluridisciplinaire d'ingénieurs hydrauliciens, géotechniciens, topographes et chefs de chantiers chevronnés.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-4 right-4 sm:-top-6 sm:-right-8 bg-brand-gold text-brand-navy-950 p-4 sm:p-5 rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-white">
              <span className="font-heading font-black text-2xl sm:text-4xl leading-none">18+</span>
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-center mt-1">
                Années d'Excellence <br />au Bénin
              </span>
            </div>
          </div>

          {/* Right Column: Tabbed Content (Vision / Moyens / QHSE) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Custom Interactive Tabs */}
            <div className="flex border-b border-slate-200 pb-1 gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                      isActive
                        ? 'border-brand-gold text-brand-navy-950 bg-brand-gold/10 rounded-t-lg'
                        : 'border-transparent text-slate-500 hover:text-brand-navy-900 hover:border-slate-300'
                    }`}
                  >
                    <TabIcon className={`w-4 h-4 ${isActive ? 'text-brand-gold' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Vision & Identité */}
            {activeTab === 'vision' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl font-bold font-heading text-brand-navy-950">
                  Partenaire stratégique de l'État, des collectivités et des bailleurs
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Immatriculée au Registre du Commerce et du Crédit Mobilier de Cotonou (RCCM : {COMPANY_INFO.rccm}), <strong>HYDRO TPE SARL</strong> est née de la volonté d'offrir une ingénierie locale de classe internationale, capable de répondre aux défis complexes de l'approvisionnement en eau potable et de l'aménagement résilient en Afrique subsaharienne.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy-950">Maîtrise complète de la filière</h4>
                      <p className="text-xs text-slate-500 mt-0.5">De l'étude géophysique à la réception définitive sans intermédiaire.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy-950">Indépendance & Rigueur</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Conseils impartiaux, respect strict des normes BAEL et fascicules CCTG.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy-950">Proximité territoriale</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Bases logistiques à Cotonou et Parakou pour un déploiement éclair.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy-950">Pacte ODD 6</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Contribution active à l'accès universel à l'eau potable au Bénin.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Moyens Matériels & Techniques */}
            {activeTab === 'moyens' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl font-bold font-heading text-brand-navy-950">
                  Un parc d'équipements lourds et des logiciels de pointe
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  L'indépendance et la réactivité d'HYDRO TPE SARL reposent sur la détention en propre d'un parc de matériel moderne, évitant les retards de sous-traitance :
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <Wrench className="w-5 h-5 text-brand-cyan-600 mr-3 shrink-0" />
                    <span className="text-sm text-slate-700">
                      <strong>Ateliers de foration lourds :</strong> Foreuses Rotary et Marteau Fond de Trou montées sur porteurs 6x6, compresseurs 25 bars 900 CFM.
                    </span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <Cpu className="w-5 h-5 text-brand-cyan-600 mr-3 shrink-0" />
                    <span className="text-sm text-slate-700">
                      <strong>Topographie & Géophysique :</strong> Résistivimètres numériques Syscal Pro, Récepteurs GNSS RTK centimétriques, Stations totales Leica.
                    </span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <Layers className="w-5 h-5 text-brand-cyan-600 mr-3 shrink-0" />
                    <span className="text-sm text-slate-700">
                      <strong>Outils CAO/DAO & Calculs :</strong> Licences Autodesk Civil 3D, Robot Structural Analysis, EPANET 2.2, WaterCAD, PVsyst.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: QHSE & Certifications */}
            {activeTab === 'qhse' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl font-bold font-heading text-brand-navy-950">
                  Normes de Sécurité, Démarche Qualité & Respect Environnemental
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Sur chacun de nos chantiers au Bénin, la politique "Zéro Accident" et la préservation des nappes phréatiques constituent des impératifs non négociables.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {COMPANY_INFO.agreements.map((agr, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60 flex items-start space-x-3">
                      <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 leading-snug">
                        {agr}
                      </span>
                    </div>
                  ))}
                  <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60 flex items-start space-x-3">
                    <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700 leading-snug">
                      Assurance Responsabilité Civile Professionnelle & Garantie Décennale
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Action buttons under About */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-navy-950 text-white font-bold text-sm hover:bg-brand-navy-900 transition-colors shadow-md"
              >
                <span>Solliciter nos Ingénieurs-Conseils</span>
                <ArrowRight className="w-4 h-4 ml-2 text-brand-gold" />
              </button>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                <span>Nous Contacter & Localiser</span>
              </a>
            </div>

          </div>

        </div>

        {/* Impact Numbers Strip (Built Right mockup style) */}
        <div className="bg-brand-navy-950 rounded-2xl p-8 sm:p-12 text-white border border-brand-navy-800 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {KEY_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-300 to-amber-500">
                  <AnimatedMetric value={metric.value} duration={2000} />
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
