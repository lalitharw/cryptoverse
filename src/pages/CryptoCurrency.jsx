import { useGetCoinsQuery } from "../app/Crypto/CryptoApi"
import { useState,useEffect } from "react"

// react router dom
import { Link } from "react-router-dom"
import { Card } from "../components/Card"

export const CryptoCurrency = ({simplified}) => {

    const count = simplified ? 10: 100

    const{data,error,isLoading} = useGetCoinsQuery(count)

    const [coins,setCoins] = useState(data?.data?.coins)
    const [search,setSearch] = useState("")

    // console.log(coins)

    useEffect(() => {
            // setCoins(data?.data?.coins)
            const filterData = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
            setCoins(filterData)
    },[data,search])

    if(isLoading) return (<>
    <p>Loading.. Please Wait</p>
    </>)

    return (
        <>
        <Card/>
        <input type="text" name="" id="" onChange={(e) => setSearch(e.target.value)} />
        <h1>Crypto Currency</h1>
        {coins?.map((coin) => (
            <>
            <Link to={`crypto-details/${coin.uuid}`} >
            <p key={coin.uuid}>{coin.name} <img src={coin.iconUrl} width={30}/></p>
            </Link>
            </>
        ))}
        </>
    )
}