import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))[animal]
      : [],
  );

  useEffect(() => {
    if (animal) {
      const fetchBreeds = async () => {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
        );
        const json = await res.json();
        const breeds = json.breeds.map((breed) => breed.name);
        setBreedList(breeds);
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({ [animal]: breeds }),
        );
      };
      fetchBreeds();
    }
  }, [animal]);

  return [breedList, setBreedList];
}
