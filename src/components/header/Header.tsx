import NavigationLinks from "@/components/common/NavigationLinks";
import Icons from "@/components/common/Icons";
import ResponsiveNavigationDrawer from "../common/ResponsiveNavigationDrawer";
import SelectLanguage from "@/components/common/SelectLanguage";
import { SECTIONS_IDS } from "@/config";
import { cn } from "@/lib/utils";

interface HeaderProps {
  hideLogin?: boolean;
  showTabs?: boolean;
}

function Header({ hideLogin, showTabs }: HeaderProps) {
  return (
    <header
      id={SECTIONS_IDS.HEADER}
      className={cn(
        "w-full bg-white sticky top-0 z-40 flex flex-col justify-center py-2 px-4 sm:px-12 overflow-x-hidden",
        showTabs ? "py-2" : "h-20"
      )}
    >
      <div className="w-full m-0 h-fit flex justify-between">
        <div className="flex items-center">
          <Icons.logo />
        </div>
        <div className="hidden items-center md:flex">
          <NavigationLinks />
        </div>
        {!hideLogin ? (
          <>
            <div className="hidden items-center sm:flex space-x-4">
              <SelectLanguage />
            </div>
            <ResponsiveNavigationDrawer />
          </>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
