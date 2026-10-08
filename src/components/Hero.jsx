import React from 'react';
import { ArrowRight, Droplets, Compass, ShieldAlert, Building2 } from 'lucide-react';

export const Hero = ({ onOpenQuoteModal }) => {
  return (
    <section id="accueil" className="relative bg-slate-50">
      
      {/* HERO BANNER: Full-width construction background image with high contrast text */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center overflow-hidden">
        
        {/* Full-width Background Photo: Building structure with crane under golden hour (verified 200) */}
        <div 
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_top]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=85')`
          }}
        ></div>

        {/* Clean natural overlay: ensures crisp readability for text on the left while leaving the building and crane 100% clear and unshadowed on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/60 sm:via-white/80 sm:to-transparent sm:max-w-3xl"></div>

        {/* Content Container (Exact Built Right Mockup Left-Aligned Style) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            
            {/* Small Gold Category Title (Exact: WE BUILD YOUR VISION) */}
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-3">
              NOUS BÂTISSONS VOTRE VISION
            </div>

            {/* Headline (Exact: Building Structures. Building Trust.) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.15] mb-5">
              <span className="text-[#0B1B2B]">L'Art de l'Eau.</span> <br />
              <span className="text-brand-gold">La Rigueur du BTP.</span>
            </h1>

            {/* Subtitle (Exact 2-line Clean Description) */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mb-8 font-normal">
              Des solutions d'ingénierie hydraulique et de construction BTP de haute précision, alliant qualité, sécurité et intégrité à chaque étape de vos projets au Bénin.
            </p>

            {/* Dual CTA Buttons (Exact Built Right Style: Our Services -> / View Projects ->) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-[#0B1B2B] bg-brand-gold hover:bg-amber-400 rounded-md shadow-sm hover:shadow transition-all group"
              >
                <span>Nos Services</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projets"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#0B1B2B] hover:bg-slate-900 rounded-md shadow-sm hover:shadow transition-all group"
              >
                <span>Voir les Projets</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* 4 QUICK PILLARS STRIP (Exact Replica of Built Right Mockup: Dark Navy Row Overlapping/Docked Below Hero) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B2B] rounded-xl shadow-lg border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-800/80">
            
            {/* Pillar 1: Hydraulique & Forages */}
            <div className="flex flex-col justify-start lg:px-3 pt-4 sm:pt-0">
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

            {/* Pillar 2: Bureau d'Études & Conseil */}
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

            {/* Pillar 3: Assainissement & Drainage */}
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

            {/* Pillar 4: Génie Civil & VRD */}
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
  );
};
