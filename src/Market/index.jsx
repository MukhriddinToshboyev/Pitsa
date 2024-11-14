import "./style.css";

import HomeIcon1 from "../assets/icons1_Menu.png";
import HomeIcon2 from "../assets/Market-Home.png";
import HomeIcon3 from "../assets/icons3-Discount.png";
import HomeIcon4 from "../assets/icons4-Graph.png";
import HomeIcon5 from "../assets/icons5-Message.png";
import HomeIcon6 from "../assets/isons6-Notification.png";
import HomeIcon7 from "../assets/Market-cart-outline1.png";
import HomeIcon8 from "../assets/icons8_account.png";

import MarketImg from "../assets/Market-English breakfast-pana 1.png";

function Market() {
  return (
    <div className="market-Container">
      <div className="market-container">
        <div className="market-icons">
          <img src={HomeIcon1} alt="img" className="market" />
          <img src={HomeIcon2} alt="img" className="market" />
          <img src={HomeIcon3} alt="img" className="market" />
          <img src={HomeIcon4} alt="img" className="market" />
          <img src={HomeIcon5} alt="img" className="market" />
          <img src={HomeIcon6} alt="img" className="market" />
          <div className="market-icon">
            <div className="market-icon__img">
              <img src={HomeIcon7} alt="img" className="market" />
            </div>
          </div>
          <img src={HomeIcon8} alt="img" className="market" />
        </div>
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
    </div>
  );
}

export default Market;
