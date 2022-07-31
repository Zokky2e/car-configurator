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
const isNewConfiguration = atom<boolean>({
  key: "configurationView.isNewConfiguration",
  default: true,
  dangerouslyAllowMutability: true,
});
const currentStep = atom<number>({
  key: "configurator.currentStep",
  default: 1,
  dangerouslyAllowMutability: true,
});
const previousStep = atom<number>({
  key: "configurator.previousStep",
  default: 2,
  dangerouslyAllowMutability: true,
});
const isSelectMenuOpen = atom<boolean>({
  key: "configurator.isSelectMenuOpen",
  default: false,
  dangerouslyAllowMutability: true,
});
export const sharedAtoms = {
  configureButton,
  isLoggedIn,
  user,
  isNewConfiguration,
  currentStep,
  previousStep,
  isSelectMenuOpen,
};
