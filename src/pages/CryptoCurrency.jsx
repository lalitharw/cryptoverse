import { useState, useEffect } from "react";

// rtk query
import { useGetCoinsQuery } from "../app/Crypto/CryptoApi";


// react router dom
import { Link } from "react-router-dom";

// components
import { CardComponent } from "../components/CardComponent";
import { LoaderComponent } from "../components/LoaderComponent";

export const CryptoCurrency = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data, error, isLoading } = useGetCoinsQuery(count);

  const [coins, setCoins] = useState(data?.data?.coins);
  const [search, setSearch] = useState("");



  useEffect(() => {
    const filterData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCoins(filterData);
  }, [data, search]);

  if (isLoading)
    return (
      <>
        <LoaderComponent/>
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
      <div className="row">
        {coins?.map((coin) => (
          <>
            <div className="col-lg-3 col-md-4">
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
