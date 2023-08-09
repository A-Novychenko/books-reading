"use client";
// import Link from "next/link";
import Image from "next/image";
import {roboto} from "@/fonts/fonts";

import styles from "./GoogleBtn.module.scss";
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";
import Link from "next/link";

export const GoogleBtn = () => {
  const serchParams = useSearchParams();
  const callbackUrl = serchParams.get("callbackUrl") || "/library";

  const handleAuth = async () => {
    console.log("serchParams", serchParams);
    const res = await fetch("https://bookread-backend.goit.global/auth/google");
    console.log("res", res);
  };

  return (
    // <button className={styles.google_btn} type="button" onClick={handleAuth}>
    //   <Image
    //     className={styles.img}
    //     src="/google-icon.svg"
    //     alt="Google Logo"
    //     width={18}
    //     height={18}
    //     priority
    //   />
    //   <span>
    //     <span className={roboto.className}>GOOGLE</span>
    //   </span>
    // </button>
    <Link
      href={"https://bookread-backend.goit.global/auth/google"}
      className={styles.google_btn}
      type="button"
    >
      <Image
        className={styles.img}
        src="/google-icon.svg"
        alt="Google Logo"
        width={18}
        height={18}
        priority
      />
      <span>
        <span className={roboto.className}>GOOGLE</span>
      </span>
    </Link>
  );
};
// "use client";
// // import Link from "next/link";
// import Image from "next/image";
// import {roboto} from "@/fonts/fonts";

// import styles from "./GoogleBtn.module.scss";
// import {signIn} from "next-auth/react";
// import {useSearchParams} from "next/navigation";

// export const GoogleBtn = () => {
//   const serchParams = useSearchParams();
//   const callbackUrl = serchParams.get("callbackUrl") || "/library";

//   return (
//     <button
//       className={styles.google_btn}
//       type="button"
//       onClick={() => signIn("google", {callbackUrl})}
//     >
//       <Image
//         className={styles.img}
//         src="/google-icon.svg"
//         alt="Google Logo"
//         width={18}
//         height={18}
//         priority
//       />
//       <span>
//         <span className={roboto.className}>GOOGLE</span>
//       </span>
//     </button>
//   );
// };
///////////////////////////////////////////////////////////////////////////////////////////////////
// <Link
//   href={"https://bookread-backend.goit.global/auth/google"}
//   className={styles.google_btn}
//   type="button"
// >
//   <Image
//     className={styles.img}
//     src="/google-icon.svg"
//     alt="Google Logo"
//     width={18}
//     height={18}
//     priority
//   />
//   <span>
//     <span className={roboto.className}>GOOGLE</span>
//   </span>
// </Link>;
