import type {Metadata} from "next";

import {Header} from "../components/Header/Header";

import {montserrat} from "./fonts";
import "./globals.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "BR",
  description: "Books Reading",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className={styles.container}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
