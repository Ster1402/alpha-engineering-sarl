import { UserDTO } from '@/models';

interface Contact {
  [key: string]: string;
}

interface SocialLink {
  title: string;
  href: string;
}

interface AuthCredentials {
  type: 'login' | 'register';
  data: UserDTO;
}

interface AuthResponse {
  code: 'error' | 'success';
  message: string;
  session?: {
    user: UserDTO;
    token: string;
  };
}
