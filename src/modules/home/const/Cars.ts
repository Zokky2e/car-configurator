import { CarInfo } from "../types";
import rs6 from "../assets/side-2-rs6.png";
import rs5 from "../assets/side-1-rs5.png";
import etron from "../assets/side-1-etron.png";
export const Cars: CarInfo[] = [
  {
    picture: rs6,
    year: "2022",
    name: "Audi rs6 avant",
    color: "polar white",
    dateCreated: new Date(2022, 5, 22),
  },
  {
    picture: rs5,
    year: "2022",
    name: "Audi rs5",
    color: "Tango red",
    dateCreated: new Date(2022, 5, 22),
  },
  {
    picture: etron,
    year: "2022",
    name: "Audi e-tron gt",
    color: "potato green",
    dateCreated: new Date(2022, 5, 22),
  },
];
