import { FirebaseStorage, getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
export function useStorageImage(
  storage: FirebaseStorage,
  collection: string,
  loadingImage?: string
) {
  const [image, setImage] = useState<string>(loadingImage ? loadingImage : "");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const gsReference = ref(storage, collection);

  useEffect(() => {
    getDownloadURL(gsReference)
      .then((url) => {
        setImage(url);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsReference]);
  return { image, isLoading };
}
