import NextAuth, { User } from 'next-auth';
import GitHubProvider from '@auth/core/providers/github';
import GoogleProvider from '@auth/core/providers/google';
import CredentialsProvider from '@auth/core/providers/credentials';
import { ROUTES } from './navigation';
import { UserDTO } from '@/models';
import register from '@/actions/register';
import { AUTH_TYPE } from '@/lib/contants';
import login from '@/actions/login';

declare module 'next-auth' {
  interface Session {
    user: UserDTO;
    token: string;
  }

  interface User extends UserDTO {}
}

// For more information on options, see:
// https://next-auth.js.org/configuration/options
// https://github.com/settings/developers : Github

// console.log(process.env.AUTH_SECRET)
// console.log(process.env.GITHUB_CLIENT_ID)
// console.log(process.env.GITHUB_CLIENT_SECRET)


export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  secret: process.env.AUTH_SECRET!,
  session: {
    strategy: 'jwt',
  },
  trustHost: true,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      authorize: async (credentials: any, req) => {
        console.log('AUTHORISE CREDENTIALS');
        console.log(credentials);

        //1. Check if the user want to login or register
        let res = null;

        if (credentials.type == AUTH_TYPE.REGISTER)
          res = await register(credentials);
        else if (credentials.type == AUTH_TYPE.LOGIN)
          res = await login(credentials);
        else return null;

        if (res.code == 'error') return null;

        const user: User = res!.session!.user;

        console.log('USER', user);

        return user;
      },
    }),
  ],
  pages: {
    signIn: ROUTES.LOGIN,
    newUser: ROUTES.SERVICES, // If set, new users will be directed here on first sign in
  },
  callbacks: {},
});
