import React from 'react';
import { 
  Droplets, Phone, Clock, MapPin, ArrowRight, MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer = () => {
  return (
    <footer className="bg-[#0B1B2B] text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact & Mobile-Friendly Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-slate-800/80 text-xs text-center sm:text-left">
          
          {/* Brand */}
          <div className="space-y-1.5 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center text-brand-gold">
                <Droplets className="w-3.5 h-3.5 text-brand-gold" />
              </div>
              <span className="font-heading font-black text-base text-white tracking-tight">
                HYDRO TPE <span className="text-brand-gold text-xs font-bold">SARL</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 max-w-xs">
              Ingénierie Hydraulique & Travaux Publics • République du Bénin
            </p>
          </div>

          {/* Essential Contact Items (Single Compact Line / Wrap on Mobile) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2.5 text-xs">
            <a 
              href={`tel:${COMPANY_INFO.phonePrincipal.replace(/\s+/g, '')}`} 
              className="flex items-center space-x-1.5 text-slate-200 hover:text-brand-gold font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>{COMPANY_INFO.phonePrincipal}</span>
            </a>

            <div className="flex items-center space-x-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>07h30 - 18h30</span>
            </div>

            <a
              href={COMPANY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-brand-gold hover:underline font-semibold"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Godomey (Maps ↗)</span>
            </a>

            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Minimal Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 text-center">
          <span>© {new Date().getFullYear()} HYDRO TPE SARL. Tous droits réservés.</span>
          <span>Agréments Techniques Officiels B4 / H4</span>
        </div>

      </div>
    </footer>
  );
};
