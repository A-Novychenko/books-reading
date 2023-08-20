import {getServerSession} from "next-auth/next";
import {redirect} from "next/navigation";
import {authConfig} from "@/configs/auth";
import {AuthLoginForm} from "@/components/Auth/AuthLoginForm/AuthLoginForm";
import {AuthQuoteLogin} from "@/components/Auth/AuthQuoteLogin/AuthQuoteLogin";

import styles from "../../styles/page.module.scss";

const LoginPage = async () => {
  const session = await getServerSession(authConfig);
  console.log("session777", session);

  if (session) {
    redirect("/library");
  }

  return (
    <div className={styles.authWrap}>
      <AuthLoginForm />
      <AuthQuoteLogin />
    </div>
  );
};

export default LoginPage;
