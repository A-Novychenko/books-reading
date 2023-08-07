"use client";

import {useUser} from "@/store";
import {useSession, signOut} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FC} from "react";

import styles from "./AppBar.module.scss";

export const AppBar: FC = () => {
  const [isLogin, userData, logoutUserSaveStore] = useUser((state) => [
    state.isLogin,
    state.userData,
    state.logoutUserSaveStore,
  ]);

  const session = useSession();
  console.log("session", session);

  const router = useRouter();
  const logout = () => {
    logoutUserSaveStore();
    router.push("/");
  };

  return (
    <>
      {session?.data && (
        <div className={styles.wrap}>
          <div className={styles.user}>
            {session.data.user?.image ? (
              <Image
                src={`${session.data.user?.image}`}
                alt={`Photo ${session.data.user?.name}`}
                width={32}
                height={32}
              />
            ) : (
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "green",
                }}
              ></div>
            )}
            <p className={styles.user_name}>{session.data.user?.name}</p>
          </div>
          <button
            className={styles.btn}
            type="button"
            onClick={() => signOut({callbackUrl: "/"})}
          >
            Logout
          </button>
        </div>
      )}
      {isLogin && (
        <div>
          <div>{userData?.name ? <p>{userData?.name}</p> : <p></p>}</div>

          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      {!session.data && (
        <Link href={"/api/auth/signin"}>Login with Google</Link>
      )}
    </>
  );
};
