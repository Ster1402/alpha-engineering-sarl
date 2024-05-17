import Icons from '@/components/common/Icons';
import ContactForm from '@/components/forms/ContactForm';
import { ROUTES } from '@/config';
import lang from '@/lang';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function ContactPage() {
  return (
    <article className="mx-auto pt-12 h-fit mb-4 gap-2 flex flex-col items-center">
      <h1 className={cn("text-2xl md:text-4xl")}>
        {lang?.pages.contact.title}
      </h1>
      <p className="text-sm">
        {lang?.pages.contact.subtitle}{" "}
        <Link href={ROUTES.MAIL_TO.ENTERPRISE}>
          <span className="text-secondary hover:text-light-gold font-semibold">
            {lang?.pages.contact.subtitleButton}
          </span>
        </Link>
      </p>

      <section className="max-w-lg mx-auto w-full flex flex-col justify-center items-center">
        <div className="w-full md:w-max mx-auto rounded-md border-2 border-gray py-2">
          <ContactForm />
        </div>
      </section>
    </article>
  );
}

export default ContactPage;
