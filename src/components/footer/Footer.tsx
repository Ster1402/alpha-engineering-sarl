import { SECTIONS_IDS, appConfig } from "@/config";
import lang from "@/lang";
import RenderHtmlContent from "../common/RenderHTMLContent";
import NavigationLinks from "../common/NavigationLinks";
import SocialMediaLinks from "../common/SocialMediaLinks";
import Icons from "../common/Icons";

const Footer = () => {
  return (
    <footer id={SECTIONS_IDS.FOOTER} className="w-full pt-8 sm:pt-12 bg-dark ">
      <div className="w-full px-4 md:px-12 pb-12">
        <div className="flex flex-col gap-4 flex-wrap sm:gap-8 md:flex-row md:justify-between space-y-8 sm:space-y-0">
          <div>
            <h2 className="text-white mb-2 font-extrabold font-heading text-3xl md:text-5xl">
              <Icons.logo_white />
            </h2>
            <div className="text-light-blue text-sm py-2 pr-2 max-w-sm">
              <p>
                <span className="font-bold text-lg">Yaoundé - Cameroun</span>
                <br />
                Face Stade Omnisports,
                <br />
                Rue N°1370 -MFANDENA
                <br />
                contact@engineering-alpha.com
                <br />
                +237 695 233 131 / 675 001 394
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-8 sm:flex-row md:space-x-8 space-y-4 sm:space-y-0">
            <div className="flex flex-col space-y-4 md:text-center">
              <NavigationLinks
                isBottom={true}
                linkClassName="font-light text-lg"
                className="text-white font-light items-start md:space-x-0 md:flex-col"
              />
            </div>
          </div>
          <div className="text-white flex flex-col space-y-2 pr-8">
            <h3 className="font-bold text-xl">Réseau</h3>
            <div className="text-white text-sm pr-4 mb-6 font-light">
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 opacity-75 flex flex-col justify-center items-center w-full bg-blue brightness-150 text-center">
        <div className="inline-flex text-gray-50/50 text-sm">
          <RenderHtmlContent content={lang.footer.copyright} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
