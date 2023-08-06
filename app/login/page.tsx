import {AuthLoginForm} from "@/components/Auth/AuthLoginForm/AuthLoginForm";
import {AuthQuoteLogin} from "@/components/Auth/AuthQuoteLogin/AuthQuoteLogin";

import styles from "../../styles/page.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.authWrap}>
      <AuthLoginForm />
      <AuthQuoteLogin />
    </div>
  );
};

export default LoginPage;
