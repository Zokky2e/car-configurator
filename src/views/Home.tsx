import { useEffect, useState } from "react";
import { CarList, EmptyCarList, Header } from "../modules";

export function Home() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  useEffect(() => {
    setIsEmpty(false);
  }, []);
  return (
    <>
      <Header />
      <section>{isEmpty ? <EmptyCarList /> : <CarList />}</section>
    </>
  );
}
