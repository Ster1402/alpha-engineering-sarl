import Icons from '@/components/common/Icons';
import { SOCIALS_TITLES, SOCIALS } from '@/config/socials';
import Link from 'next/link';

const icon = (label: string) => {
  switch (label) {
    case SOCIALS_TITLES.INSTAGRAM:
      return <Icons.instagram className="w-6 h-6" />;
    case SOCIALS_TITLES.LINKEDIN:
      return <Icons.in className="w-6 h-6" />;
    case SOCIALS_TITLES.FACEBOOK:
      return <Icons.facebook className="w-6 h-6" />;
    case SOCIALS_TITLES.WHATSAPP:
      return <Icons.whatsapp className="w-6 h-6" />;
  }
};

const SocialMediaLinks = () => {
  return (
    <div className={'flex items-center gap-1'}>
      {SOCIALS.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          title={social.title}>
          {icon(social.title)}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
