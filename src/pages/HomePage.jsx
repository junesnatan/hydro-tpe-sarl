import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Droplets, Compass, ShieldAlert, Building2, 
  CheckCircle2, MapPin, Calendar, Award, HardHat, Users, ShieldCheck 
} from 'lucide-react';
import { KEY_METRICS, PROJECTS, SERVICES } from '../data/companyData';
import { AnimatedMetric } from '../components/AnimatedMetric';
import { Partners } from '../components/Partners';
import { Testimonials } from '../components/Testimonials';

export const HomePage = ({ onOpenQuoteModal, onSelectProject, onSelectService }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-slate-50">
        <div className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[680px] flex items-center overflow-hidden">
          {/* Full-width Background Photo */}
          <div 
            className="absolute inset-0 bg-cover bg-center sm:bg-[center_top]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=85')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:from-white/95 sm:via-white/75 sm:to-black/20"></div>

          {/* Hero Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-3">
                NOUS BÂTISSONS VOTRE VISION
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.15] mb-5">
                <span className="text-[#0B1B2B]">L'Art de l'Eau.</span> <br />
                <span className="text-brand-gold">La Rigueur du BTP.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mb-8 font-normal">
                Des solutions d'ingénierie hydraulique et de construction BTP de haute précision, alliant qualité, sécurité et intégrité à chaque étape de vos projets au Bénin.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-[#0B1B2B] bg-brand-gold hover:bg-amber-400 rounded-md shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Nos Services</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/projets"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#0B1B2B] hover:bg-slate-900 rounded-md shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Voir les Projets</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quick Pillars Strip */}
        <div className="relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1B2B] rounded-xl shadow-2xl p-5 sm:p-8 border border-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-800/80">
              <div className="flex flex-col justify-start lg:px-3 first:pt-0 pt-4 sm:pt-0">
                <div className="w-12 h-12 rounded-lg bg-slate-800/60 border border-slate-700 flex items-center justify-center text-brand-gold mb-3.5">
                  <Droplets className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-1.5">
                  Hydraulique & Forages
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Forages profonds gros débits, réseaux d'eau AEP et châteaux d'eau durables.
                </p>
              </div>

              <div className="flex flex-col justify-start lg:px-3 pt-4 sm:pt-0">
                <div className="w-12 h-12 rounded-lg bg-slate-800/60 border border-slate-700 flex items-center justify-center text-brand-gold mb-3.5">
                  <Compass className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-1.5">
                  Bureau d'Études & Conseil
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Maîtrise d'œuvre (MOE), calculs de structures BA et suivi de chantiers.
                </p>
              </div>

              <div className="flex flex-col justify-start lg:px-3 pt-4 sm:pt-0">
                <div className="w-12 h-12 rounded-lg bg-slate-800/60 border border-slate-700 flex items-center justify-center text-brand-gold mb-3.5">
                  <ShieldAlert className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-1.5">
                  Assainissement & Drainage
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Collecteurs pluviaux, dalots, caniveaux et lutte active anti-inondation.
                </p>
              </div>

              <div className="flex flex-col justify-start lg:px-3 pt-4 sm:pt-0">
                <div className="w-12 h-12 rounded-lg bg-slate-800/60 border border-slate-700 flex items-center justify-center text-brand-gold mb-3.5">
                  <Building2 className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-1.5">
                  Génie Civil & VRD
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Infrastructures routières, périmètres irrigués, barrages et ouvrages d'art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PARTNERS STRIP */}
      <Partners />

      {/* 3. ABOUT PREVIEW (Concise + Metrics + Button to /a-propos) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Ingénieurs HYDRO TPE SARL en réunion technique"
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold">
                À PROPOS DE NOTRE ENTREPRISE
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight leading-tight">
                Une Ingénierie Engagée pour le Développement Durable du Bénin
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Depuis plus de 15 ans, <strong>HYDRO TPE SARL</strong> conjugue l'expertise hydrogéologique, le savoir-faire du génie civil et la rigueur du conseil pour apporter des solutions pérennes aux défis de l'eau potable et de l'aménagement du territoire.
              </p>

              <div className="pt-2">
                <Link
                  to="/a-propos"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-navy-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-navy-900 transition-all shadow-md group"
                >
                  <span>En Savoir Plus sur l'Entreprise</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Animated Metrics Strip */}
          <div className="bg-brand-navy-950 rounded-2xl p-6 sm:p-10 text-white border border-brand-navy-800 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
              {KEY_METRICS.map((metric, idx) => (
                <div key={idx} className={`space-y-1 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-300 to-amber-500">
                    <AnimatedMetric value={metric.value} duration={2000} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {metric.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES HIGHLIGHTS (4 Cards + Button to /services) */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
                PÔLES D'EXPERTISE TECHNIQUE
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight">
                Nos Prestations en Hydraulique & Ingénierie
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-navy-950 hover:text-brand-gold group shrink-0"
            >
              <span>Voir tous nos services (8)</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                onClick={() => onSelectService && onSelectService(service)}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-navy-950/85 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {service.category === 'hydraulique' ? 'Hydraulique' : 'Conseil & MOE'}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-navy-950 group-hover:text-amber-600 transition-colors mb-1.5 line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs font-semibold text-brand-gold">
                    <span>Fiche Technique</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-gold hover:bg-amber-400 text-[#0B1B2B] font-bold text-xs uppercase tracking-wider shadow-sm transition-all group"
            >
              <span>Consulter Toutes les Fiches Techniques</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS HIGHLIGHTS (4 Cards + Button to /projets) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
                NOS PROJETS
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-[#0B1B2B] tracking-tight">
                Bâtis avec Précision. Livrés avec Fierté.
              </h2>
            </div>

            <Link
              to="/projets"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-navy-950 hover:text-brand-gold group shrink-0"
            >
              <span>Explorer la galerie complète</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject && onSelectProject(project)}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-gold text-[#0B1B2B] text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
                    {project.categoryLabel}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-sm text-[#0B1B2B] group-hover:text-amber-600 transition-colors mb-1.5 line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-xs text-slate-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold mr-1 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                    <span>{project.keyMetric}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/projets"
              className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-[#0B1B2B] text-[#0B1B2B] hover:bg-[#0B1B2B] hover:text-white font-bold text-xs uppercase tracking-wider transition-all group"
            >
              <span>Voir Tous les Détails des Chantiers</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. METHODOLOGY PREVIEW (Summary banner + Button to /methodologie) */}
      <section className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1B2B] text-white rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                DÉMARCHE QUALITÉ & SÉCURITÉ
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                De l'Étude Préalable à la Réception Sans Réserve
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Découvrez nos 5 étapes d'ingénierie normalisées pour sécuriser votre investissement hydraulique et BTP au Bénin.
              </p>
            </div>

            <Link
              to="/methodologie"
              className="shrink-0 px-6 py-3.5 bg-brand-gold hover:bg-amber-400 text-brand-navy-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center space-x-2"
            >
              <span>Découvrir la Méthodologie</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. CONTACT CTA BANNER (Direct button to /contact) */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold">
            CONTACT & LOCALISATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight">
            Prêt à Échanger sur Votre Projet au Bénin ?
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Nos ingénieurs sont joignables directement pour analyser vos besoins, planifier une visite de site ou vous transmettre une estimation chiffrée.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-brand-navy-950 hover:bg-brand-navy-900 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all inline-flex items-center space-x-2"
            >
              <span>Accéder aux Coordonnées & Localisation</span>
              <ArrowRight className="w-4 h-4 ml-1 text-brand-gold" />
            </Link>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-amber-400 text-[#0B1B2B] font-bold text-xs uppercase tracking-wider shadow-md transition-all inline-flex items-center space-x-2"
            >
              <span>Demander un Devis en Ligne</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
