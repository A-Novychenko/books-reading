import Link from "next/link";
import styles from "../styles/page.module.scss";

export default function Home({
  searchParams,
}: {
  params: {slug: string};
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  const {accessToken, refreshToken} = searchParams;

  console.log("TOKENS", accessToken, refreshToken);

  return (
    <main className={styles.main}>
      <Link href="/auth">To AUTH</Link>
    </main>
  );
}
