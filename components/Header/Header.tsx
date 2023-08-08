import Link from "next/link";
import styles from "./Header.module.scss";
import {abril_fatface} from "../../fonts/fonts";
import {AppBar} from "./AppBar/AppBar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.logo_wrap}>
            <div className={abril_fatface.className}>
              <Link href={"/"} className={styles.logo}>
                BR
              </Link>
            </div>
          </div>
          <AppBar />
        </div>
      </div>
    </header>
  );
};
