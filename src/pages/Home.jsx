import { useGetCoinsStatsQuery } from "../app/Crypto/CryptoApi";
import { useState } from "react";

// millify
import millify from "millify";

// react icons
import { FaCoins } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";
import { RiCoinsFill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa6";

// react router dom
import { Link } from "react-router-dom";

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
        <LoaderComponent />
      </>
    );

  return (
    <div className="container-fluid">
      <div className=" d-flex justify-content-center gap-5 p-5">
        <div className="shadow rounded p-3">
          <FaCoins style={{ fontSize: 30, marginBottom: 10 }} />

          <br />
          <span className="fs-5 fw-bold text-black">Total Coins:</span>
          <br />
          {globalStats.totalCoins}
        </div>
        <div className="shadow p-3 rounded">
          <BsCurrencyExchange style={{ fontSize: 30, marginBottom: 10 }} />
          <br />
          <span className="fs-5 fw-bold text-black">Total Exchanges:</span>
          <br />
          {millify(globalStats.totalExchanges)}
        </div>
        <div className="shadow p-3 rounded">
          <FaMoneyBillWave style={{ fontSize: 30, marginBottom: 10 }} />
          <br />
          <span className="fs-5 fw-bold text-black">Total Markets:</span>
          <br />
          {millify(globalStats.totalMarkets)}
        </div>
        <div className="shadow p-3 rounded">
          <RiCoinsFill style={{ fontSize: 30, marginBottom: 10 }} />
          <br />
          <span className="fs-5 fw-bold text-black">Total 24h Volume:</span>
          <br />
          {millify(globalStats.total24hVolume)}
        </div>
      </div>

      <div className="section">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-bold text-black">Crypto Currency</h2>
          <p className="text-primary fw-bold">
            <Link className="text-decoration-none" to={`crypto-currencies`} >
            Show More
            </Link>
            </p>
        </div>

        <CryptoCurrency simplified={true} />
      </div>
    </div>
  );
};
