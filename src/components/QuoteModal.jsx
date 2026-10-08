import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Phone, Droplets } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const QuoteModal = ({ isOpen, onClose, initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'Atlantique (Calavi, Ouidah)',
    service: initialService || 'Forage d\'exploitation gros débit',
    estimatedBudget: 'À définir avec vos ingénieurs',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Bonjour HYDRO TPE SARL,\nJe souhaite un devis pour : ${formData.service}.\nDépartement : ${formData.department}.\nNom : ${formData.name}.\nTél : ${formData.phone}.\nPrécisions : ${formData.description || 'N/A'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-brand-navy-950">
              Demande de Devis Reçue !
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Merci <strong>{formData.name}</strong>. Nos ingénieurs du bureau d'études technique vous transmettront une offre chiffrée sous 24h ouvrées.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
              >
                Fermer la fenêtre
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center space-x-1.5"
              >
                <span>Accélérer sur WhatsApp</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-brand-gold text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>HYDRO TPE SARL • Devis Gratuit & Sans Engagement</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-brand-navy-950">
              Demande de Devis ou Consultation Technique
            </h3>
            
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Précisez votre besoin pour recevoir une proposition adaptée aux réalités géologiques de votre site au Bénin.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Votre Nom ou Raison Sociale *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Mairie, Entreprise ou Nom"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-gold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Téléphone (WhatsApp de préférence) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+229 97 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-gold text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email de contact *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@organisation.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-gold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Département au Bénin
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-gold text-slate-900"
                  >
                    <option>Littoral (Cotonou)</option>
                    <option>Atlantique (Calavi, Ouidah)</option>
                    <option>Ouémé (Porto-Novo)</option>
                    <option>Plateau (Pobè, Kétou)</option>
                    <option>Zou (Bohicon, Abomey)</option>
                    <option>Collines (Dassa-Zoumè)</option>
                    <option>Borgou (Parakou)</option>
                    <option>Alibori (Kandi, Malanville)</option>
                    <option>Donga (Djougou)</option>
                    <option>Atacora (Natitingou)</option>
                    <option>Mono / Couffo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Type de Mission / Ouvrage
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-gold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Détails complémentaires (Débit espéré, dimensions, etc.)
                </label>
                <textarea
                  rows={3}
                  placeholder="Décrivez votre besoin en quelques lignes..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-gold text-slate-900"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center space-x-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-4 h-4 text-brand-navy-950" />
                  <span>{loading ? 'Traitement en cours...' : 'Envoyer la demande au Bureau d\'Études'}</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  Ou envoyer directement par WhatsApp
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
