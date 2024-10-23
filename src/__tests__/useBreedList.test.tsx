import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../redux/store";
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TestComponent />
      </QueryClientProvider>
    </Provider>,
  );

  return list;
}

test("gives an empty list with no animal", () => {
  const list = getBreedList("" as Animal);
  expect(list).toEqual([[], "loading"]);
});
