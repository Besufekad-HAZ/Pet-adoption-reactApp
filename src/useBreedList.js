import { useQuery } from "@tanstack/react-query";
import fetchBreedstList from "./fetchBreedsList";

export default function useBreedList(animal) {
  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreedstList,
  });

  return [results?.data?.breeds ?? [], results.status];
}
