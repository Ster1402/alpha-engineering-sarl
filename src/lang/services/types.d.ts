interface AppService {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  href?: string;
  imageUrl: string;
  imageAlts?: string[];
}
