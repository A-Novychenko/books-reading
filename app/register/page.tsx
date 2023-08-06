import {AuthQuoteRegister} from "@/components/Auth/AuthQuoteRegister/AuthQuoteRegister";
import {AuthRegisterForm} from "@/components/Auth/AuthRegisterForm/AuthRegisterForm";

import styles from "../../styles/page.module.scss";

const RegisterPage = () => {
  return (
    <div className={styles.authWrap}>
      <AuthRegisterForm />
      <AuthQuoteRegister />
    </div>
  );
};

export default RegisterPage;
