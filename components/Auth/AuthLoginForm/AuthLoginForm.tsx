"use client";

import {FC} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import styles from "./AuthLoginForm.module.scss";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const AuthLoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <div className={styles.google}>GOOGLE</div>
      {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrap}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Emal*</label>
        <input {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Password*</label>
        <input {...register("exampleRequired", {required: true})} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};

export default function App() {}
