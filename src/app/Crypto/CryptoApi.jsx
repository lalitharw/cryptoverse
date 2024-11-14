import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const CryptoApi = createApi({
    reducerPath:"crypto-api",
    baseQuery:fetchBaseQuery({baseUrl:"https://coinranking1.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set("x-rapidapi-key","715f7ada66msh8fdaffc877489ebp198450jsn27c89ad56a83"),
            headers.set("x-rapidapi-host","coinranking1.p.rapidapi.com")
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

        })
    })
})

export const {useGetCoinsStatsQuery, useGetCoinsQuery, useGetCoinDetailsQuery} = CryptoApi