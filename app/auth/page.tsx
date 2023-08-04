import {FC} from "react";
import {AuthQuote} from "@/components/Auth/AuthQuote/AuthQuote";
import {AuthLoginForm} from "@/components/Auth/AuthLoginForm/AuthLoginForm";
import styles from "./authPage.module.scss";

const AuthPage: FC = () => {
  return (
    <main className={styles.authWrap}>
      <AuthLoginForm />
      <AuthQuote />
    </main>
  );
};

export default AuthPage;
