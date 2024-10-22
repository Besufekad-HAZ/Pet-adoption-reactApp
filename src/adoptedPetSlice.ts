import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "./APIResponsesTypes";

const adoptedPetSlice = createSlice({
  name: "adoptedPet",

  initialState: null as Pet | null,

  reducers: {
    adopt: (state, action: PayloadAction<Pet>) => action.payload,
  },
});

export const { adopt } = adoptedPetSlice.actions;

export default adoptedPetSlice.reducer;
