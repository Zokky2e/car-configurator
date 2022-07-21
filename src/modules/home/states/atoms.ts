import { atom } from "recoil";
import { CarInfo } from "../types";

const savedCarConfigurations = atom<CarInfo[]>({
  key: "home.savedCars",
  default: [],
  dangerouslyAllowMutability: true,
});

export const homeAtoms = { savedCarConfigurations };
