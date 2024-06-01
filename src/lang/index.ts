import { defaultBannerText } from "./banner";
import { defaultAppServices } from "./services";
import { defaultButtonText } from "./button";
import { defaultEmptyDataPanel } from "./empty-data-panel";
import { defaultFooterSection } from "./footer";
import {
  defaultRegisterPage,
  defaultLoginPage,
  defaultContactPage,
  defaultAccountValidationPage,
  defaultProfilePage,
} from "./form";
import { defaultManageDestinationSection } from "./manage-destination-section";
import { defaultPartners } from "./partners";

const lang = {
  banner: defaultBannerText,
  footer: defaultFooterSection,
  services: defaultAppServices,
  partners: defaultPartners,
  manageDestinationSection: defaultManageDestinationSection,
  buttons: defaultButtonText,
  pages: {
    register: defaultRegisterPage,
    login: defaultLoginPage,
    account_validation: defaultAccountValidationPage,
    contact: defaultContactPage,
    profile: defaultProfilePage,
  },
  panels: {
    emptyPanel: defaultEmptyDataPanel,
  },
};

export default lang;
