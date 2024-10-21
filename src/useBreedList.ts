import { useQuery } from "@tanstack/react-query";
import fetchBreedstList from "./fetchBreedsList";
import { Animal } from "./APIResponsesTypes";

export default function useBreedList(animal : Animal) {
  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreedstList,
  });

  return [results?.data?.breeds ?? [], results.status];
}
