import {authConfig} from "@/configs/auth";
import {getServerSession} from "next-auth/next";
import {redirect} from "next/navigation";
import {AuthQuoteRegister} from "@/components/Auth/AuthQuoteRegister/AuthQuoteRegister";
import {AuthRegisterForm} from "@/components/Auth/AuthRegisterForm/AuthRegisterForm";

import styles from "../../styles/page.module.scss";

const RegisterPage = async () => {
  const session = await getServerSession(authConfig);

  if (session) {
    redirect("/library");
  }

  return (
    <div className={styles.authWrap}>
      <AuthRegisterForm />
      <AuthQuoteRegister />
    </div>
  );
};

export default RegisterPage;
