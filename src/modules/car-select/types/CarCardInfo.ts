import { carModel } from "../../configuration-view";

export interface CarCardInfo {
  docName: carModel;
  picture: string;
  year: string;
  name: string;
  colorExterior: string;
  colorInterior: string;
}
