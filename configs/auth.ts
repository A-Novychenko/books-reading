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
      credentials: {
        email: {label: "Email", type: "text", placeholder: "Email"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials, req) {
        console.log("credentials!!!!!", credentials);

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

        // If no error and we have user data, return it
        if (res.ok && user) {
          console.log("user", user);

          return user as User;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};
