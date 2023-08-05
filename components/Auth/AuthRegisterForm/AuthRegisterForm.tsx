"use client";

import {FC} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import styles from "./AuthRegisterForm.module.scss";
import Link from "next/link";
import {roboto} from "@/fonts/fonts";
import Image from "next/image";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const AuthRegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <section className={styles.auth_form_wrapper}>
      <div className={styles.login_box}>
        <button className={styles.google_btn} type="button">
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
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label className={styles.label}>
            Name<span className={styles.label_requared}>*</span>
          </label>
          <input
            placeholder="..."
            className={styles.input}
            type="name"
            {...(register("example"), {required: true})}
          />
          <label className={styles.label}>
            Email<span className={styles.label_requared}>*</span>
          </label>
          <input
            placeholder="your@email.com"
            className={styles.input}
            type="email"
            {...(register("example"), {required: true})}
          />

          <label className={styles.label}>
            Password<span className={styles.label_requared}>*</span>
          </label>
          <input
            placeholder="..."
            className={styles.input}
            type="password"
            {...register("exampleRequired", {required: true})}
          />
          <label className={styles.label}>
            Confirm password<span className={styles.label_requared}>*</span>
          </label>
          <input
            placeholder="..."
            className={styles.input}
            type="password"
            {...register("exampleRequired", {required: true})}
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <button className={styles.submit} type="submit">
            Login
          </button>
        </form>
        <p className={styles.login_link_Text}>
          Already have an account?
          <Link href="/auth/login" className={styles.register_link}>
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};
