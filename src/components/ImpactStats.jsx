import React from 'react';
import { Award, HardHat, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { AnimatedMetric } from './AnimatedMetric';

export const ImpactStats = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative bg-[#0B1B2B] text-white py-20 lg:py-24 overflow-hidden border-t border-slate-800">
      
      {/* Background construction silhouette with high quality photo (verified 200) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B] via-[#0B1B2B]/90 to-[#0B1B2B]/85"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Headline & Button (Exact Built Right Style) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white leading-tight">
              Bâtissons Ensemble des Ouvrages d'Exception.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              De l'étude de faisabilité à la mise en eau définitive, nous transformons vos projets d'infrastructure en réalités durables partout au Bénin.
            </p>
            <div className="pt-3">
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center px-6 py-3.5 bg-brand-gold hover:bg-amber-400 text-[#0B1B2B] font-bold text-xs uppercase tracking-wider rounded-md shadow-md transition-all group"
              >
                <span>Démarrer Votre Projet</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: 4 Golden Line Icon Counters (Exact Built Right Layout) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-2">
              <div className="flex justify-center text-brand-gold">
                <Award className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-heading text-white">
                <AnimatedMetric value="18+" duration={2000} />
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Ans d'Expérience
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center text-brand-gold">
                <HardHat className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-heading text-white">
                <AnimatedMetric value="350+" duration={2000} />
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Ouvrages Livrés
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center text-brand-gold">
                <Users className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-heading text-white">
                <AnimatedMetric value="45+" duration={2000} />
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Ingénieurs Qualifiés
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-center text-brand-gold">
                <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-heading text-white">
                <AnimatedMetric value="100%" duration={2000} />
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Sécurité & Qualité
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
