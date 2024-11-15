import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "./Crypto/CryptoApi";
import { CryptoNewsApi } from "./Crypto/CryptoNewsApi";

export const store = configureStore({
    reducer:{
        [CryptoApi.reducerPath]:CryptoApi.reducer,
        [CryptoNewsApi.reducerPath]:CryptoNewsApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(CryptoApi.middleware)
        .concat(CryptoNewsApi.middleware)
})