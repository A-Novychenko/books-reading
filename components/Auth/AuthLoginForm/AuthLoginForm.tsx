"use client";

import {FC} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import styles from "./AuthLoginForm.module.scss";
import Link from "next/link";
import {loginUser} from "@/actions/loginUser";
import {useUser} from "@/store";
import {GoogleBtn} from "../GoogleBtn/GoogleBtn";
import {useRouter} from "next/navigation";

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

  const loginUserSaveStore = useUser((state) => state.loginUserSaveStore);

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await loginUser(data);
    loginUserSaveStore(res);

    reset();
    router.push("/library");
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
        <Link href="/auth/register" className={styles.register_link}>
          Register
        </Link>
      </div>
    </section>
  );
};
