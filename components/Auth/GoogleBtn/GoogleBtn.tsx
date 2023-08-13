"use client";

import Image from "next/image";
import Link from "next/link";

import {roboto} from "@/fonts/fonts";
import styles from "./GoogleBtn.module.scss";

export const GoogleBtn = () => {
  return (
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
