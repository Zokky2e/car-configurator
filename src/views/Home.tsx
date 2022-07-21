import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { db } from "../firebase";
import { CarList, EmptyCarList, Header, homeAtoms } from "../modules";
import { sharedAtoms } from "../shared";
import { CarInfo } from "../modules";
export function Home() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setSavedCarConfigurations = useSetRecoilState(
    homeAtoms.savedCarConfigurations
  );
  const user = useRecoilValue(sharedAtoms.user);
  const isLoggedIn = useRecoilValue(sharedAtoms.isLoggedIn);
  const CarInfoConverter = {
    toFirestore: (car: CarInfo) => {
      return {
        id: car.id,
        picture: car.picture,
        year: car.year,
        name: car.name,
        color: car.color,
        dateCreated: car.dateCreated,
      };
    },
    fromFirestore: (snapshot: { data: () => any }) => {
      const data = snapshot.data();
      console.log(data.name);
      const item: CarInfo = {
        id: data.id,
        picture: data.picture,
        year: data.year,
        name: data.name,
        color: data.color,
        dateCreated: data.dateCreated,
      };
      return item;
    },
  };
  useEffect(() => {
    if (user === undefined) {
    } else {
      setIsLoading(true);
      isLoggedIn && fetchSavedCarConfigurations();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function fetchSavedCarConfigurations() {
    const q = query(collection(db, user.uid));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setIsEmpty(true);
      setIsLoading(false);
      return;
    }
    const docsItems: CarInfo[] = [];
    querySnapshot.docs.forEach((value) => {
      const item = CarInfoConverter.fromFirestore(value);
      docsItems.push(item);
    });
    setSavedCarConfigurations(docsItems);
    if (docsItems.length !== 0) {
      setIsLoading(false);
    }
    docsItems.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
  }
  return (
    <>
      <Header />
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : isEmpty ? (
          <EmptyCarList />
        ) : (
          <>
            <CarList />
          </>
        )}
      </section>
    </>
  );
}
