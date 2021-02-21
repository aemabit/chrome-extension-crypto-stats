import React from "react";
import { crypto } from "../utils/cryptocurrencies";
import ButtonNav from "./Button";

const SideBar = React.memo(({ searchCurrency, isFetching }) => {
  return (
    <div className="crypto-sidebar">
      {crypto.map((currency) => (
        <div key={currency.name} onClick={() => searchCurrency(currency.name.toLowerCase())}>
          <ButtonNav isFetching={isFetching}>
            {currency.value}
          </ButtonNav>
        </div>
      ))}
    </div>
  );
});

export default SideBar;
