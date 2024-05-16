interface DestinationCard {
  title: string;
  slug: string;
  subtitle?: string;
  description?: string;
}

interface ManageDestinationSection {
  title: string;
  subtitle?: string;
  description?: string;
  destinations?: DestinationCard[];
}
