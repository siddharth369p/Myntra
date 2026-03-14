import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemsSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemReducer,
  },
});

export default myntraStore;