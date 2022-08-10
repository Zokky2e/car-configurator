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
const selectedWheels = atom<string>({
  key: "configurator.selectedWheels",
  default: "One",
  dangerouslyAllowMutability: true,
});
const selectedColor = atom<string>({
  key: "configurator.selectedColor",
  default: "Black",
  dangerouslyAllowMutability: true,
});
const selectedColorInterier = atom<string>({
  key: "configurator.selectedColorInterier",
  default: "Black",
  dangerouslyAllowMutability: true,
});
export const configuratorAtoms = {
  selectedType,
  selectedItem,
  selectedWheels,
  selectedColor,
  selectedColorInterier,
};
