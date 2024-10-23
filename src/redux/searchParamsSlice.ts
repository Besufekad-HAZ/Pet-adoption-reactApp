import { createSlice } from "@reduxjs/toolkit";

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      location: "",
      breed: "",
      animal: "",
    },
  },
  reducers: {
    all: (
      state,
      action: { payload: { location: string; breed: string; animal: string } },
    ) => {
      state.value = action.payload
    },
  },
});

export const { all } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
