import Link from "next/link";
import styles from "../styles/page.module.scss";
// import {redirect, useRouter} from "next/navigation";

// import {authConfig} from "@/configs/auth";
// import {getServerSession} from "next-auth/next";
// import {signIn} from "next-auth/react";
import {ConfirmBtn} from "@/components/Auth/ConfirmBtn/ConfirmBtn";

export default async function Home({searchParams}: {searchParams: any}) {
  // console.log("searchParams", searchParams);
  // const session = await getServerSession(authConfig);

  // if (session) {
  //   session?.user.accessToken;
  //   // session.data.user.accessToken;
  // }

  return (
    <main className={styles.main}>
      <Link href="/signin">To AUTH</Link>
      {/* <ConfirmBtn searchParams={searchParams} /> */}
      <ConfirmBtn />
    </main>
  );
}
