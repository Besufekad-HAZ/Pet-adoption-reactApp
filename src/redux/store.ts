import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from "./adoptedPetSlice";
import { petApi } from "../services/petApiService";
import searchParams from "./searchParamsSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
