interface Project {
  id: number;
  title: string;
  description: string;
  country: string;
  images: string[];
  href?: string;
}

interface AppService {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
  imageUrl: string;
  imageAlts?: string[];
  expertises?: string[];
  projects?: Project[];
}
