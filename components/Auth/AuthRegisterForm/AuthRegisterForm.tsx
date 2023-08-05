"use client";

import Image from "next/image";
import Link from "next/link";
import {FC} from "react";
import {useForm, SubmitHandler} from "react-hook-form";

import {roboto} from "@/fonts/fonts";
import {registerUser} from "@/actions/registerUser";
import styles from "./AuthRegisterForm.module.scss";

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const AuthRegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log("data", data);
    const {name, email, password, passwordConfirm} = data;

    if (password !== passwordConfirm) {
      setError("password", {
        type: "custom",
        message: "Passwords must match!",
      });
      setError("passwordConfirm", {
        type: "custom",
        message: "Passwords must match!",
      });
      return;
    }
    registerUser({name, email, password});

    reset();
  };

  // console.log(watch("name"));
  // console.log(watch("email"));
  // console.log(watch("password"));
  // console.log(watch("passwordConfirm"));

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
            type="text"
            placeholder="..."
            className={styles.input}
            {...register("name")}
          />
          {errors.name && (
            <span className={styles.input_err}>This field is required</span>
          )}

          <label className={styles.label}>
            Email<span className={styles.label_requared}>*</span>
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className={styles.input}
            {...register("email")}
          />
          {errors.email && (
            <span className={styles.input_err}>This field is required</span>
          )}

          <label className={styles.label}>
            Password<span className={styles.label_requared}>*</span>
          </label>
          <input
            placeholder="..."
            className={styles.input}
            type="password"
            {...register("password", {required: true})}
          />
          {errors.password && (
            <span className={styles.input_err}>
              {errors?.password?.message
                ? errors?.password?.message
                : "This field is required"}
            </span>
          )}

          <label className={styles.label}>
            Confirm password<span className={styles.label_requared}>*</span>
          </label>
          <input
            placeholder="..."
            className={styles.input}
            type="password"
            {...register("passwordConfirm", {required: true})}
          />

          {errors.passwordConfirm && (
            <span className={styles.input_err}>
              {errors?.passwordConfirm?.message
                ? errors?.passwordConfirm?.message
                : "This field is required"}
            </span>
          )}

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
