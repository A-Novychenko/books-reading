import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      exp: number;
      iat: number;
      jti: string;
      refreshToken: string;
      sid: string;
      userData: UserData;
    };
  }
}

interface UserData {
  currentlyReading: any[];
  email: string;
  finishedReading: any[];
  goingToRead: any[];
  id: string;
  name: string;
}
