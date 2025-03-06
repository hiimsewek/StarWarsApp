import { configureStore } from "@reduxjs/toolkit";
import { starWarsApi } from "services/starWars";

export const store = configureStore({
  reducer: {
    [starWarsApi.reducerPath]: starWarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(starWarsApi.middleware),
});
