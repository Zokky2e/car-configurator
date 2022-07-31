import { CarCardInfo } from "../types";
import rs6 from "../assets/front-1-rs6.png";
import rs5 from "../assets/front-1-rs5.png";
import etron from "../assets/front-2-etron.png";
export const Cars: CarCardInfo[] = [
  {
    docName: "rs6",
    picture: rs6,
    year: "2022",
    name: "Audi rs6 avant",
    colorExterior: "Black",
    colorInterior: "Brown",
  },
  {
    docName: "rs5",
    picture: rs5,
    year: "2022",
    name: "Audi rs5",
    colorExterior: "Turbo blue",
    colorInterior: "Lunar silver",
  },
  {
    docName: "etron",
    picture: etron,
    year: "2022",
    name: "Audi e-tron gt",
    colorExterior: "Potato green",
    colorInterior: "Black",
  },
];
