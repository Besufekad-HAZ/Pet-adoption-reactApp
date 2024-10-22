import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PetAPIResponse } from "../APIResponsesTypes";

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
  }),
});

export const { useGetPetQuery } = petApi;
