// Contacts
import { defaultAppServices } from "@/lang/services";
import { type Contact } from "@/lib/types";

const CONTACTS: Contact[] = [
  {
    Email: "achille.mbougueng@chillo.tech",
  },
  {
    Phone: "+33 7 61 70 57 45",
  },
  {
    WhatsApp: "+33 7 61 70 57 45",
  },
];

// Routes
const ROUTES = {
  HOME: "/",
  ABOUT_US: "/about-us",
  SERVICES: "/services",
  PARTNERS: "/#partners",
  KNOWLEDGE: "/our-knowledge",
  CONTACT_US: "/contact-us",
  FAQ: "/faq",

  MAIL_TO: {
    ENTERPRISE: "mailto:contact@engineering-alpha.com",
    COMMUNITY: "mailto:contact@engineering-alpha.com",
  },

  SERVICES_SUB_MENU: {
    DESTINATION: "destination",
    WEBHOOKS: "webhooks",
    HISTORY: "history",
    ACCOUNT: "account",
  },

  BLOG: "/blog",
  PRICING: "/pricing",
  DOCUMENTATION: "/doc",
};

// Sections IDs
const SECTIONS_IDS = {
  HEADER: "header",
  BANNER: "banner",
  ABOUT_US: "about-us",
  SERVICE: "services",
  PARTNERS: "partners",
  FAQ: "faq",
  FOOTER: "footer",
};

// Navigation
const NAVIGATION_LINKS: NavigationLink[] = [
  {
    title: "Accueil",
    href: ROUTES.HOME,
  },
  {
    title: "Services",
    hasSubContent: true,
    subContent: defaultAppServices,
    href: ROUTES.SERVICES,
  },
  {
    title: "Nos partenaires",
    href: ROUTES.PARTNERS,
  },
];

// Resources for Devs / Business
const RESOURCES_LINKS: NavigationLink[] = [
  {
    title: "Blog",
    href: ROUTES.BLOG,
  },
  {
    title: "Pricing",
    href: ROUTES.PRICING,
  },
  {
    title: "Documentation",
    href: ROUTES.DOCUMENTATION,
  },
];

export { ROUTES, SECTIONS_IDS, NAVIGATION_LINKS, RESOURCES_LINKS, CONTACTS };
