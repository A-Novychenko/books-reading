import Link from "next/link";
import styles from "../styles/page.module.scss";
import {redirect, useRouter} from "next/navigation";

import {authConfig} from "@/configs/auth";
import {getServerSession} from "next-auth/next";

export default async function Home() {
  // export default function async Home({
  //   searchParams,
  // }: {
  //   params: {slug: string};
  //   searchParams: {[key: string]: string | string[] | undefined};
  // }) {
  // const {accessToken, refreshToken} = searchParams;

  // console.log("accessToken", accessToken);
  // console.log("refreshToken", refreshToken);

  const session = await getServerSession(authConfig);

  if (session?.user) {
    redirect("/library");
  }

  return (
    <main className={styles.main}>
      <Link href="/login">To AUTH</Link>
    </main>
  );
}
