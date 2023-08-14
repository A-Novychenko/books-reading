import Link from "next/link";
import {ConfirmBtn} from "@/components/Auth/ConfirmBtn/ConfirmBtn";

import styles from "../styles/page.module.scss";
import {redirect} from "next/navigation";

export default function Home() {
  redirect("./signin");
  //костиль, потрібно переналаштувати роутінг
  return (
    <main className={styles.main}>
      <Link href="/signin">To AUTH</Link>
      <h1 className="visually-hidden">Books read home page</h1>
      <ConfirmBtn />
    </main>
  );
}
