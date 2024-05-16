import { type SocialLink } from '@/lib/types';

const SOCIALS_TITLES = {
  LINKEDIN: 'LinkedIn',
  TWITTER: 'Twitter',
  FACEBOOK: 'Facebook',
  WHATSAPP: 'Whatsapp',
  INSTAGRAM: 'Instagram',
};

const linkLinkedIn: SocialLink = {
  title: SOCIALS_TITLES.LINKEDIN,
  href: 'https://www.linkedin.com/company/chillo-tech/',
};
const linkTwitter: SocialLink = {
  title: SOCIALS_TITLES.TWITTER,
  href: 'http://twitter.com',
};
const linkFacebook: SocialLink = {
  title: SOCIALS_TITLES.FACEBOOK,
  href: 'https://web.facebook.com/profile.php?id=100084306755977',
};
const linkWhatsapp: SocialLink = {
  title: SOCIALS_TITLES.WHATSAPP,
  href: '#',
};
const linkInstagram: SocialLink = {
  title: SOCIALS_TITLES.INSTAGRAM,
  href: '#',
};

const SOCIALS: SocialLink[] = [
  linkLinkedIn,
  linkTwitter,
  linkFacebook,
  linkInstagram,
  linkWhatsapp,
];

export { SOCIALS, SOCIALS_TITLES };
