import {
  CONTACTS,
  NAVIGATION_LINKS,
  RESOURCES_LINKS,
} from '@/config/navigation';

export const appConfig = {
  appName: 'Alpha Engineering',
  title: 'Alpha Engineering',
  description:
    'Alpha Engineering',
  navigation: NAVIGATION_LINKS,
  resources: RESOURCES_LINKS,
  contacts: CONTACTS,
};

export type AppConfig = typeof appConfig;
