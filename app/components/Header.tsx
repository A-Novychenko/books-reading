import Link from "next/link";
import styles from "./Header.module.css";
import {abril_fatface} from "../fonts";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_wrap}>
          <div className={abril_fatface.className}>
            <Link href={"/"} className={styles.logo}>
              BR
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
