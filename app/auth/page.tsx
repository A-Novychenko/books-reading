import {FC} from "react";
import {AuthQuote} from "@/components/Auth/AuthQuote/AuthQuote";
import {AuthRegisterForm} from "@/components/Auth/AuthRegisterForm/AuthRegisterForm";

const AuthPage: FC = () => {
  return (
    <div>
      <AuthRegisterForm />
      <AuthQuote />
    </div>
  );
};

export default AuthPage;
