import Image from "next/image";
import {FC} from "react";

import styles from "./AuthQuoteLogin.module.scss";

export const AuthQuoteLogin: FC = () => {
  return (
    <div className={styles.wrap}>
      <Image
        className={styles.img}
        src="/quotes.svg"
        alt="Next.js Logo"
        width={32}
        height={32}
        priority
      />

      <p className={styles.quote}>
        Books are the ships of thoughts, wandering through the waves of time.
      </p>
      <p className={styles.authorBox}>
        <span className={styles.author}>Francis Bacon</span>
      </p>
    </div>
  );
};
