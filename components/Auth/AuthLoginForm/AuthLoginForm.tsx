"use client";

import {FC} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import Link from "next/link";
import {GoogleBtn} from "../GoogleBtn/GoogleBtn";
import {useRouter} from "next/navigation";
import styles from "./AuthLoginForm.module.scss";
import {signIn} from "next-auth/react";

type Inputs = {
  email: string;
  password: string;
};

export const AuthLoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await signIn("login", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res && !res.error) {
      reset();
      router.push("/library");
    } else {
      console.log("res", res);
    }
  };

  return (
    <section className={styles.auth_form_wrapper}>
      <div className={styles.login_box}>
        <GoogleBtn />

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label className={styles.label}>
            Email<span className={styles.label_requared}>*</span>
          </label>
          <input
            placeholder="your@email.com"
            className={styles.input}
            {...register("email")}
          />
          {errors.email && <span>This field is required</span>}

          <label className={styles.label}>
            Password<span className={styles.label_requared}>*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            {...register("password", {required: true})}
          />

          {errors.password && <span>This field is required</span>}

          <button className={styles.submit} type="submit">
            Login
          </button>
        </form>
        <Link href="/register" className={styles.register_link}>
          Register
        </Link>
      </div>
    </section>
  );
};
