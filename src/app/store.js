import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../data/cryptoAPI";
import { cryptoNewsApi } from "../data/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cryptoApi.middleware,
      cryptoNewsApi.middleware,
    ]),
});
