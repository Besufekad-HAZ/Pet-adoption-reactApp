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
      transformResponse: (response: BreedListAPIResponse): string[] =>
        response.breeds,
    }),
  }),
});

export const { useGetPetQuery, useGetBreedQuery } = petApi;
