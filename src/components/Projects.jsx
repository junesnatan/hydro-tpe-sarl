import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight, ExternalLink, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../data/companyData';
import { ProjectModal } from './ProjectModal';

export const Projects = ({ onOpenQuoteModal }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projets" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Replica of Built Right Mockup: OUR PROJECTS / Built with Precision...) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
              NOS PROJETS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0B1B2B] tracking-tight">
              Bâtis avec Précision. <br className="hidden sm:inline" />
              Livrés avec Fierté.
            </h2>
          </div>

          <div className="mt-6 md:mt-0 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center px-5 py-2.5 rounded-md border border-slate-300 hover:border-[#0B1B2B] text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-[#0B1B2B] hover:text-white transition-all group"
            >
              <span>Tous nos Projets</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid (Exact Layout from Built Right Mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Card Photo Container with Gold Category Pill */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Yellow/Gold Category Badge in Top Left */}
                <div className="absolute top-3.5 left-3.5 bg-brand-gold text-[#0B1B2B] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Content (Title, Location, Metric & Year) */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-base text-[#0B1B2B] group-hover:text-amber-600 transition-colors mb-2 line-clamp-2 leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-xs text-slate-500 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold mr-1.5 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Bottom Card Strip: Square Footage / Capacity + Year */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-brand-gold mr-1.5"></span>
                    {project.keyMetric}
                  </span>
                  <span className="flex items-center text-slate-400">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal View for Project Detail */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenQuoteModal={onOpenQuoteModal}
        />
      )}
    </section>
  );
};
