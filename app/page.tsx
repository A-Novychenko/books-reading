import Link from "next/link";
import styles from "../styles/page.module.scss";
import {redirect, useRouter} from "next/navigation";

import {authConfig} from "@/configs/auth";
import {getServerSession} from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authConfig);

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <main className={styles.main}>
      <Link href="/signin">To AUTH</Link>
    </main>
  );
}
