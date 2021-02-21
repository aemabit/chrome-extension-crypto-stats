import { useEffect, useState } from "react";

const useFetchCurrency = (currency) => {
  const [cryptoresponse, setCryptoResponse] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    setFetching(true);
    if (Boolean(currency)) {
      fetch(`https://api.coingecko.com/api/v3/coins/${currency}`)
        .then((res) => res.json())
        .then((data) => {
          setCryptoResponse(data);
          setFetching(false);
        });
    }
  }, [currency]);

  return [cryptoresponse, isFetching];
};

export default useFetchCurrency;
