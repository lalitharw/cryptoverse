import { useGetCoinsStatsQuery } from "../app/Crypto/CryptoApi"
import { useState } from "react"

import millify from "millify"

// components
import { CryptoCurrency } from "./CryptoCurrency"

export const Home =() => {

    const {data, error, isLoading} = useGetCoinsStatsQuery()
    console.log(data?.data?.stats)
    // const [globalStats,setGlobalStats] = useState(data?.data?.stats)
    const globalStats = data?.data?.stats

    if(isLoading) return(
        <>
        <div>
            Loading...
        </div>
        </>
    )

    return (
        <>
        <p>Total Coins: {globalStats.totalCoins}</p>
        <p>Total Exchanges: {millify(globalStats.totalExchanges)}</p>
        <p>Total Markets: {millify(globalStats.totalMarkets)}</p>
        <p>Total 24H Volume: {millify(globalStats.total24hVolume)}</p>

        <CryptoCurrency simplified={true}/>
        </>
    )
}