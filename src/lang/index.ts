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
  defaultConfigureSourcePage,
  defaultConfigureDestinationPage,
  defaultConfigureWebhookPage,
} from "./form";
import { defaultManageDestinationSection } from "./manage-destination-section";

const lang = {
  banner: defaultBannerText,
  footer: defaultFooterSection,
  services: defaultAppServices,
  manageDestinationSection: defaultManageDestinationSection,
  buttons: defaultButtonText,
  pages: {
    webhookCreation: {
      configureSource: defaultConfigureSourcePage,
      configureDestination: defaultConfigureDestinationPage,
      configureWebhook: defaultConfigureWebhookPage,
    },
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
