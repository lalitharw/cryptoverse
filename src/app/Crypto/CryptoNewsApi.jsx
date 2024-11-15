import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CryptoNewsApi = createApi({
    reducerPath: "crypto-news-api",
    baseQuery: fetchBaseQuery({baseUrl:"",

        prepareHeaders:(headers) => {
            headers.set()
        }
    }),
    endpoints: (builder) => ({
        getNewsBySearch: builder.query({
            query: () => ``
        })
    })
})


export const { useGetNewsBySearchQuery } = CryptoNewsApi