import {AuthQuoteRegister} from "@/components/Auth/AuthQuoteRegister/AuthQuoteRegister";
import {AuthRegisterForm} from "@/components/Auth/AuthRegisterForm/AuthRegisterForm";

const RegisterPage = () => {
  return (
    <>
      <AuthRegisterForm />
      <AuthQuoteRegister />
    </>
  );
};

export default RegisterPage;
