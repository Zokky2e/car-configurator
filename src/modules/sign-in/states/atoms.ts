import { atom } from "recoil";

const isLogin = atom<boolean>({
  key: "signin.option.isLogin",
  default: true,
  dangerouslyAllowMutability: true,
});
const isError = atom<boolean>({
  key: "signin.error.isError",
  default: false,
  dangerouslyAllowMutability: true,
});
const errorMessage = atom<string>({
  key: "signin.error.errorMessage",
  default: "",
  dangerouslyAllowMutability: true,
});
const isSuccess = atom<boolean>({
  key: "signin.success.isSuccess",
  default: false,
  dangerouslyAllowMutability: true,
});
const successMessage = atom<string>({
  key: "signin.success.successMessage",
  default: "",
  dangerouslyAllowMutability: true,
});
export const signInAtoms = {
  isLogin,
  isError,
  errorMessage,
  isSuccess,
  successMessage,
};
