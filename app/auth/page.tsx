import Link from "next/link";
import {FC} from "react";

const AuthPage: FC = () => {
  return (
    <div>
      <Link href="/auth/login">Login</Link>
    </div>
  );
};

export default AuthPage;
