import { atom } from "recoil";

const configureButton = atom<boolean>({
  key: "navigation.configure.button.",
  default: false,
  dangerouslyAllowMutability: true,
});

export const sharedAtoms = { configureButton };
