import React, { useState } from 'react';
import { TECHNICAL_ARTICLES } from '../data/companyData';
import { BookOpen, Calendar, Clock, ArrowRight, X } from 'lucide-react';

export const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
              VEILLE & SAVOIR-FAIRE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight">
              Actualités Techniques & Retours du Terrain
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Les publications et analyses de nos experts sur les mutations de l'ingénierie hydraulique, l'énergie solaire et le génie civil au Bénin.
            </p>
          </div>
        </div>

        {/* Articles Grid (Case Construction mockup style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNICAL_ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group hover:-translate-y-1.5"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-navy-950/85 backdrop-blur-sm text-brand-gold text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {art.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2.5">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-brand-navy-950 group-hover:text-brand-cyan-700 transition-colors mb-3 line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                    {art.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-gold group-hover:text-brand-gold-600 transition-colors">
                  <span>Lire l'analyse complète</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative border border-slate-200 shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-2.5 py-0.5 rounded bg-brand-navy-100 text-brand-navy-900 text-xs font-bold uppercase tracking-wider">
              {selectedArticle.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-navy-950 mt-3 mb-2">
              {selectedArticle.title}
            </h3>
            <div className="flex items-center space-x-3 text-xs text-slate-400 mb-6">
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-56 object-cover rounded-xl mb-6"
            />

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p className="font-semibold text-brand-navy-950">
                {selectedArticle.snippet}
              </p>
              <p>
                En République du Bénin, la géologie se divise distinctement entre le bassin sédimentaire côtier au Sud (caractérisé par les sables tertiaires et le Continental Terminal) et le socle précambrien granito-gneissique qui couvre plus de 70% du pays au Centre et au Nord.
              </p>
              <p>
                Pour les maîtres d'ouvrages publics et privés, la réussite d'un projet hydraulique dépend directement de la pertinence des études géophysiques préliminaires (traîné et sondage électrique vertical) pour cibler avec exactitude les fractures aquifères majeures. Le recours systématique aux équipements d'auscultation et aux techniques de forage au Marteau Fond de Trou à haute pression permet d'atteindre des débits d'exploitation supérieurs à 30 m³/h indispensables pour l'alimentation des châteaux d'eau et des grands périmètres agricoles.
              </p>
              <p>
                HYDRO TPE SARL met à profit son expérience empirique des forations dans les 12 départements béninois pour conseiller les donneurs d'ordre avec une intégrité technique irréprochable.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-brand-navy-950 text-white rounded-xl text-xs font-bold hover:bg-brand-navy-900 transition-colors"
              >
                Fermer l'article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
