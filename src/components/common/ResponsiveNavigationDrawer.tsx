import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Icons from "./Icons";
import { cn } from "@/lib/utils";
import { appConfig } from "@/config";
import NavigationLinks from "./NavigationLinks";
import SelectLanguage from "./SelectLanguage";

interface ResponsiveNavigationDrawerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ResponsiveNavigationDrawer({
  className,
}: ResponsiveNavigationDrawerProps) {
  return (
    <div className="flex md:hidden flex-col justify-center items-center">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Icons.menu className="w-4 h-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className={cn("mx-auto h-[80vh] w-full max-w-sm", className)}>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription>{appConfig.title}</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <NavigationLinks linkOpenNewPage={true} />
            </div>
            <DrawerFooter>
              <hr className="my-4" />
              <SelectLanguage />
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default ResponsiveNavigationDrawer;
