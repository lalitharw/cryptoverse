import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = import.meta.env.VITE_RAPID_CRYPTO_API
const apiKey = import.meta.env.VITE_RAPID_KEY
const apiHost = import.meta.env.VITE_RAPID_HOST

export const CryptoApi = createApi({
    reducerPath: "crypto-api",
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        prepareHeaders: (headers) => {
            headers.set("x-rapidapi-key", apiKey),
                headers.set("x-rapidapi-host", apiHost)
        }
    },

    ),
    endpoints: (builder) => ({
        getCoinsStats: builder.query({
            query: () => "/coins"
        }),

        getCoins: builder.query({
            query: (count) => `coins?limit=${count}`
        }),

        getCoinDetails: builder.query({
            query: (coinId) => `coin/${coinId}`

        }),

        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => `/coin/${coinId}/history?timePeriod=${timeperiod}`
        })
    })
})

export const { useGetCoinsStatsQuery, useGetCoinsQuery, useGetCoinDetailsQuery, useGetCryptoHistoryQuery } = CryptoApi