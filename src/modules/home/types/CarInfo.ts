import { carModel, carWheel } from "../../configuration-view";

export interface CarInfo {
  id: string;
  model: carModel;
  picture: string;
  year: string;
  name: string;
  color: string;
  wheels: carWheel;
  dateCreated: string;
}
