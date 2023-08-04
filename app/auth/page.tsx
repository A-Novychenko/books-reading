import {FC} from "react";
import {AuthQuote} from "@/components/AuthQuote/AuthQuote";

const AuthPage: FC = () => {
  return (
    <div>
      <div>Form</div>
      <AuthQuote />
    </div>
  );
};

export default AuthPage;
