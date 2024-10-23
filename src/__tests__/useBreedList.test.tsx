import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useBreedList from "../useBreedList";
import { Animal } from "../APIResponsesTypes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
});

function getBreedList(animal: Animal) {
  let list: [string[], string] | undefined;

  function TestComponent() {
    list = useBreedList(animal) as [string[], string];
    return null;
  }

  render(
    <QueryClientProvider client={queryClient}>
      <TestComponent />
    </QueryClientProvider>,
  );

  return list;
}

test("gives an empty list with no animal", () => {
  const result = getBreedList("" as Animal);
  const [breedList, status] = result ?? [[], "loading"];
  expect(breedList).toHaveLength(0);
  expect(status).toBe("loading");
});
