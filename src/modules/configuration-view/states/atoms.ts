import { atom } from "recoil";
import { carModel, carWheel } from "../types";
const model = atom<carModel>({
  key: "configurationView.model",
  default: "rs6",
  dangerouslyAllowMutability: true,
});
const name = atom<string>({
  key: "configurationView.name",
  default: "car",
  dangerouslyAllowMutability: true,
});
const year = atom<string>({
  key: "configurationView.year",
  default: "2022",
  dangerouslyAllowMutability: true,
});
const totalPrice = atom<number>({
  key: "configurationView.price",
  default: 120000.12,
  dangerouslyAllowMutability: true,
});
const wheels = atom<carWheel>({
  key: "configurationView.wheels",
  default: "One",
  dangerouslyAllowMutability: true,
});
const wheelsPicture = atom<string>({
  key: "configurationView.wheels.picture",
  default: "empty",
  dangerouslyAllowMutability: true,
});
const wheelsPrice = atom<number>({
  key: "configurationView.wheels.price",
  default: 0,
  dangerouslyAllowMutability: true,
});
const colorExterior = atom<string>({
  key: "configurationView.color.exterior",
  default: "Black",
  dangerouslyAllowMutability: true,
});
const colorExteriorPicture = atom<string>({
  key: "configurationView.color.exterior.picture",
  default: "empty",
  dangerouslyAllowMutability: true,
});
const colorExteriorPrice = atom<number>({
  key: "configurationView.color.exterior.price",
  default: 2500,
  dangerouslyAllowMutability: true,
});
const colorInterior = atom<string>({
  key: "configurationView.color.interior",
  default: "Brown",
  dangerouslyAllowMutability: true,
});
const colorInteriorPicture = atom<string>({
  key: "configurationView.color.interior.picture",
  default: "empty",
  dangerouslyAllowMutability: true,
});
const colorInteriorPrice = atom<number>({
  key: "configurationView.color.interior.price",
  default: 0,
  dangerouslyAllowMutability: true,
});
export const configurationViewAtoms = {
  name,
  model,
  totalPrice,
  wheels,
  wheelsPrice,
  wheelsPicture,
  year,
  colorExterior,
  colorExteriorPicture,
  colorExteriorPrice,
  colorInterior,
  colorInteriorPicture,
  colorInteriorPrice,
};
