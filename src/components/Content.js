const CryptoContent = ({ crypto }) => {
  const price = crypto
    ? crypto.tickers.filter((local) => local.target === "USD")[0].last
    : "No reference";

  return (
    <div className="crypto-render">
      <img
        src={crypto.image.large}
        className="crypto-currency-logo"
        alt="logo"
      />
      <div className="crypto-info">
        <h3>{crypto.name}</h3>
        <p>
          {crypto.description.en.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 125)}
          ...
        </p>
      </div>
      <div className="crypto-stats">
        <p><span> USD 💵:</span> ${price}</p>
        <p><span>Sentiment 📈:</span>  %{crypto.sentiment_votes_up_percentage}</p>
        <p><span>Sentiment 📉:</span>  %{crypto.sentiment_votes_down_percentage}</p>
      </div>
    </div>
  );
};

export default CryptoContent;
