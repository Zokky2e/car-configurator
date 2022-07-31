import { atom } from "recoil";
import { item } from "../../configuration-view";
import { typeSelect } from "../types";
const selectedType = atom<typeSelect>({
  key: "configurator.selectedType",
  default: "Wheels",
  dangerouslyAllowMutability: true,
});
const selectedItem = atom<item>({
  key: "configurator.selectedIem",
  default: { image: "", name: "", price: 0 },
  dangerouslyAllowMutability: true,
});
export const configuratorAtoms = { selectedType, selectedItem };
