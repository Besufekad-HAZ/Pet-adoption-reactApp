import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PetAPIResponse, BreedListAPIResponse } from "../APIResponsesTypes";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pets-v2.dev-apis.com" }),
  endpoints: (builder) => ({
    getPet: builder.query({
      query: (id: string) => ({
        url: "pets",
        params: {
          id,
        },
      }),
      transformResponse: (response: PetAPIResponse) => response.pets[0],
    }),
    getBreed: builder.query({
      query: (animal: string) => ({
        url: "breeds",
        params: {
          animal,
        },
      }),
      transformResponse: (response: BreedListAPIResponse): string[] => {
        if (!response || !response.breeds) {
          return [];
        }
        return response.breeds;
      },
    }),
    search: builder.query({
      query: ({
        animal,
        location,
        breed,
      }: {
        animal: string;
        location: string;
        breed: string;
      }) => ({
        url: "pets",
        params: { animal, location, breed },
      }),
      transformResponse: (response: PetAPIResponse) => response.pets,
    }),
  }),
});

export const { useGetPetQuery, useGetBreedQuery, useSearchQuery } = petApi;
