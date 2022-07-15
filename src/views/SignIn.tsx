import { useRecoilValue } from "recoil";
import { Login, Options, Register } from "../modules";
import { signInAtoms } from "../modules/sign-in/states/atoms";

export function SignIn() {
  const isLogin = useRecoilValue(signInAtoms.isLogin);
  return (
    <>
      <section>{isLogin ? <Login /> : <Register />}</section>
      <Options />
    </>
  );
}
