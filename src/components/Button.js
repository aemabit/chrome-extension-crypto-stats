const ButtonNav = ({ children, isFetching }) => {
  return <button className="crypto-btn" disabled={isFetching}>({children})</button>;
};

export default ButtonNav;
