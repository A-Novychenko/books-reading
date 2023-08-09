"use client";

import {FC, useEffect} from "react";

import {signIn, useSession} from "next-auth/react";
import {redirect, useRouter, useSearchParams} from "next/navigation";

interface IProps {
  searchParams: any;
}

export const ConfirmBtn: FC = () => {
  const session = useSession();
  console.log("session11111", session);
  const {push} = useRouter();

  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");

    // console.log("&&&&&&", searchParams);
    // console.log("IF IF IF IF IF IF IF", accessToken);
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

  const handler = async () => {
    const accessToken = searchParams.get("accessToken");

    // console.log("&&&&&&", searchParams);
    // console.log("IF IF IF IF IF IF IF", accessToken);
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

  return (
    // <button type="button" onClick={handler}>
    //   TEST - confirm login
    // </button>
    <></>
  );
};
// "use client";

// import {FC} from "react";

// import {signIn, useSession} from "next-auth/react";
// import {redirect, useRouter} from "next/navigation";

// interface IProps {
//   searchParams: any;
// }

// export const ConfirmBtn: FC<IProps> = () => {
//   //   const session = useSession();
//   //   console.log("session", session);
//   const {push} = useRouter();

//   const handler = async (searchParams: any) => {
//     const accessToken = searchParams.accessToken;

//     console.log("&&&&&&", searchParams);
//     console.log("IF IF IF IF IF IF IF", accessToken);
//     const res = await signIn("googleAuth", {
//       accessToken,
//       redirect: false,
//     });

//     if (res && res.ok) {
//       push("/library");
//     } else {
//       console.log("res", res);
//     }
//   };

//   return (
//     <button type="button" onClick={handler}>
//       TEST - confirm login
//     </button>
//   );
// };
