import type {Metadata} from "next";

import {Header} from "../components/Header/Header";

import {montserrat} from "../fonts/fonts";
import "../styles/globals.css";
import styles from "../styles/page.module.scss";
import {Providers} from "@/components/Providers/Providers";

export const metadata: Metadata = {
  title: "BR",
  description: "Books Reading",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Header />
          <main className={styles.container}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
