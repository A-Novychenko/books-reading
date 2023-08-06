import Link from "next/link";
import styles from "../styles/page.module.scss";
import {redirect, useRouter} from "next/navigation";

export default function Home({
  searchParams,
}: {
  params: {slug: string};
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  const {accessToken, refreshToken} = searchParams;

  console.log("accessToken", accessToken);
  console.log("refreshToken", refreshToken);

  redirect("/login");

  return (
    <main className={styles.main}>
      <Link href="/login">To AUTH</Link>
    </main>
  );
}
