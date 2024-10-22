import { useState, useDeferredValue, useMemo, useTransition } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import { Animal } from "./APIResponsesTypes";
import { all } from "./redux/searchParamsSlice";
import { RootState } from "./redux/store";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const adoptedPet = useSelector((state: RootState) => state.adoptedPet.value);
  const searchParams = useSelector((state: RootState) => state.searchParams);
  const [animal, setAnimal] = useState("" as Animal);
  const [breeds] = useBreedList(animal);
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();

  const results = useQuery({
    queryKey: ["search", searchParams],
    queryFn: fetchSearch,
  });

  const pets = results?.data?.pets ?? [];
  const deferredPets = useDeferredValue(pets);
  const renderedPets = useMemo(
    () => <Results pets={deferredPets} />,
    [deferredPets],
  );

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const obj = {
            animal: formData.get("animal") as string,
            breed: formData.get("breed") as string,
            location: formData.get("location") as string,
          };

          startTransition(() => {
            dispatch(all(obj));
          });
        }}
      >
        {adoptedPet && adoptedPet.images && adoptedPet.images.length > 0 && (
          <div className="pet image-container mb-10">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        )}
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            placeholder="Location"
            type="text"
            className="search-input"
            value={searchParams.location}
            onChange={(e) =>
              dispatch(all({ ...searchParams, location: e.target.value }))
            }
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={searchParams.animal}
            onChange={(e) => {
              setAnimal(e.target.value as Animal);
              dispatch(all({ ...searchParams, animal: e.target.value }));
            }}
            onBlur={(e) => {
              setAnimal(e.target.value as Animal);
              dispatch(all({ ...searchParams, animal: e.target.value }));
            }}
            className="search-input"
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            name="breed"
            value={searchParams.breed}
            onChange={(e) =>
              dispatch(all({ ...searchParams, breed: e.target.value }))
            }
            className="search-input grayed-out-disabled"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        {isPending ? (
          <h2 className="spin text-3xl">🐶</h2>
        ) : (
          <button
            type="submit"
            className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50"
          >
            Submit
          </button>
        )}
      </form>
      {renderedPets}
    </div>
  );
};

export default SearchParams;
