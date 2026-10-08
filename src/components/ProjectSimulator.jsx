import React, { useState } from 'react';
import { 
  Calculator, Droplets, Compass, Building, Sun, CheckCircle2, 
  ArrowRight, Sparkles, RefreshCw, AlertCircle, PhoneCall, Send 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ProjectSimulator = ({ onOpenQuoteModal }) => {
  const [projectType, setProjectType] = useState('forage');
  const [department, setDepartment] = useState('atlantique');
  const [targetFlow, setTargetFlow] = useState('medium'); // low, medium, high
  const [energySource, setEnergySource] = useState('solar'); // solar, sbee, hybrid
  const [storageVolume, setStorageVolume] = useState('50'); // 20, 50, 100, 200
  const [networkLength, setNetworkLength] = useState('5'); // 2, 5, 15, 30

  // Départements du Bénin
  const departments = [
    { id: 'littoral', name: 'Littoral (Cotonou)', zone: 'Sédimentaire côtier', depthEst: '60 - 120 m' },
    { id: 'atlantique', name: 'Atlantique (Calavi, Ouidah, Allada)', zone: 'Continental Terminal', depthEst: '70 - 130 m' },
    { id: 'oueme', name: 'Ouémé (Porto-Novo, Sèmè)', zone: 'Sédimentaire', depthEst: '60 - 110 m' },
    { id: 'plateau', name: 'Plateau (Pobè, Kétou)', zone: 'Crétacé & Socle', depthEst: '80 - 140 m' },
    { id: 'zou', name: 'Zou (Abomey, Bohicon)', zone: 'Socle cristallin', depthEst: '90 - 160 m' },
    { id: 'collines', name: 'Collines (Dassa, Savalou)', zone: 'Socle granito-gneissique', depthEst: '100 - 180 m' },
    { id: 'borgou', name: 'Borgou (Parakou, Bembèrèkè)', zone: 'Socle fracturé', depthEst: '100 - 170 m' },
    { id: 'alibori', name: 'Alibori (Kandi, Malanville)', zone: 'Grès & Socle', depthEst: '90 - 150 m' },
    { id: 'donga', name: 'Donga (Djougou, Bassila)', zone: 'Socle quartzitique', depthEst: '110 - 180 m' },
    { id: 'atacora', name: 'Atacora (Natitingou, Tanguiéta)', zone: 'Montagneux & grès de l\'Atacora', depthEst: '120 - 200 m' },
    { id: 'mono', name: 'Mono (Lokossa, Comè)', zone: 'Sédimentaire marin', depthEst: '60 - 110 m' },
    { id: 'couffo', name: 'Couffo (Aplahoué, Dogbo)', zone: 'Sédimentaire / Socle', depthEst: '80 - 140 m' },
  ];

  const projectTypes = [
    { id: 'forage', name: 'Forage d\'Exploitation Gros Débit', icon: Droplets, baseDays: 14 },
    { id: 'saep', name: 'Système AEP / SAEP Complet (Forage + Château + Réseau)', icon: Building, baseDays: 75 },
    { id: 'chateau', name: 'Château d\'Eau Seul (Béton Armé ou Métallique)', icon: Building, baseDays: 45 },
    { id: 'etude-moe', name: 'Maîtrise d\'Œuvre (MOE) & Contrôle Technique BTP', icon: Compass, baseDays: 30 },
    { id: 'assainissement', name: 'Drainage Pluvial, Caniveaux & Dalots', icon: Droplets, baseDays: 40 },
    { id: 'irrigation', name: 'Aménagement Hydro-Agricole & Périmètre Irrigué', icon: Sun, baseDays: 60 }
  ];

  // Calcul du budget indicatif
  const calculateEstimate = () => {
    let minPrice = 0;
    let maxPrice = 0;
    let duration = 14;

    const currentDep = departments.find(d => d.id === department);
    const isSocle = ['zou', 'collines', 'borgou', 'donga', 'atacora', 'alibori'].includes(department);

    if (projectType === 'forage') {
      minPrice = isSocle ? 8500000 : 7000000;
      maxPrice = isSocle ? 14500000 : 11500000;
      duration = isSocle ? 18 : 12;
      if (targetFlow === 'high') { minPrice += 4000000; maxPrice += 6000000; }
      if (energySource === 'solar') { minPrice += 4500000; maxPrice += 7000000; }
    } else if (projectType === 'saep') {
      minPrice = 35000000;
      maxPrice = 85000000;
      duration = 90;
      if (storageVolume === '100' || storageVolume === '200') { minPrice += 20000000; maxPrice += 35000000; }
      if (parseInt(networkLength) > 10) { minPrice += 15000000; maxPrice += 30000000; }
      if (energySource === 'solar') { minPrice += 8000000; maxPrice += 14000000; }
    } else if (projectType === 'chateau') {
      const vol = parseInt(storageVolume) || 50;
      minPrice = vol * 280000;
      maxPrice = vol * 420000;
      duration = 50;
    } else if (projectType === 'etude-moe') {
      minPrice = 4500000;
      maxPrice = 18000000;
      duration = 25;
    } else if (projectType === 'assainissement') {
      minPrice = 12000000;
      maxPrice = 45000000;
      duration = 45;
    } else { // irrigation
      minPrice = 18000000;
      maxPrice = 60000000;
      duration = 60;
    }

    return {
      minFcfa: Math.round(minPrice).toLocaleString('fr-FR') + ' FCFA',
      maxFcfa: Math.round(maxPrice).toLocaleString('fr-FR') + ' FCFA',
      minEuro: Math.round(minPrice / 655.957).toLocaleString('fr-FR') + ' €',
      maxEuro: Math.round(maxPrice / 655.957).toLocaleString('fr-FR') + ' €',
      durationWeeks: Math.ceil(duration / 7) + ' à ' + Math.ceil((duration + 14) / 7) + ' semaines',
      selectedDep: currentDep
    };
  };

  const estimate = calculateEstimate();

  const handleSendToWhatsApp = () => {
    const selectedP = projectTypes.find(p => p.id === projectType)?.name;
    const depName = departments.find(d => d.id === department)?.name;
    const text = encodeURIComponent(
      `Bonjour HYDRO TPE SARL,\nJe souhaite un devis pour un projet : ${selectedP}.\nLocalisation : ${depName}.\nÉnergie : ${energySource}.\nEstimation calculée : ${estimate.minFcfa} - ${estimate.maxFcfa}.\nMerci de me contacter pour affiner les données techniques.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="simulateur" className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
      <div className="absolute -top-40 right-10 w-96 h-96 bg-brand-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-brand-gold/15 text-brand-gold text-xs font-bold tracking-wide uppercase mb-3 border border-brand-gold/30">
            <Calculator className="w-3.5 h-3.5 mr-1.5" />
            Outil d'Aide à la Décision en Ligne
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-white">
            Simulateur Budgétaire & Faisabilité Technique
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Configurez votre projet hydraulique ou de génie civil selon votre département au Bénin et obtenez une pré-estimation des coûts, délais et contraintes géologiques.
          </p>
        </div>

        {/* 2-Column Grid: Configurator on Left, Instant Estimate on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-brand-navy-900/90 rounded-2xl p-6 sm:p-8 border border-brand-navy-800 space-y-6 shadow-xl">
            
            {/* Step 1: Type of project */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                1. Nature de l'Ouvrage ou Mission Souhaitée
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((pt) => {
                  const Icon = pt.icon;
                  const isSelected = projectType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setProjectType(pt.id)}
                      className={`flex items-start space-x-3 p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-brand-gold/15 border-brand-gold text-white shadow-sm'
                          : 'bg-brand-navy-950/60 border-brand-navy-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-brand-gold' : 'text-slate-400'}`} />
                      <span className="text-xs font-semibold leading-snug">{pt.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Department in Benin */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                2. Département d'Implantation au Bénin
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-brand-navy-950 border border-brand-navy-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              >
                {departments.map((dep) => (
                  <option key={dep.id} value={dep.id}>
                    {dep.name} — ({dep.zone})
                  </option>
                ))}
              </select>
              <div className="flex items-center text-[11px] text-slate-400 mt-2 space-x-2">
                <AlertCircle className="w-3.5 h-3.5 text-brand-cyan-400 shrink-0" />
                <span>Zone géologique : {estimate.selectedDep?.zone} | Profondeur indicative : {estimate.selectedDep?.depthEst}</span>
              </div>
            </div>

            {/* Step 3: Energy Source & Target flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Source d'Énergie de Pompage
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: 'solar', label: '100% Solaire Photovoltaïque (Lorentz/Grundfos)' },
                    { id: 'sbee', label: 'Réseau Électrique SBEE conventionnel' },
                    { id: 'hybrid', label: 'Hybride Solaire + Groupe Diesel' }
                  ].map(e => (
                    <button
                      key={e.id}
                      type="button"
                      onClick={() => setEnergySource(e.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                        energySource === e.id
                          ? 'bg-brand-cyan-500/15 border-brand-cyan-400 text-cyan-200'
                          : 'bg-brand-navy-950/40 border-brand-navy-800 text-slate-400'
                      }`}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Capacité / Débit Souhaité
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: 'low', label: 'Débit Standard (3 à 10 m³/h)' },
                    { id: 'medium', label: 'Débit Moyen (10 à 30 m³/h)' },
                    { id: 'high', label: 'Gros Débit Industriel / AEP (30 à 60 m³/h+)' }
                  ].map(f => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setTargetFlow(f.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                        targetFlow === f.id
                          ? 'bg-brand-gold/15 border-brand-gold text-amber-200'
                          : 'bg-brand-navy-950/40 border-brand-navy-800 text-slate-400'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Conditionnel: Réservoir & Réseau si SAEP ou Château */}
            {(projectType === 'saep' || projectType === 'chateau') && (
              <div className="p-4 rounded-xl bg-brand-navy-950/70 border border-brand-navy-800 space-y-3">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                  Paramètres de Stockage & Distribution
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">Capacité du Château (m³)</label>
                    <select
                      value={storageVolume}
                      onChange={(e) => setStorageVolume(e.target.value)}
                      className="w-full bg-brand-navy-900 border border-brand-navy-700 rounded-lg p-2 text-white"
                    >
                      <option value="20">20 m³ (Villageois / Privé)</option>
                      <option value="50">50 m³ (Moyen Standing)</option>
                      <option value="100">100 m³ (Grand Réseau AEP)</option>
                      <option value="200">200 m³+ (Urbain / Industriel)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-400 block mb-1">Linéaire Réseau PEHD (km)</label>
                    <select
                      value={networkLength}
                      onChange={(e) => setNetworkLength(e.target.value)}
                      className="w-full bg-brand-navy-900 border border-brand-navy-700 rounded-lg p-2 text-white"
                    >
                      <option value="2">Moins de 2 km</option>
                      <option value="5">Environ 5 km</option>
                      <option value="15">10 à 20 km (Multi-Villages)</option>
                      <option value="30">Plus de 25 km</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Dynamic Output Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 rounded-2xl p-6 sm:p-8 border-2 border-brand-gold/40 shadow-2xl relative space-y-6">
            
            <div className="flex items-center justify-between border-b border-brand-navy-800 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan-400 block">
                  Résultat de Simulation
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Pré-Estimation Projet
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-brand-gold text-brand-navy-950 text-xs font-black">
                BÉNIN
              </span>
            </div>

            {/* Estimated Price Range */}
            <div className="p-4 rounded-xl bg-brand-navy-950 border border-brand-navy-800 space-y-1.5">
              <span className="text-xs text-slate-400 uppercase tracking-wider block">
                Fourchette Budgétaire Estimée (HT)
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-gold leading-tight">
                {estimate.minFcfa}
              </div>
              <div className="text-xs text-slate-300">
                à environ <span className="font-bold text-white">{estimate.maxFcfa}</span>
              </div>
              <div className="text-[11px] text-slate-400 pt-1 border-t border-brand-navy-800 mt-2">
                Équivalent : {estimate.minEuro} à {estimate.maxEuro}
              </div>
            </div>

            {/* Project Timeline & Geology notes */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-lg bg-brand-navy-950/60 border border-brand-navy-800">
                <span className="text-slate-400">Délai d'exécution prévisionnel :</span>
                <span className="font-bold text-white">{estimate.durationWeeks}</span>
              </div>

              <div className="p-3 rounded-lg bg-brand-navy-950/60 border border-brand-navy-800 space-y-1">
                <span className="text-brand-gold font-semibold block">Précision Technique Locale :</span>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Implantation dans le département <strong>{estimate.selectedDep?.name}</strong>. Une prospection géophysique préalable par traîné électrique est recommandée avant forage pour garantir le captage de la nappe captive et sécuriser l'investissement.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => onOpenQuoteModal(`Simulation : ${projectTypes.find(p=>p.id===projectType)?.name} (${estimate.selectedDep?.name})`)}
                className="w-full py-3.5 px-4 bg-brand-gold hover:bg-brand-gold-400 text-brand-navy-950 font-extrabold rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4 text-brand-navy-950" />
                <span>Recevoir un Devis Technique Officiel</span>
              </button>

              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Discuter de cette estimation sur WhatsApp</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center leading-relaxed">
              * Note : Cette simulation est fournie à titre indicatif selon les barèmes moyens constatés en République du Bénin. Un devis définitif nécessite une visite d'implantation ou l'analyse du cahier des charges par nos ingénieurs.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
