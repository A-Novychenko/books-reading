import {FC} from "react";
import {AuthQuote} from "@/components/Auth/AuthQuote/AuthQuote";
import {AuthLoginForm} from "@/components/Auth/AuthLoginForm/AuthLoginForm";
import styles from "./authPage.module.scss";

const AuthPage: FC = () => {
  return (
    <div className={styles.authWrap}>
      <AuthLoginForm />
      <AuthQuote />
    </div>
  );
};

export default AuthPage;
