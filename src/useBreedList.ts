import { useGetBreedQuery } from "./services/petApiService";
import { Animal } from "./APIResponsesTypes";

export default function useBreedList(animal: string | undefined, p0: number, animal: Animal) {
  const { data: breeds, isLoading } = useGetBreedQuery(animal, {
    skip: !animal,
  });

  if (!animal) {
    return [[], "loading"];
  }

  return [breeds ?? [], isLoading ? "loading" : "loaded"];
}
