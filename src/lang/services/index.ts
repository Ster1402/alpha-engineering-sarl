import { appConfig } from "@/config";

const defaultAppServices: AppService[] = [
  {
    title: `${appConfig.appName} :`,
    subtitle: "Topographie et SIG",
    description: `Nous vous accompagnons dans la réalisation de tous vos projets de génie civil d’envergure en mettant à votre disposition des ingénieurs topographes expérimentés qui développent des plans de grandes...`,
    imageUrl: "/assets/images/services/s1.jpeg",
  },
  {
    title: `${appConfig.appName} :`,
    subtitle: "Hydraulique",
    description: `Alpha Engineering conçoit des systèmes d'approvisionnement en eau à la pointe de la technologie adapté aux besoins du client et respectueux de l’environnement. Nous proposons notre expertise aux partenaires de tous...`,
    imageUrl: "/assets/images/services/s2.jpeg",
  },
  {
    title: `${appConfig.appName} :`,
    description: `La fourniture et le déploiement d'infrastructures électriques constituent un secteur d'activité à part entière pour Alpha Engineering. Nous proposons des solutions innovantes dans les domaines.`,
    subtitle: "Energie système",
    imageUrl: "/assets/images/services/s3.jpeg",
  },
  {
    title: `${appConfig.appName} :`,
    subtitle: "Génie civil",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.`,
    imageUrl: "/assets/images/services/s4.jpeg",
  },
  {
    title: `${appConfig.appName} :`,
    subtitle: "Génie des procédés",
    description: `Nous accompagnons nos clients dans le processus de sélection de la filiale de traitement des eaux ou des effluents la mieux adaptée et la moins coûteuse.`,
    imageUrl: "/assets/images/services/s5.jpeg",
  },
  {
    title: `${appConfig.appName} :`,
    subtitle: "Automation et télégestion",
    description: `Alpha Engineering offre la possibilité aux entreprise partenaires et au particulier de développer des installations connecté et autonome grâce au SCADA.`,
    imageUrl: "/assets/images/services/s6.jpeg",
  },
  {
    title: `${appConfig.appName} :`,
    subtitle: "Environnement",
    description: `Notre entreprise s’inscrit dans une dynamique de préservation de l’environnement. Nous vous accompagnons dans le développement et la mise en œuvre des Plans de Gestion Environnementale et Sociale (PGES)`,
    imageUrl: "/assets/images/services/s7.jpeg",
  },
];

export { defaultAppServices };
