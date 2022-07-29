import { atom } from "recoil";
import { typeSelect } from "../types";
const selectedType = atom<typeSelect>({
  key: "configurator.selectedType",
  default: "Wheels",
  dangerouslyAllowMutability: true,
});
const isSelectedType = atom<boolean>({
  key: "configurator.isSelectedType",
  default: false,
  dangerouslyAllowMutability: true,
});
export const configuratorAtoms = { selectedType, isSelectedType };
