import React from 'react';
import { Link } from 'react-router-dom';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const MethodologyPage = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-[#0B1B2B] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=80')` }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            RÉGLEMENTATION & DÉONTOLOGIE
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white mb-4">
            Notre Démarche Méthodologique
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            De l'auscultation géophysique jusqu'à la réception sans réserve : découvrez notre protocole d'ingénierie certifié pour chaque chantier au Bénin.
          </p>
        </div>
      </section>

      {/* 5-Step Process Timeline */}
      <ProcessTimeline onOpenQuoteModal={onOpenQuoteModal} />

      {/* Guarantees & Norms section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
              ASSURANCES CONTRACTUELLES
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight">
              Nos Engagements Qualité & Sécurité
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-navy-950">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy-950">
                Garantie Décennale Couverte
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toutes nos réalisations de génie civil, châteaux d'eau et dalots bénéficient de notre couverture d'assurance responsabilité décennale en République du Bénin.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-navy-950">
                <FileText className="w-5 h-5 text-brand-gold" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy-950">
                Dossier des Ouvrages Exécutés (DOE)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Remise systématique des plans de récolement géoréférencés SIG, logs de forages, courbes de rabattement et certificats d'analyses d'eau de laboratoires agréés.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-navy-950">
                <CheckCircle2 className="w-5 h-5 text-brand-gold" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-navy-950">
                Agréments Ministériels B4 & H4
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Habilitations officielles délivrées par le Ministère du Cadre de Vie et des Transports et le Ministère de l'Eau et des Mines du Bénin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-xl text-brand-navy-950">
              Vous préparez un dossier de consultation (DAO) ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Transmettez vos termes de référence à notre bureau d'études pour une offre technique sous 48h.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-brand-gold hover:bg-amber-400 text-[#0B1B2B] font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center space-x-1.5 shrink-0"
          >
            <span>Soumettre Votre Cahier des Charges</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

    </div>
  );
};
