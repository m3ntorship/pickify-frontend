import NextAuth from 'next-auth';
import 'firebase/auth';
import Providers from 'next-auth/providers';
import type { JWT } from 'next-auth/jwt';
import type { IAuth } from '../../../modules/shared/api/auth/IAuth';
import { register } from '../../../modules/shared/api/auth/authApi';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    jwt(token: JWT, user, account) {
      if (account?.idToken) {
        return { ...token, idToken: account.idToken };
      }
      return token;
    },
    async session(session, token) {
      const { resData } = await register(token.idToken as string);
      if (resData.error) return session;
      const { uuid } = resData as IAuth.IAuthSuccessData;
      return { ...session, uuid };
    },
  },
});
