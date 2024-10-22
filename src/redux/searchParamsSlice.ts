import { createSlice } from "@reduxjs/toolkit";

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    location: "",
    breed: "",
    animal: "",
  },
  reducers: {
    all: (state, action: { payload: { location: string; breed: string; animal: string } }) => {
      state.location = action.payload.location;
      state.breed = action.payload.breed;
      state.animal = action.payload.animal;
    },
  },
});

export const { all } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
