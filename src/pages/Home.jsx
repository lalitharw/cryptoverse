import { useGetCoinsStatsQuery } from "../app/Crypto/CryptoApi";
import { useState } from "react";

import millify from "millify";

// react bootstrap
import Spinner from 'react-bootstrap/Spinner';

// components
import { CryptoCurrency } from "./CryptoCurrency";
import { LoaderComponent } from "../components/LoaderComponent";

export const Home = () => {
  const { data, error, isLoading } = useGetCoinsStatsQuery();
  console.log(data?.data?.stats);
  // const [globalStats,setGlobalStats] = useState(data?.data?.stats)
  const globalStats = data?.data?.stats;

  if (isLoading)
    return (
      <>
        <LoaderComponent/>
      </>
    );

  return (
    <div className="container-fluid bg-black-50">
      <div className=" d-flex justify-content-center gap-5 p-5">
        <div>
          <span className="fs-5 fw-bold text-black">Total Coins:</span>
          <br />
          {globalStats.totalCoins}
        </div>
        <div>
          <span className="fs-5 fw-bold text-black">Total Exchanges:</span>
          <br />
          {millify(globalStats.totalExchanges)}
        </div>
        <div>
          <span className="fs-5 fw-bold text-black">Total Markets:</span>
          <br />
          {millify(globalStats.totalMarkets)}
        </div>
        <div>
          <span className="fs-5 fw-bold text-black">Total 24h Volume:</span>
          <br />
          {millify(globalStats.total24hVolume)}
        </div>
      </div>

      <CryptoCurrency simplified={true} />
    </div>
  );
};
