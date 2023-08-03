import type {Metadata} from "next";

import {Header} from "./components/Header";

import {montserrat} from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "BR",
  description: "Books Reading",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
