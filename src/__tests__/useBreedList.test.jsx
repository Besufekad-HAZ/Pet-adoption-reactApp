import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useBreedList from "../useBreedList";
import { s } from "vitest/dist/index-220c1d70";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: false,
    },
  },
});

function getBreedList(animal) {
  let list;

  function TestComponent() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    list = useBreedList(animal);
    return null;
  }

  render(
    <QueryClientProvider client={queryClient}>
      <TestComponent />
    </QueryClientProvider>,
  );

  return list;
}

// eslint-disable-next-line @typescript-eslint/require-await
test("gives an empty list with no animal", async () => {
  const [breedList, status] = getBreedList();
  expect(breedList).toHaveLength(0);
  expect(status).toBe("loading");
});
