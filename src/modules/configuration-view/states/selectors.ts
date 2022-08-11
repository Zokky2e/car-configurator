import { selector } from "recoil";
import { configurationViewAtoms } from "./atoms";

const totalPrice = selector<number>({
  key: "configurationView.totalPrice",
  get: ({ get }) => {
    const modelPrice = get(configurationViewAtoms.modelPrice);
    const exteriorColorPrice = get(configurationViewAtoms.colorExteriorPrice);
    const interiorColorPrice = get(configurationViewAtoms.colorInteriorPrice);
    const wheelsPrice = get(configurationViewAtoms.wheelsPrice);

    return modelPrice + exteriorColorPrice + interiorColorPrice + wheelsPrice;
  },
  dangerouslyAllowMutability: true,
});
export const configurationViewSelectors = { totalPrice };
