"use client";

import {FC, useEffect} from "react";
import {signIn, useSession} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";

export const ConfirmBtn: FC = () => {
  const session = useSession();
  console.log("session11111", session);
  const {push} = useRouter();

  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");

    const handler = async () => {
      const res = await signIn("googleAuth", {
        accessToken,
        redirect: false,
      });

      if (res && res.ok) {
        push("/library");
      } else {
        console.log("res", res);
      }
    };
    handler();
  }, [push, searchParams]);

  return <></>;
};
