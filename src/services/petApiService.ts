import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PetAPIResponse, BreedListAPIResponse } from "../APIResponsesTypes";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pets-v2.dev-apis.com" }),
  endpoints: (builder) => ({
    getPet: builder.query<PetAPIResponse, string>({
      query: (id) => ({
        url: "pets",
        params: { id },
      }),
      transformResponse: (response: PetAPIResponse) => ({
        pets: [response.pets[0]],
        numberOfResults: response.numberOfResults,
        startIndex: response.startIndex,
        endIndex: response.endIndex,
        hasNext: response.hasNext,
      }),
    }),
    getBreed: builder.query<BreedListAPIResponse, { animal: string }>({
      query: ({ animal }) => ({
        url: "breeds",
        params: { animal },
      }),
    }),
    searchPets: builder.query<
      PetAPIResponse,
      { animal: string; location: string; breed: string }
    >({
      query: ({ animal, location, breed }) => ({
        url: "pets",
        params: { animal, location, breed },
      }),
      transformResponse: (response: PetAPIResponse) => ({
        pets: response.pets,
        numberOfResults: response.numberOfResults,
        startIndex: response.startIndex,
        endIndex: response.endIndex,
        hasNext: response.hasNext,
      }),
    }),
  }),
});

export const { useGetPetQuery, useGetBreedQuery, useSearchPetsQuery } = petApi;
