import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemReducer,
    fetchStatus:fetchStatusSlice.reducer
  },
});

export default myntraStore;