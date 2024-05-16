// Contacts
import { type Contact } from '@/lib/types';

const CONTACTS: Contact[] = [
  {
    Email: 'achille.mbougueng@chillo.tech',
  },
  {
    Phone: '+33 7 61 70 57 45',
  },
  {
    WhatsApp: '+33 7 61 70 57 45',
  },
];

// Routes
type Tabs = {
  name: string;
  displayName: string;
};

const ROUTES = {
  HOME: '/',
  ABOUT_US: '/about-us',
  SERVICES: '/services',
  PARTNERS: '/partners',
  KNOWLEDGE: '/our-knowledge',
  CONTACT_US: '/contact-us',
  FAQ: '/faq',

  SERVICES_SUB_MENU: {
    DESTINATION: 'destination',
    WEBHOOKS: 'webhooks',
    HISTORY: 'history',
    ACCOUNT: 'account',
  },

  BLOG: '/blog',
  PRICING: '/pricing',
  DOCUMENTATION: '/doc',
};

// Sections IDs
const SECTIONS_IDS = {
  HEADER: 'header',
  BANNER: 'banner',
  ABOUT_US: 'about-us',
  SERVICE: 'services',
  FAQ: 'faq',
  FOOTER: 'footer',
};

// Navigation
const NAVIGATION_LINKS: NavigationLink[] = [
  {
    title: 'Accueil',
    href: ROUTES.HOME,
  },
  {
    title: 'Services',
    href: ROUTES.SERVICES,
  },
  {
    title: 'Nos partenaires',
    href: ROUTES.PARTNERS,
  },
  {
    title: 'Notre expertise',
    href: ROUTES.KNOWLEDGE,
  },
  
  ];

// Resources for Devs / Business
const RESOURCES_LINKS: NavigationLink[] = [
  {
    title: 'Blog',
    href: ROUTES.BLOG,
  },
  {
    title: 'Pricing',
    href: ROUTES.PRICING,
  },
  {
    title: 'Documentation',
    href: ROUTES.DOCUMENTATION,
  },
];

export {
  ROUTES,
  SECTIONS_IDS,
  NAVIGATION_LINKS,
  RESOURCES_LINKS,
  CONTACTS,
};
