"use client";

import {useUser} from "@/store";
import {useRouter} from "next/navigation";
import {FC} from "react";

export const AppBar: FC = () => {
  const [isLogin, userData, logoutUserSaveStore] = useUser((state) => [
    state.isLogin,
    state.userData,
    state.logoutUserSaveStore,
  ]);

  const router = useRouter();
  const logout = () => {
    logoutUserSaveStore();
    router.push("/");
  };

  return (
    <>
      {isLogin && (
        <div>
          <div>{userData?.name ? <p>{userData?.name}</p> : <p></p>}</div>

          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};
