import { useGetCoinsQuery } from "../app/Crypto/CryptoApi";
import { useState, useEffect } from "react";

// react router dom
import { Link } from "react-router-dom";
import { CardComponent } from "../components/CardComponent";

export const CryptoCurrency = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data, error, isLoading } = useGetCoinsQuery(count);

  const [coins, setCoins] = useState(data?.data?.coins);
  const [search, setSearch] = useState("");

  // console.log(coins)

  useEffect(() => {
    // setCoins(data?.data?.coins)
    const filterData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCoins(filterData);
  }, [data, search]);

  if (isLoading)
    return (
      <>
        <p>Loading.. Please Wait</p>
      </>
    );

  return (
    <div>
      {!simplified && (
        <input
          type="text"
          className="form-control col-6"
          placeholder="Search CryptoCoin"
          name=""
          id=""
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      <h2 className="fw-bold text-black">Crypto Currency</h2>
      <div className="row">
        {coins?.map((coin) => (
          <>
            <div className="col-lg-4">
              <Link className="text-decoration-none" to={`crypto-details/${coin.uuid}`}>
                <CardComponent coin={coin} />
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
