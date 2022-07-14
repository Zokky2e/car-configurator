import { useEffect, useState } from "react";
import { CarList, EmptyCarList, Header } from "../modules";

export function Home() {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  useEffect(() => {
    setIsEmpty(true);
  }, []);
  return (
    <>
      <Header />
      <section>{isEmpty ? <EmptyCarList /> : <CarList />}</section>
    </>
  );
}
