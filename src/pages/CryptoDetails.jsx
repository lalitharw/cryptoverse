// rtk query
import { useGetCoinDetailsQuery } from "../app/Crypto/CryptoApi";

// react router dom
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// third party
import millify from "millify";


import HTMLReactParser from "html-react-parser/lib/index";

// components
import { LoaderComponent } from "../components/LoaderComponent";
import { LineChartComponent } from "../components/LineChartComponent";

// react icons
import { FaHashtag } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiTrophy } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { useState, useEffect } from "react";

export const CryptoDetails = () => {
  const [coin, setCoin] = useState({});
  const { coinId } = useParams();

  const { data, error, isLoading } = useGetCoinDetailsQuery(coinId);

  useEffect(() => {
    if (data && data.data && data.data.coin) {
      setCoin(data.data.coin);
    }
  }, [data]);

  if (isLoading)
    return (
      <>
        <LoaderComponent />
      </>
    );

  return (
    <>
      <div className="container my-5">
        <h3 className="text-center fw-bold text-primary">
          {coin.name} ({coin.name}-{coin.symbol}) Price
        </h3>
        <p className="text-black-50 text-center">
          {coin.name} live price in US dollars. View value statistics, market
          cap and supply
        </p>
        <hr />

        <LineChartComponent/>

        <hr />

        <div className="row mt-5 d-flex justify-content-around ">
          <div className="col-lg-5">
            <h2 className="text-center">{coin.name} Value Statistics</h2>
            <p className="text-center">
              An overview showing the stats of {coin.name}
            </p>
            <div className="d-flex justify-content-between text-black-50  mb-3">
              <p className="fw-bold ">
                <FaHashtag className="me-2" />
                Rank
              </p>
              <p className="fw-bold">{coin.rank}</p>
            </div>
            <div className="d-flex justify-content-between text-black-50  mb-3">
              <p className="fw-bold ">
                <LuDollarSign className="me-2" />
                Price to USD
              </p>
              <p className="fw-bold">${millify(coin.price)}</p>
            </div>
            <div className="d-flex justify-content-between text-black-50  mb-3">
              <p className="fw-bold ">
                <AiOutlineThunderbolt className="me-2" />
                24h Volume
              </p>
              <p className="fw-bold">{millify(coin["24hVolume"])}</p>
            </div>

            <div className="d-flex justify-content-between text-black-50 mb-3">
              <p className="fw-bold ">
                <CiTrophy className="me-2" />
                All Time High (Daily Avg.)
              </p>
              <p className="fw-bold">{millify(coin.allTimeHigh?.price)}</p>
            </div>
          </div>
          <div className="col-lg-5">
            <h2 className="text-center">Other Statistics</h2>
            <p className="text-center">
              An overview showing the stats of {coin.name}
            </p>
            <div className="d-flex justify-content-between text-black-50 mb-3">
              <p className="fw-bold ">
                <CiTrophy className="me-2" />
                Number of Markets
              </p>
              <p className="fw-bold">{millify(coin.numberOfMarkets)}</p>
            </div>
            <div className="d-flex justify-content-between text-black-50 mb-3">
              <p className="fw-bold ">
                <CiTrophy className="me-2" />
                Number of Exchanges
              </p>
              <p className="fw-bold">{millify(coin.numberOfExchanges)}</p>
            </div>
            <div className="d-flex justify-content-between text-black-50 mb-3">
              <p className="fw-bold ">
                <CiTrophy className="me-2" />
                Approved Supply
              </p>
              <p className="fw-bold">
                {coin.supply?.confirmed == true ? (
                  <FaCheck className="fw-bold" />
                ) : (
                  <RxCross2 className="fw-bold" />
                )}
              </p>
            </div>
            <div className="d-flex justify-content-between text-black-50 mb-3">
              <p className="fw-bold ">
                <CiTrophy className="me-2" />
                Total Supply
              </p>
              <p className="fw-bold">{millify(coin.supply?.total)}</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="section">
          <h4 className="text-center text-primary fw-bold">
            What is {coin.name}?
          </h4>
          <p className="text-center">
            {/* htmlreactparser should not be null */}
            {HTMLReactParser(coin.description || "")}{" "}
          </p>
        </div>
        <hr />

        <div className="section py-5">
          <h2 className="fw-bold">{coin.name} Links</h2>
          {coin && coin.links ? (
            coin.links.map((link) => (
              <>
                <div className="d-flex">
                  <p className="fw-bold text-black-50" >

                    <Link className="text-black-50" to={`${link.url}`}>{link.name}</Link>
                  </p>
                </div>
              </>
            ))
          ) : (
            <>df</>
          )}
        </div>
      </div>
    </>
  );
};
