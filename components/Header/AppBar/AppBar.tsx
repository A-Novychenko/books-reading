"use client";

import {useUser} from "@/store";
import {useSession, signOut} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FC} from "react";

import styles from "./AppBar.module.scss";
import {getServerSession} from "next-auth/next";
import {authConfig} from "@/configs/auth";

export const AppBar: FC = () => {
  // const [isLogin, userData, logoutUserSaveStore] = useUser((state) => [
  //   state.isLogin,
  //   state.userData,
  //   state.logoutUserSaveStore,
  // ]);

  const session = useSession();
  // const session = getServerSession(authConfig);
  console.log("session", session);

  const dataTest: any = {...session};

  // const router = useRouter();
  // const logout = () => {
  //   logoutUserSaveStore();
  //   router.push("/");
  // };

  return (
    <>
      {session?.data && (
        <div className={styles.wrap}>
          <div className={styles.user}>
            {/* {session.data.user.userData ? (
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
            )} */}
            <p className={styles.user_name}>
              {/* {dataTest.data.name || dataTest.data?.userData?.name} */}
              {/* {session.data.user?.name || session.data?.user?.userData?.name} */}
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
      {/* {isLogin && (
        <div>
          <div>{userData?.name ? <p>{userData?.name}</p> : <p></p>}</div>

          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      {!session.data && <Link href={"/signin"}>Login with Google</Link>} */}
    </>
  );
};
