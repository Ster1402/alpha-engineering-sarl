"use client";

import { cn } from "@/lib/utils";
import { appConfig } from "@/config/app";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import lang from "@/lang";
import ListItem from "./ListItem";
import RenderHtmlContent from "./RenderHTMLContent";

interface NavigationLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  linkClassName?: string;
  linkOpenNewPage?: boolean;
  isBottom?: boolean;
}

function NavigationLinks({
  className,
  linkClassName,
  linkOpenNewPage = false,
  isBottom = false,
}: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu isBottom={isBottom}>
      <NavigationMenuList asChild>
        <nav
          className={cn(
            "flex text-black justify-center w-fit md:items-center flex-col md:flex-row gap-2 md:space-x-6",
            className
          )}
        >
          {appConfig.navigation.map((link, index) =>
            link.hasSubContent ? (
              <NavigationMenuItem key={`${index}-${link.href}`}>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:text-light-gold hover:bg-transparent inline-flex",
                    linkClassName
                  )}
                >
                  {link.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {link.subContent?.map((component) => (
                      <ListItem
                        key={component.subtitle}
                        title={component.subtitle}
                        href={component.href}
                      >
                        <RenderHtmlContent content={component.description} />
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : linkOpenNewPage ? (
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
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavigationLinks;
