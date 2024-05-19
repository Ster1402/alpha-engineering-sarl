import ContactForm from "@/components/forms/ContactForm";
import { ROUTES } from "@/config";
import lang from "@/lang";
import { cn } from "@/lib/utils";
import Link from "next/link";

function ContactPage() {
  return (
    <article className="bg-secondary bg-opacity-15 h-full pb-12 mb-0 min-h-screen flex flex-col justify-center items-center">
      <h1 className={cn("text-2xl text-black md:text-4xl mb-2")}>
        {lang?.pages.contact.title}
      </h1>
      <p className="text-sm mb-6">
        {lang?.pages.contact.subtitle}{" "}
        <Link href={ROUTES.MAIL_TO.ENTERPRISE}>
          <span className="text-secondary hover:text-light-gold font-semibold">
            {lang?.pages.contact.subtitleButton}
          </span>
        </Link>
      </p>

      <section className="mx-auto w-full flex flex-col justify-center items-center">
        <div className="w-full md:w-max mx-auto rounded-md">
          <ContactForm />
        </div>
      </section>
    </article>
  );
}

export default ContactPage;
