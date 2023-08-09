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

// export interface Root {
//   accessToken: string;
//   exp: number;
//   iat: number;
//   jti: string;
//   refreshToken: string;
//   sid: string;
//   userData: UserData;
// }
// const test = {
//    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NGNmNGRhODIwNDY0ZDE4Mjg0NjhjYjkiLCJzaWQiOiI2NGQzODdiYzIwNDY0ZDE4Mjg0NjhkM2EiLCJpYXQiOjE2OTE1ODQ0NDQsImV4cCI6MTY5MTU4ODA0NH0.VFIgwevgfZep04mcpR5eqDuQ6fDInd58Rh6CcMHlRTs",
//     exp: 1694176470,
//     iat: 1691584470,
//     jti: "9df56b4f-2386-4705-96e2-bc3384570efc",
//     refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NGNmNGRhODIwNDY0ZDE4Mjg0NjhjYjkiLCJzaWQiOiI2NGQzODdiYzIwNDY0ZDE4Mjg0NjhkM2EiLCJpYXQiOjE2OTE1ODQ0NDQsImV4cCI6MTY5NDIxMjQ0NH0.nSLn1G86D4OumaKdpvy9kXGYCFgtuRQZK1ySjcoTKDY",
//     sid: "64d387bc20464d1828468d3a",
//     userData: {
//         currentlyReading: [],
//         email: "novychenkoae@gmail.com",
//         finishedReading: [],
//         goingToRead: [],
//         id: "64cf4da820464d1828468cb9",
//         name: "novychenkoae",
//     }
// }
