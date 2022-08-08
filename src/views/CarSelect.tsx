import { useEffect } from "react";
import { CarPicker } from "../modules";

export function CarSelect() {
  useEffect(() => {
    document.title = "Car Select - Car Configurator";
  }, []);
  return (
    <>
      <CarPicker />
    </>
  );
}
