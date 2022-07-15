import { atom } from "recoil";

const isLogin = atom<boolean>({
  key: "signin.option.isLogin",
  default: true,
  dangerouslyAllowMutability: true,
});

export const signInAtoms = { isLogin };
