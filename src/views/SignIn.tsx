import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Chooser, Frame, Login, Register } from "../modules";
import { signInAtoms } from "../modules/sign-in/states/atoms";

export function SignIn() {
  const isLogin = useRecoilValue(signInAtoms.isLogin);
  useEffect(() => {
    document.title = `Car Configurator`;
  }, []);
  return (
    <Frame>
      <>{isLogin ? <Login /> : <Register />}</>
      <Chooser />
    </Frame>
  );
}
