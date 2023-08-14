"use client";

import {FC} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

import {GoogleBtn} from "../GoogleBtn/GoogleBtn";

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
    reset,
    setError,
    formState: {errors},
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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

    try {
      const resReg = await fetch(
        "https://bookread-backend.goit.global/auth/register",
        {
          method: "POST",
          body: JSON.stringify({email, password, name}),
          headers: {"Content-Type": "application/json"},
        }
      );
      const resRegData = await resReg.json();

      if (resRegData && !resRegData.error) {
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
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <section className={styles.auth_form_wrapper}>
      <div className={styles.login_box}>
        <GoogleBtn />

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
            Register
          </button>
        </form>
        <p className={styles.login_link_Text}>
          Already have an account?
          <Link href="/signin" className={styles.register_link}>
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};
