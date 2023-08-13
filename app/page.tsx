import Link from "next/link";

import { ConfirmBtn } from "@/components/Auth/ConfirmBtn/ConfirmBtn";

import styles from "../styles/page.module.scss";


export default async function Home() {
  return (
    <main className={styles.main}>
      <Link href="/signin">To AUTH</Link>
      <h1 className="visually-hidden">Library</h1>
      <ConfirmBtn />
    </main>
  );
}
