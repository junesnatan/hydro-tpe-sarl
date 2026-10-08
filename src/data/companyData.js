// Données techniques et institutionnelles pour HYDRO TPE SARL (Bénin)

export const COMPANY_INFO = {
  name: "HYDRO TPE SARL",
  fullName: "HYDRO TRAVAUX PUBLICS & ÉTUDES SARL",
  slogan: "L'Excellence de l'Ingénierie Hydraulique & l'Expertise BTP au Bénin",
  subSlogan: "Cabinet d'Ingénieur-Conseil, Bureau d'Études Techniques & Entreprise Générale de Travaux Publics et Hydrauliques",
  yearFounded: 2008,
  rccm: "RB/COT/21 B 28941",
  ifu: "3202112489033",
  country: "République du Bénin",
  address: "Godomey, Abomey-Calavi / Cotonou, République du Bénin",
  baseTechnique: "Godomey & Zone Industrielle d'Akassato (Sud) • Quartier Titirou, Parakou (Nord)",
  phonePrincipal: "+229 97 21 82 85",
  phoneSecondaire: "",
  phoneFixe: "",
  emailGeneral: "contact@hydro-tpe.bj",
  emailDevis: "devis@hydro-tpe.bj",
  emailDirection: "direction.technique@hydro-tpe.bj",
  whatsapp: "22997218285",
  mapsUrl: "https://maps.app.goo.gl/v8VKdoZea8S5QTn6A",
  horaires: "Lundi - Samedi : 07h30 - 18h30 (Permanence technique 24/7 pour urgences)",
  agreements: [
    "Agrément Technique B4 / H4 du Ministère du Cadre de Vie et des Transports",
    "Agrément Spécialisé en Travaux Hydrauliques du Ministère de l'Eau et des Mines du Bénin",
    "Certifié Démarche Qualité & Sécurité QHSE ISO 9001:2015 & OHSAS 18001"
  ]
};

export const KEY_METRICS = [
  { value: "18+", label: "Années d'Expérience", sublabel: "Au service du développement au Bénin & UEMOA" },
  { value: "350+", label: "Ouvrages Livrés", sublabel: "Forages, châteaux d'eau, réseaux & infrastructures" },
  { value: "12/12", label: "Départements Couverts", sublabel: "Intervention sur l'ensemble du territoire béninois" },
  { value: "1.8M+", label: "Bénéficiaires Desservis", sublabel: "Accès pérenne à l'eau potable & assainissement" },
  { value: "100%", label: "Conformité Normes", sublabel: "Respect scrupuleux des cahiers des charges et délais" }
];

export const CORE_PILLARS = [
  {
    id: "hydraulique",
    title: "Hydraulique & Forages",
    shortDesc: "Forages profonds gros débits, réseaux d'eau AEP et châteaux d'eau durables.",
    icon: "Droplets",
    count: "180+ Ouvrages"
  },
  {
    id: "conseil-bureau-etudes",
    title: "Bureau d'Études & Conseil",
    shortDesc: "Maîtrise d'œuvre (MOE), calculs de structures BA et suivi de chantiers.",
    icon: "Compass",
    count: "95+ Missions"
  },
  {
    id: "assainissement",
    title: "Assainissement & Drainage",
    shortDesc: "Collecteurs pluviaux, dalots, caniveaux et lutte active anti-inondation.",
    icon: "ShieldAlert",
    count: "45+ Chantiers"
  },
  {
    id: "btp-vrd",
    title: "Génie Civil & VRD",
    shortDesc: "Infrastructures routières, périmètres irrigués, barrages et ouvrages d'art.",
    icon: "Building2",
    count: "70+ Réalisations"
  }
];

export const SERVICES = [
  {
    id: "forages-profonds",
    category: "hydraulique",
    title: "Forages d'Eau Profonds & Équipements",
    subtitle: "Reconnaissance hydrogéologique, foration gros diamètre & essais de débit normalisés",
    description: "Réalisation de forages d'exploitation en milieu sédimentaire (Littoral, Atlantique, Ouémé) et en zone de socle cristallin (Collines, Borgou, Donga, Atacora). Maîtrise des techniques de foration au marteau fond de trou (MFT) et Rotary avec boue biodégradable.",
    image: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Prospection géophysique préalable (Sondages électriques verticaux & traînés)",
      "Forage jusqu'à 250 mètres de profondeur avec tubage PVC alimentaire ou acier inox",
      "Massif filtrant calibré en quartz lavé et cimentation de tête sanitaire",
      "Essais de pompage par paliers et d'endurance (Norme NF P 94-150 / OMS)",
      "Analyses physico-chimiques complètes et agrément de potabilité"
    ],
    equipments: ["Foreuses Rotary/MFT montées sur camions 6x6", "Compresseurs haute pression 25 bars", "Pompes immergées d'essai", "Sondes piézométriques électroniques"],
    deliverables: ["Rapport hydrogéologique & logs de forage", "Courbes de rabattement & débit critique", "Certificat de potabilité d'un laboratoire agréé", "Dossier d'exploitation pour le maître d'ouvrage"]
  },
  {
    id: "aep-saep",
    category: "hydraulique",
    title: "Systèmes d'Adduction d'Eau Potable (AEP / SAEP)",
    subtitle: "Conception et pose de réseaux de distribution d'eau multi-villages et urbains",
    description: "Ingénierie et pose de canalisations d'adduction et de distribution en PEHD électrosoudable ou fonte ductile. Déploiement de bornes-fontaines communautaires, branchements particuliers, vannes de régulation, compteurs divisionnaires et ventouses anti-bélier.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Modélisation hydraulique avancée (EPANET, WaterCAD) pour éliminer les pertes de charge",
      "Pose de conduites PEHD DN 63 à DN 315 et fontes avec tranchées mécanisées",
      "Installation de Postes d'Eau Autonomes (PEA) et Bornes-Fontaines automatisées",
      "Épreuves hydrauliques en pression et désinfection systématique des réseaux",
      "Système de télégestion et comptage intelligent des volumes distribués"
    ],
    equipments: ["Machines de soudage bout-à-bout et électrofusion", "Trancheuses & mini-pelles", "Pompes d'épreuve hydrostatique", "Débitmètres électromagnétiques"],
    deliverables: ["Schéma de récolement géoréférencé SIG", "Procès-verbal d'épreuve en pression", "Manuel d'exploitation et de maintenance du réseau"]
  },
  {
    id: "chateaux-eau",
    category: "hydraulique",
    title: "Châteaux d'Eau & Réservoirs de Stockage",
    subtitle: "Ouvrages en béton armé banché et réservoirs métalliques surélevés",
    description: "Calcul structural et édification de châteaux d'eau de 20 m³ à 500 m³ sur fûts en béton armé ou structures métalliques treillis galvanisées à chaud. Conception anti-sismique, étanchéité alimentaire certifiée et systèmes de trop-plein sécurisés.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Études géotechniques G2 et dimensionnement des fondations profondes ou superficielles",
      "Fûts en béton armé hydrofuge conforme aux règles BAEL 91 / Eurocode 2",
      "Réservoirs métalliques modulaires galvanisés avec protection anticorrosion marine",
      "Tuyauteries intérieures en inox 316L et échelles crinolines normalisées",
      "Parafoudres, balisage aérien et étanchéité par résine époxydique alimentaire"
    ],
    equipments: ["Centrales à béton et camions toupies", "Échafaudages multidirectionnels certifiés", "Grues et nacelles élévatrices", "Vibreurs à haute fréquence"],
    deliverables: ["Notes de calcul de structure validées par bureau de contrôle", "Épreuves d'étanchéité à l'eau", "Garantie décennale sur le gros œuvre"]
  },
  {
    id: "pompage-solaire",
    category: "hydraulique",
    title: "Stations de Pompage Solaires Photovoltaïques",
    subtitle: "Autonomie énergétique complète pour l'accès à l'eau sans dépendance au réseau électrique",
    description: "Dimensionnement et installation de champs solaires photovoltaïques dédiés à l'exhaure de l'eau. Partenariat avec les marques de référence mondiale (Lorentz, Grundfos, Schneider Electric) pour des pompages au fil du soleil durables et sans émission de CO2.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Optimisation de l'angle d'inclinaison selon l'ensoleillement zénithal au Bénin",
      "Onduleurs / variateurs solaires MPPT à haut rendement (>98%)",
      "Capteurs de niveau sec et sondes de sécurité anti-marche à vide",
      "Structures supports en acier galvanisé antivol et clôture de sécurisation grillagée",
      "Télésurveillance GSM/4G avec monitoring en temps réel des débits extraits"
    ],
    equipments: ["Modules photovoltaïques monocristallins Tier-1", "Variateurs solaires certifiés", "Coffrets de protection DC/AC avec parafoudres type 2", "Logiciels de simulation solaire (Compass, PVsyst)"],
    deliverables: ["Bilan énergétique et courbe de débit quotidien garanti", "Schémas unifilaires électriques", "Formation des techniciens locaux de maintenance"]
  },
  {
    id: "ingenieur-conseil",
    category: "conseil-bureau-etudes",
    title: "Ingénierie-Conseil & Maîtrise d'Œuvre (MOE)",
    subtitle: "Accompagnement stratégique des bailleurs, ministères et promoteurs immobiliers",
    description: "HYDRO TPE SARL agit en tant qu'ingénieur-conseil indépendant pour le compte de l'État béninois, des municipalités, des bailleurs de fonds (Banque Mondiale, AFD, KFW, BAD) et des maîtres d'ouvrage privés. Conception, rédaction des DAO, suivi des travaux et réceptions.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Assistance à Maîtrise d'Ouvrage (AMO) et Maîtrise d'Œuvre complète (MOE)",
      "Rédaction des Dossiers d'Appel d'Offres (DAO) et CCTP selon standards internationaux",
      "Surveillance continue, contrôle de la qualité des matériaux et respect du planning",
      "Audits techniques et diagnostics de défaillance d'ouvrages hydrauliques et de génie civil",
      "Études d'Impact Environnemental et Social (EIES) conformes aux exigences ABE"
    ],
    equipments: ["Stations de calcul CAO/DAO (AutoCAD, Civil 3D, Robot Structural Analysis)", "Stations totales Leica & Récepteurs GNSS RTK", "Logiciels de planification MS Project & Primavera"],
    deliverables: ["Avant-Projets Sommaires (APS) & Détaillés (APD)", "Rapports hebdomadaires et mensuels de contrôle", "Procès-verbaux contradictoires de réceptions provisoire et définitive"]
  },
  {
    id: "etudes-structures-vrd",
    category: "conseil-bureau-etudes",
    title: "Études Géotechniques & Dimensionnement Structural",
    subtitle: "Calculs de résistance des matériaux, fondations spéciales et infrastructures de génie civil",
    description: "Modélisation numérique et calculs de structures en béton armé, charpente métallique et ouvrages enterrés selon les normes Eurocodes et BAEL. Dimensionnement géotechnique des sols et prévention des désordres structurels.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Campagnes géotechniques (Pénétromètre lourd, carottage, essais de laboratoire)",
      "Dimensionnement de fondations superficielles, radiers et pieux forés",
      "Plans d'armatures et bordereaux de ferraillage de précision",
      "Calcul de stabilité de talus, soutènements et blindages de fouilles",
      "Diagnostics de pathologies des bétons et propositions de confortement"
    ],
    equipments: ["Pénétromètres dynamiques", "Scléromètres et pachomètres", "Logiciels de calcul aux éléments finis"],
    deliverables: ["Rapport géotechnique de synthèse", "Plans d'exécution 'Bon Pour Exécution' (BPE)", "Notes d'hypothèses et de calculs de stabilité"]
  },
  {
    id: "assainissement-drainage",
    category: "assainissement",
    title: "Assainissement Pluvial & Collecteurs Urbains",
    subtitle: "Lutte contre les inondations, canalisations de drainage et schémas directeurs",
    description: "Conception et construction de caniveaux à ciel ouvert, dalots fermés en béton armé, bassins de rétention et collecteurs d'eaux pluviales. Réponses adaptées aux fortes pluviométries côtières et aux risques d'inondation en milieu urbain béninois.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Schémas directeurs d'assainissement pluvial à l'échelle des communes",
      "Préfabrication et coulage en place de caniveaux et buses de drainage",
      "Construction de dalots simples, doubles et triples pour franchissements routiers",
      "Aménagement de bassins de décantation et lagunes de régulation hydraulique",
      "Stations de relevage d'eaux usées et pluviales avec pompes dilacératrices"
    ],
    equipments: ["Pelles excavatrices et chargeuses", "Coffrages métalliques modulaires pour dalots", "Murs de soutènement préfabriqués", "Compacteurs mixtes"],
    deliverables: ["Plans de calage altimétrique des fils d'eau", "Notes de calcul de débit décennal/centennal", "Réception de voirie et écoulement d'eau"]
  },
  {
    id: "hydro-agricole-irrigation",
    category: "btp-vrd",
    title: "Aménagements Hydro-Agricoles & Barrages",
    subtitle: "Valorisation de l'eau pour la souveraineté alimentaire et le pastoralisme",
    description: "Aménagement de périmètres maraîchers et rizicoles irrigués, construction de retenues collinaires, digues en terre compactée et stations de pompage agricole. Création de points d'eau pastoraux stratégiques dans le nord du Bénin.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Systèmes d'irrigation par aspersion, goutte-à-goutte et submersion contrôlée",
      "Barrages en terre homogène avec évacuateur de crue et masque d'étanchéité",
      "Abreuvoirs pastoraux automatisés avec couloirs de contention",
      "Nivellement de précision par guidage laser des parcelles agricoles",
      "Pistes de désenclavement et radiers insubmersibles pour le transport des récoltes"
    ],
    equipments: ["Bulldozers et niveleuses équipées guidage laser", "Compacteurs à pieds de dameurs", "Équipements d'irrigation Netafim/Rain Bird", "Caniveaux préfabriqués en béton"],
    deliverables: ["Dossier technique de gestion hydraulique de la retenue", "Notice de gestion d'eau parcellaire", "Manuel de maintenance des équipements d'irrigation"]
  }
];

// 4 Main Projects (Exact Replica of Built Right Mockup Grid)
export const PROJECTS = [
  {
    id: "commercial-complex",
    title: "Complexe Tertiaire & Réseau Hydraulique Intégré",
    category: "commercial",
    categoryLabel: "COMMERCIAL",
    client: "Direction Générale des Infrastructures / Privé",
    location: "Cotonou, Bénin",
    year: "2024",
    status: "Livré & En Exploitation",
    keyMetric: "45 000 m²",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Conception et maîtrise d'œuvre d'un complexe tertiaire moderne intégrant réseau d'adduction d'eau indépendant, station d'épuration autonome et gestion intelligente des eaux de ruissellement.",
    details: [
      "Bâtiment basse consommation avec fondations profondes certifiées",
      "Forage d'exploitation dédié 25 m³/h et bâche de stockage tampon 80 m³",
      "Système de surpression automatisé Grundfos et filtration à sable quartz",
      "Livraison dans le respect strict des délais contractuels"
    ]
  },
  {
    id: "luxury-residence",
    title: "Domaine Résidentiel & Adduction d'Eau Autonome",
    category: "residential",
    categoryLabel: "RÉSIDENTIEL",
    client: "Société Civile Immobilière du Littoral",
    location: "Abomey-Calavi, Bénin",
    year: "2024",
    status: "Réceptionné sans réserve",
    keyMetric: "8 500 m²",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description: "Aménagement d'une zone résidentielle de haut standing comprenant forage artésien, château d'eau modulaire de 100 m³, voiries pavées et réseau de drainage pluvial paysager.",
    details: [
      "Fondations anti-tassement sur sol meuble avec géotextile renforcé",
      "Château d'eau modulaire galvanisé à chaud traité contre l'air marin",
      "Alimentation de 120 villas avec comptage divisionnaire individuel",
      "Éclairage solaire et espaces verts irrigués par goutte-à-goutte"
    ]
  },
  {
    id: "industrial-warehouse",
    title: "Plateforme Agro-Industrielle & Forage Gros Débit",
    category: "industrial",
    categoryLabel: "INDUSTRIEL",
    client: "Complexe Agro-Industriel du Septentrion",
    location: "Parakou, Bénin",
    year: "2023",
    status: "En Pleine Exploitation",
    keyMetric: "120 000 m²",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    description: "Réalisation d'un complexe logistique et industriel avec forage profond en zone de socle cristallin (165 m, débit 45 m³/h), dallage industriel à forte portance et station de traitement d'eau.",
    details: [
      "Forage au marteau fond de trou (MFT) avec crépines inox Johnson",
      "Dalle industrielle en béton fibré résistant aux charges lourdes de 8 t/m²",
      "Générateur de pompage solaire photovoltaïque Lorentz 32 kWc",
      "Analyses bactériologiques et potabilité certifiée conforme OMS"
    ]
  },
  {
    id: "renovation-heritage",
    title: "Aménagement de Collecteurs & Réhabilitation Urbaine",
    category: "renovation",
    categoryLabel: "RÉNOVATION & VRD",
    client: "Programme de Modernisation des Villes Historiques",
    location: "Ouidah, Bénin",
    year: "2023",
    status: "Clôturé avec succès",
    keyMetric: "35 000 m²",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    description: "Travaux d'assainissement pluvial d'envergure : construction de 3 200 m de caniveaux à ciel ouvert, dalots cadres de franchissement et pavage autobloquant des voies historiques contre l'érosion.",
    details: [
      "Calage altimétrique de précision pour écoulement gravitaire vers lagune",
      "Suppression définitive des inondations saisonnières pour 8 000 habitants",
      "Pavage de qualité carrossable avec bordures en béton armé",
      "Préservation du patrimoine architectural environnant"
    ]
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Diagnostic & Reconnaissance Géophysique",
    description: "Études de faisabilité sur site, investigations géologiques, sondages électriques pour localiser les aquifères les plus productifs.",
    tag: "Phase Préliminaire"
  },
  {
    step: "02",
    title: "Conception Technique & Modélisation",
    description: "Dimensionnement hydraulique (Epanet), calculs de structures BA (Robot/Eurocodes), notes de calculs géotechniques et plans DAO.",
    tag: "Ingénierie & DAO"
  },
  {
    step: "03",
    title: "Mobilisation & Travaux de Terrain",
    description: "Déploiement des ateliers de foration, matériels lourds de BTP et équipes d'ingénieurs sous strict protocole de sécurité QHSE.",
    tag: "Exécution Chantier"
  },
  {
    step: "04",
    title: "Essais, Analyses & Contrôle Qualité",
    description: "Essais de pompage normalisés (paliers de débit, remontée), épreuves d'étanchéité, analyses d'eau en laboratoire agréé.",
    tag: "Validation Technique"
  },
  {
    step: "05",
    title: "Réception & Transfert de Compétences",
    description: "Procès-Verbal de Réception, remise du Dossier des Ouvrages Exécutés (DOE), et formation des comités de gestion.",
    tag: "Pérennité & Clôture"
  }
];

export const TESTIMONIALS = [
  {
    name: "Ing. Koffi SOSSOU",
    role: "Directeur des Services Techniques",
    organization: "Mairie d'Abomey-Calavi (Bénin)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "HYDRO TPE SARL a fait preuve d'un professionnalisme exemplaire lors de la réalisation du SAEP dans notre commune. La rigueur dans le respect du cahier des charges et la maîtrise des délais font d'eux un partenaire de tout premier plan."
  },
  {
    name: "Dr. Mariam BIO GUÉRA",
    role: "Coordonnatrice de Programmes Hydrauliques",
    organization: "ONG Internationale d'Aide au Développement (Borgou/Atacora)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "En zone de socle dans le nord du Bénin, trouver de l'eau à gros débit relève souvent du défi. Grâce aux compétences géophysiques pointues des ingénieurs d'HYDRO TPE, 10 forages positifs sur 10 ont été réalisés avec succès."
  },
  {
    name: "M. Christian AKANGBÉ",
    role: "Directeur Général",
    organization: "Société Civile Immobilière 'Les Jardins de la Haie Vive'",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "Leur bureau d'études a assuré la maîtrise d'œuvre de notre station d'épuration autonome et de notre réseau d'adduction privé. Aucune faille, des notes de calculs irréprochables et une grande écoute."
  }
];

export const PARTNERS_LOGOS = [
  { name: "Ministère de l'Eau et des Mines du Bénin", type: "Institutionnel" },
  { name: "ANAEPMR (Agence Nationale de l'Eau Potable)", type: "Agence d'État" },
  { name: "SONEB (Société Nationale des Eaux du Bénin)", type: "Opérateur Public" },
  { name: "Ministère du Cadre de Vie et des Transports", type: "Tutelle Technique" },
  { name: "Banque Mondiale / IDA", type: "Bailleur International" },
  { name: "Agence Française de Développement (AFD)", type: "Partenaire Financier" },
  { name: "KfW Entwicklungsbank", type: "Coopération Allemande" },
  { name: "Association Nationale des Communes du Bénin (ANCB)", type: "Collectivités Locales" }
];

export const FAQS = [
  {
    question: "Quelle est la zone d'intervention géographique d'HYDRO TPE SARL ?",
    answer: "HYDRO TPE SARL intervient sur l'intégralité des 12 départements de la République du Bénin (Littoral, Atlantique, Ouémé, Plateau, Zou, Collines, Borgou, Alibori, Donga, Atacora, Mono, Couffo). Grâce à nos deux bases techniques à Cotonou et Parakou, nous mobilisons rapidement nos ateliers de foration et équipes de génie civil partout sur le territoire national."
  },
  {
    question: "Quels sont vos agréments techniques officiels au Bénin ?",
    answer: "HYDRO TPE SARL est titulaire des agréments techniques d'exercice délivrés par le Ministère du Cadre de Vie et des Transports (B4 / H4) et par le Ministère de l'Eau et des Mines du Bénin pour les travaux hydrauliques et la maîtrise d'œuvre. Nous opérons dans le strict respect des textes réglementaires et des normes QHSE."
  },
  {
    question: "Quelles sont les spécificités de foration entre le sud et le nord du Bénin ?",
    answer: "Dans le sud du Bénin (bassin sédimentaire côtier), nous utilisons des méthodes de foration au Rotary avec boue polymère, tubage PVC alimentaire renforcé et massif filtrant calibré. Dans le nord (zone de socle cristallin), les aquifères se situent dans les fractures de roches dures nécessitant le marteau fond de trou (MFT) à air comprimé haute pression."
  },
  {
    question: "Combien de temps prend en moyenne la réalisation d'un projet d'AEP ou de forage ?",
    answer: "Pour un forage d'exploitation individuel ou industriel (avec prospection, foration, essais de débit et analyse d'eau), le délai typique est de 7 à 14 jours ouvrés. Pour un Système d'Alimentation en Eau Potable complet, les délais varient de 60 à 120 jours selon l'envergure du réseau."
  },
  {
    question: "Proposez-vous des solutions de pompage 100% solaires écologiques ?",
    answer: "Oui, nous concevons et déployons des stations de pompage au fil du soleil sans batteries polluantes ni coûts de carburant diesel, avec des équipements de référence mondiale (Lorentz, Grundfos) garantissant un fonctionnement continu pendant plus de 20 ans."
  },
  {
    question: "Quelles garanties offrez-vous sur vos réalisations ?",
    answer: "Toutes nos constructions de génie civil et châteaux d'eau bénéficient d'une garantie décennale couverte par nos assurances professionnelles, avec un Dossier d'Ouvrage Exécuté (DOE) complet et une option de contrat de maintenance préventive."
  }
];

export const TECHNICAL_ARTICLES = [
  {
    id: "aquiferes-benin-forages",
    title: "Comprendre les aquifères du Bénin : De la côte au socle cristallin",
    category: "Hydrogéologie",
    date: "Mars 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=80",
    snippet: "Analyse des méthodes de foration Rotary vs Marteau Fond de Trou selon la géologie spécifique des 12 départements béninois."
  },
  {
    id: "pompage-solaire-afrique-ouest",
    title: "La transition vers le pompage solaire au fil du soleil au Bénin",
    category: "Énergies Propres",
    date: "Février 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
    snippet: "Comment l'élimination des groupes électrogènes diesel au profit du solaire abaisse considérablement le coût du m³ d'eau distribué."
  },
  {
    id: "resilience-climatique-drainage",
    title: "Conception de dalots et collecteurs pluviaux résilients",
    category: "Génie Civil & VRD",
    date: "Janvier 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    snippet: "Méthodologie de dimensionnement d'ouvrages d'art et caniveaux face aux pluies torrentielles et crues côtières."
  }
];
