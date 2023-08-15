import type {AuthOptions} from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "login",
      credentials: {
        email: {label: "Email", type: "text", placeholder: "Email"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials, req) {
        const {email, password}: {email: string; password: string} | any =
          credentials;

        try {
          const res = await fetch(
            "https://bookread-backend.goit.global/auth/login",
            {
              method: "POST",
              body: JSON.stringify({email, password}),
              headers: {"Content-Type": "application/json"},
            }
          );
          const user = await res.json();

          if (res.status === 200 && user) {
            return user;
          }

          return null;
        } catch (e) {
          console.log("e", e);
        }
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "googleAuth",
      credentials: {
        accessToken: {label: "accessToken", type: "text"},
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(
            "https://bookread-backend.goit.global/user/books",
            {
              method: "GET",
              headers: {authorization: `Bearer ${credentials?.accessToken}`},
            }
          );

          const user = await res.json();

          if (res.status === 200 && user) {
            const userData: any = {...credentials, userData: user};

            return userData;
          }

          return null;
        } catch (e) {
          console.log("e", e);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user};
    },

    async signIn({user}) {
      if (user) {
        return true;
      }
      return false;
    },

    async session({session, token}) {
      session.user = token as any;

      return session;
    },
  },
};
