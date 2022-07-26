import { User } from "firebase/auth";
import { atom } from "recoil";

const configureButton = atom<boolean>({
  key: "navigation.configure.button.",
  default: false,
  dangerouslyAllowMutability: true,
});
const isLoggedIn = atom<boolean>({
  key: "userAuth.loggedIn",
  default: false,
  dangerouslyAllowMutability: true,
});
const user = atom<User>({
  key: "userAuth.userCreditential",
  default: undefined,
  dangerouslyAllowMutability: true,
});

export const sharedAtoms = { configureButton, isLoggedIn, user };
