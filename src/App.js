import { useState, useCallback } from "react";
import CryptoContent from "./components/Content";
import Loading from "./components/Loading";
import SideBar from "./components/Sidebar";
import useFetchCurrency from "./hooks/useFetchCurrency";

const App = () => {
  const [currency, setCurrency] = useState("bitcoin");
  const [crypto, isFetching] = useFetchCurrency(currency);

  const searchCurrency = useCallback((cryptoCurrency) => {
    setCurrency(cryptoCurrency);
  }, []);

  return (
    <div className="bodyhtml">
      <section className="crypto-content">
        {isFetching ? (
          <Loading />
        ) : (
          <>
            <CryptoContent crypto={crypto} />
            <SideBar searchCurrency={searchCurrency} isFetching={isFetching} />
          </>
        )}
      </section>
      <div className="crypto-footer">
        <a href="https://github.com/aemabit">By: Aemabit</a> |{" "}
        <a href="https://www.coingecko.com/en/api">Api: Coingecko</a>
      </div>
    </div>
  );
};

export default App;
