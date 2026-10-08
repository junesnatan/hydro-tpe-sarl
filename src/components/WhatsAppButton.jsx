import React, { useState } from 'react';
import { MessageSquare, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = (customMsg = '') => {
    const text = encodeURIComponent(
      customMsg || `Bonjour HYDRO TPE SARL, je souhaite entrer en contact avec un ingénieur pour un projet hydraulique / BTP au Bénin.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Popover Assistant */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-brand-navy-950 font-heading">
                HYDRO TPE SARL • Bénin
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            Bonjour ! Vous avez un projet de forage, d'adduction d'eau ou de génie civil au Bénin ? Échangez directement avec notre direction technique.
          </p>

          <div className="space-y-2">
            <button
              onClick={() => handleOpenWhatsApp("Bonjour, je souhaite un devis pour un forage ou château d'eau.")}
              className="w-full text-left p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 text-xs text-slate-700 hover:text-emerald-800 transition-colors border border-slate-100"
            >
              💧 Devis Forage ou Château d'eau
            </button>
            <button
              onClick={() => handleOpenWhatsApp("Bonjour, je souhaite une consultation pour un bureau d'études ou maîtrise d'œuvre.")}
              className="w-full text-left p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 text-xs text-slate-700 hover:text-emerald-800 transition-colors border border-slate-100"
            >
              📐 Études techniques & Maîtrise d'œuvre
            </button>
            <button
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg flex items-center justify-center space-x-1.5 shadow-sm transition-colors"
            >
              <span>Ouvrir WhatsApp (+229)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Contacter sur WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageSquare className="w-7 h-7" />
      </button>

    </div>
  );
};
