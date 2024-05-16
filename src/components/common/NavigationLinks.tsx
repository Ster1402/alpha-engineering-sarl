"use client";

import { cn } from "@/lib/utils";
import { appConfig } from "@/config/app";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavigationLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  linkClassName?: string;
  linkOpenNewPage?: boolean;
}

function NavigationLinks({
  className,
  linkClassName,
  linkOpenNewPage = false,
}: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex text-black justify-center w-fit md:items-center flex-col md:flex-row gap-2 md:space-x-6",
        className
      )}
    >
      {appConfig.navigation.map((link, index) =>
        linkOpenNewPage ? (
          <a
            key={`${index}-${link.href}`}
            className={cn(
              pathname == link.href ? "active-link" : "",
              "hover:text-blue hover:font-bold inline-flex",
              linkClassName
            )}
            href={link.href}
          >
            {link.title}
          </a>
        ) : (
          <Link
            key={`${index}-${link.href}`}
            className={cn(
              pathname == link.href ? "active-link" : "",
              "hover:text-light-gold inline-flex",
              linkClassName
            )}
            href={link.href}
          >
            {link.title}
          </Link>
        )
      )}
    </nav>
  );
}

export default NavigationLinks;
