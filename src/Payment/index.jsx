import MarketImg from "../assets/Market-English breakfast-pana 1.png";

function Payment() {
  return (
    <div className="market-container">
      <div className="market_order">
        <header className="market-header">
          <h1 className="market-header__text">Orders</h1>
        </header>
        <section className="market-section">
          <div className="market-items">
            <img src={MarketImg} alt="img" className="market-item__img" />
            <h1 className="market-item__title">No Order</h1>
            <p className="market-item__date">Go find the products you like</p>
          </div>
          <div className="maket-items">
            <button className="market-item__button">To Order</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Payment;
