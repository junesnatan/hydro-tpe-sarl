import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, 
  Building2, ShieldCheck, ArrowRight, ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    department: 'Atlantique / Cotonou',
    service: 'Forage d\'exploitation & Pompage',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Bonjour HYDRO TPE SARL,\nJe suis ${formData.name || 'un client'} (${formData.organization || 'Particulier/Entreprise'}).\nJe souhaite échanger au sujet d'un projet de type : ${formData.service} dans le département de ${formData.department}.\nMerci de me recontacter.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-gold mb-2">
            CONTACT & LOCALISATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy-950 tracking-tight">
            Engageons la Discussion sur Votre Projet au Bénin
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Nos bureaux d'études et bases techniques sont à votre disposition pour toute consultation, visite de site, appel d'offres ou demande de devis estimatif.
          </p>
        </div>

        {/* 2-Column Grid: Coordinates & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Coordinates & Bases in Benin */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-start space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-navy-950 shrink-0">
                  <Building2 className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold block">
                    Siège Administratif & Bureau d'Études
                  </span>
                  <h3 className="font-heading font-bold text-base text-brand-navy-950">
                    Godomey • Abomey-Calavi / Cotonou
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {COMPANY_INFO.address}
                  </p>
                  <a
                    href={COMPANY_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-brand-navy-950 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 transition-colors mt-2.5"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    <span>Localiser sur Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Phone & Opening Hours */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phonePrincipal.replace(/\s+/g, '')}`} className="font-bold text-brand-navy-950 hover:text-brand-gold text-base">
                    {COMPANY_INFO.phonePrincipal}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="font-medium">Lundi - Samedi : 07h30 - 18h30</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Support Box */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950 font-heading">
                    Permanence WhatsApp Direct
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Réponse immédiate de nos ingénieurs
                  </p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppDirect}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shrink-0"
              >
                Discuter
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-lg relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-brand-navy-950">
                  Votre Demande a été Transmise avec Succès !
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Merci, <strong>{formData.name}</strong>. Un ingénieur de notre bureau d'études technique vous contactera sous 24h ouvrées pour analyser votre projet.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        phone: '',
                        email: '',
                        department: 'Atlantique / Cotonou',
                        service: 'Forage d\'exploitation & Pompage',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                  >
                    Nouvelle demande
                  </button>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center space-x-1.5"
                  >
                    <span>Continuer sur WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h3 className="font-heading font-bold text-lg text-brand-navy-950">
                    Formulaire de Contact & Consultation Technique
                  </h3>
                  <p className="text-xs text-slate-500">
                    Renseignez les détails de votre besoin pour recevoir une estimation ou un rendez-vous sur site.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nom complet ou Titre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ing. Koffi Mensah"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Organisme / Entreprise / Mairie
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Mairie, ONG, Entreprise..."
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Numéro de Téléphone (WhatsApp de préférence) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+229 97 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@organisation.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Département Concerné au Bénin
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white text-slate-900"
                    >
                      <option>Littoral (Cotonou)</option>
                      <option>Atlantique (Abomey-Calavi, Ouidah, Allada)</option>
                      <option>Ouémé (Porto-Novo)</option>
                      <option>Plateau (Pobè, Kétou)</option>
                      <option>Zou (Bohicon, Abomey)</option>
                      <option>Collines (Dassa-Zoumè, Savalou)</option>
                      <option>Borgou (Parakou, Bembèrèkè)</option>
                      <option>Alibori (Kandi, Malanville)</option>
                      <option>Donga (Djougou, Bassila)</option>
                      <option>Atacora (Natitingou, Tanguiéta)</option>
                      <option>Mono (Lokossa, Comè)</option>
                      <option>Couffo (Aplahoué, Dogbo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Type de Prestation Souhaitée
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white text-slate-900"
                    >
                      <option>Forage d'exploitation gros débit & Pompage</option>
                      <option>Système AEP / SAEP Multi-Villages</option>
                      <option>Château d'Eau (Béton Armé / Métallique)</option>
                      <option>Maîtrise d'Œuvre (MOE) & Contrôle BTP</option>
                      <option>Étude Géotechnique & Dimensionnement</option>
                      <option>Assainissement Pluvial & Collecteurs</option>
                      <option>Aménagement Hydro-Agricole & Barrage</option>
                      <option>Autre prestation d'ingénierie</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Description Succincte du Besoin ou Cahier des Charges
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Précisez ici les dimensions, débits estimés, contraintes de délais ou références de l'appel d'offres..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:bg-white text-slate-900"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 bg-brand-navy-950 hover:bg-brand-navy-900 text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 group"
                  >
                    {loading ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                        <span>Transmettre au Bureau d'Études HYDRO TPE</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  Vos informations sont strictement confidentielles et traitées conformément à la législation béninoise sur la protection des données.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
