const appConfig = {
  appName: "Alpha Engineering",
};

const defaultAppServices: AppService[] = [
  {
    id: 1,
    title: `${appConfig.appName} :`,
    subtitle: "Topographie et SIG",
    href: "/services/1",
    description: `Nous vous accompagnons dans la réalisation de tous vos projets de génie civil d’envergure en mettant à votre disposition des ingénieurs topographes expérimentés dans le métier.`,
    imageUrl: "/assets/images/services/s1.jpeg",
    expertises: [
      `La réalisation de levés topographiques qui développent des plans de grandes
       précisions grâce à la maitrise de nouvelles technologies
       (levé au drone).`,
      `La modélisation des plateformes`,
      `L’implantation de précision de tout ouvrage de VRD`,
    ],
    projects: [
      {
        id: 1,
        title: "Alimentation en eau potable Wenchi",
        description: `Modèle de la plateforme`,
        country: "Ghana",
        images: [
          "/assets/images/projects/p1.png",
          "/assets/images/projects/p2.png",
        ],
      },
    ],
  },
  {
    id: 2,
    title: `${appConfig.appName} :`,
    subtitle: "Hydraulique",
    href: "/services/2",
    description: `<b>Alpha Engineering</b> conçoit des systèmes d'approvisionnement en eau à la 
    pointe de la technologie adapté aux besoins du client et respectueux de l’environnement.<br/> 
    Nous proposons notre expertise aux partenaires de tous les secteurs concernés 
    (alimentation en eau potable, hydraulique agricole, assainissement, hydraulique industriel, etc).`,
    imageUrl: "/assets/images/services/s2.jpeg",
    imageAlts: [
      "/assets/images/services/s1.jpeg",
      "/assets/images/services/s2.jpeg",
    ],
    expertises: [
      "Les unités de captage",
      "La modélisation des réseaux",
      "Les stations de potabilisation",
      "Les unités de stockages",
      "Les réseaux de transport et de distribution",
      "Les unités de pompage",
      "Le diagnostic et le contrôle des réseaux",
      `Les stations d’épuration / traitement des effluents`,
    ],
    projects: [
      {
        id: 1,
        title: "Alimentation en Eau Potable du port autonome de Kribi",
        description: `Station de captage`,
        country: "Cameroun",
        images: [
          "/assets/images/projects/p3.png",
          "/assets/images/projects/p4.png",
        ],
      },
      {
        id: 2,
        title: "Alimentation en Eau Potable de Wenchi",
        description: `Ligne de clarification`,
        country: "Ghana",
        images: [
          "/assets/images/projects/p5.png",
          "/assets/images/projects/p6.jpeg",
        ],
      },
      {
        id: 3,
        title: "Alimentation en Eau Potable de Wenchi",
        description: `Station de stockage`,
        country: "Ghana",
        images: [
          "/assets/images/projects/p7.png",
          "/assets/images/projects/p8.jpeg",
        ],
      },
      {
        id: 4,
        title: "Alimentation en Eau Potable de Wenchi",
        description: `Réseau de distribution`,
        country: "Ghana",
        images: [
          "/assets/images/projects/p9.png",
          "/assets/images/projects/p10.png",
        ],
      },
      {
        id: 5,
        title: "Alimentation en Eau Potable du Port de Kribi",
        description: `Unité de relevage`,
        country: "Cameroun",
        images: [
          "/assets/images/projects/p11.jpeg",
          "/assets/images/projects/p12.png",
        ],
      },
    ],
  },
  {
    id: 3,
    title: `${appConfig.appName} :`,
    subtitle: "Energie système",
    description: `La fourniture et le déploiement d'infrastructures électriques constituent un secteur d'activité à part entière pour <b>Alpha Engineering</b>. Nous proposons des solutions innovantes dans les domaines.`,
    href: "/services/3",
    imageUrl: "/assets/images/services/s3.jpeg",
    imageAlts: [
      "/assets/images/services/s1.jpeg",
      "/assets/images/services/s2.jpeg",
      "/assets/images/services/s3.jpeg",
      "/assets/images/services/s4.jpeg",
      "/assets/images/services/s5.jpeg",
    ],
    expertises: [
      "Génie électrique et thermique",
      "Eclairage public",
      `Transport et distribution d’énergie`,
      `Performance énergétique`,
      `Equipement des postes de transformation d’énergie MT&BT`,
      `Energie renouvelable`,
    ],
    projects: [
      {
        id: 1,
        title: "Alimentation en Eau Potable du Port automne de Kribi",
        description: `Ligne électrique et réseau fibre optique`,
        country: "Cameroun",
        images: [
          "/assets/images/projects/p13.png",
          "/assets/images/projects/p14.png",
        ],
      },
    ],
  },
  {
    id: 4,
    title: `${appConfig.appName} :`,
    subtitle: "Génie civil",
    href: "/services/4",
    description: `Nous développons des projets de construction grâce à des processus d'ingénierie de haut niveau permettant une meilleure compréhension et appropriation des projets par nos clients. Nous vous accompagnons de <b>la conception à l'exécution des travaux, en passant par les études géotechniques entièrement développé par BIM.</b>`,
    imageUrl: "/assets/images/services/s4.jpeg",
    imageAlts: [
      "/assets/images/services/s1.jpeg",
      "/assets/images/services/s2.jpeg",
      "/assets/images/services/s3.jpeg",
      "/assets/images/services/s4.jpeg",
      "/assets/images/services/s5.jpeg",
      "/assets/images/services/s3.jpeg",
      "/assets/images/services/s4.jpeg",
      "/assets/images/services/s5.jpeg",
    ],
    expertises: [`Les ouvrages d'art,`, `Les terrassements`, `Les bâtiments`],
    projects: [
      {
        id: 1,
        title: "Alimentation en Eau Potable du Port autonome de Kribi",
        description: `Château d’eau sur tour 1500 m3`,
        country: "Cameroun",
        images: [
          "/assets/images/projects/p15.png",
          "/assets/images/projects/p16.png",
          "/assets/images/projects/p17.png",
        ],
      },
      {
        id: 2,
        title: "Alimentation en Eau Potable de Wenchi",
        description: `Base vie`,
        country: "Ghana",
        images: [
          "/assets/images/projects/p18.png",
          "/assets/images/projects/p19.png",
          "/assets/images/projects/p20.png",
        ],
      },
    ],
  },
  {
    id: 5,
    title: `${appConfig.appName} :`,
    subtitle: "Génie des procédés",
    href: "/services/5",
    description: `Nous accompagnons nos clients dans le processus de sélection de la filiale de traitement des eaux ou des effluents la mieux adaptée et la moins coûteuse.`,
    imageUrl: "/assets/images/services/s5.jpeg",
    imageAlts: ["/assets/images/services/s5.jpeg"],
    projects: [
      {
        id: 1,
        title: "Alimentation en Eau Potable de Wenchi",
        description: `Unité de dosage des réactifs`,
        country: "Ghana",
        images: [
          "/assets/images/projects/p21.png",
          "/assets/images/projects/p22.png",
        ],
      },
    ],
  },
  {
    id: 6,
    title: `${appConfig.appName} :`,
    subtitle: "Automation et télégestion",
    href: "/services/6",
    description: `<b>Alpha Engineering</b> offre la possibilité aux entreprises partenaires et aux particuliers de développer des installations connectées et autonomes grâce au SCADA.`,
    imageUrl: "/assets/images/services/s6.jpeg",
    expertises: [
      `Les stations de traitement d’eaux entièrement automatisées`,
      `Les stations d’épuration semi-autonome`,
      `Les réseaux de transport et de distribution télégérés`,
    ],
  },
  {
    id: 7,
    title: `${appConfig.appName} :`,
    subtitle: "Environnement",
    href: "/services/7",
    description: `Notre entreprise s’inscrit dans une dynamique de préservation de l’environnement. Nous vous accompagnons dans le développement et la mise en œuvre des Plans de Gestion Environnementale et Sociale (PGES) ainsi que les Etudes d'Impacts Environnementales et Sociales (EIES)`,
    imageUrl: "/assets/images/services/s7.jpeg",
  },
];

export { defaultAppServices };
