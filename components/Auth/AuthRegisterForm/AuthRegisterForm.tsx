"use client";

import Link from "next/link";
import {FC} from "react";
import {useForm, SubmitHandler} from "react-hook-form";

import {registerUser} from "@/actions/registerUser";
import styles from "./AuthRegisterForm.module.scss";
import {GoogleBtn} from "../GoogleBtn/GoogleBtn";
import {loginUser} from "@/actions/loginUser";
import {useRouter} from "next/navigation";
import {useUser} from "@/store";

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

  const loginUserSaveStore = useUser((state) => state.loginUserSaveStore);

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
    registerUser({name, email, password});

    const res = await loginUser(data);
    loginUserSaveStore(res);

    reset();
    router.push("/library");

    reset();
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
          <Link href="/login" className={styles.register_link}>
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};
