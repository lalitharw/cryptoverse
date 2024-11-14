import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "./Crypto/CryptoApi";

export const store = configureStore({
    reducer:{
        [CryptoApi.reducerPath]:CryptoApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(CryptoApi.middleware),
})