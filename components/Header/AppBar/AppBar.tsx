"use client";

import {FC} from "react";
import {useSession, signOut} from "next-auth/react";

import styles from "./AppBar.module.scss";

export const AppBar: FC = () => {
  const session = useSession();

  console.log("session", session);

  return (
    <>
      {session?.data && (
        <div className={styles.wrap}>
          <div className={styles.user}>
            <p className={styles.letter}>
              {session.data?.user?.userData?.name[0]?.toUpperCase()}
            </p>
            <p className={styles.user_name}>
              {session.data?.user?.userData?.name}
            </p>
          </div>
          <button
            className={styles.btn}
            type="button"
            onClick={() => signOut({callbackUrl: "/signin"})}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};
