import { useGetBreedQuery } from "./services/petApiService";
import { Animal } from "./APIResponsesTypes";

export default function useBreedList(animal: Animal) {
  const {
    data: breeds,
    isLoading,
    isSuccess,
  } = useGetBreedQuery(animal, {
    skip: !animal,
  });

  if (!animal) {
    return [[], "loading"];
  }

  return [
    breeds ?? [],
    isLoading ? "loading" : isSuccess ? "success" : "loaded",
  ];
}
