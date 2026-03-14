import { createSlice } from "@reduxjs/toolkit";
import Default from "../data/items";

const itemSlice = createSlice({
  name: "items",
  initialState: Default,
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;