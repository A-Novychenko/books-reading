import type {AuthOptions, User} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
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
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "googleAuth",
      credentials: {
        accessToken: {label: "accessToken", type: "text"},
      },
      async authorize(credentials, req) {
        console.log("credentials", credentials);
        // console.log("credentials?.accessToken", credentials?.accessToken);
        const res = await fetch(
          "https://bookread-backend.goit.global/user/books",
          {
            method: "GET",
            headers: {authorization: `Bearer ${credentials?.accessToken}`},
          }
        );
        const user = await res.json();

        console.log("UUUUSSSSEEERRR", user);

        if (res.status === 200 && user) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({token, user}) {
      console.log("token", token);
      console.log("user TOKEN", user);
      return {...token, ...user};
    },

    async signIn({user}) {
      console.log("user signIn", user);
      if (user) {
        return true;
      }
      return false;
    },

    async session({session, token}) {
      // session = { ...token, expires: "" };
      session.user = token as any;

      return session;
    },
  },
};
