import "./style.css";

import HomeIcon1 from "../assets/icons1_Menu.png";
import HomeIcon2 from "../assets/Market-Home.png";
import HomeIcon3 from "../assets/icons3-Discount.png";
import HomeIcon4 from "../assets/icons4-Graph.png";
import HomeIcon5 from "../assets/icons5-Message.png";
import HomeIcon6 from "../assets/isons6-Notification.png";
import HomeIcon7 from "../assets/Market-cart-outline1.png";
import HomeIcon8 from "../assets/icons8_account.png";

import OrdersIcon1 from "../assets/Orders-icons8_left_48px 1.svg";
import OrdersIcon2 from "../assets/Orders-Button.svg";

function Orders({
  handleQuantityDecrement,
  handleQuantityIncrement,
  cartItems1,
}) {
  return (
    <div className="orders-container">
      <div className="orders-icons">
        <img src={HomeIcon1} alt="img" className="orders" />
        <img src={HomeIcon2} alt="img" className="orders" />
        <img src={HomeIcon3} alt="img" className="orders" />
        <img src={HomeIcon4} alt="img" className="orders" />
        <img src={HomeIcon5} alt="img" className="orders" />
        <img src={HomeIcon6} alt="img" className="orders" />
        <div className="orders-icon">
          <div className="orders-icon__img">
            <img src={HomeIcon7} alt="img" className="orders" />
          </div>
        </div>
        <img src={HomeIcon8} alt="img" className="orders" />
      </div>
      <div className="orders-payment">
        <header className="orders-header">
          <div className="orders-header__number">
            <img src={OrdersIcon1} alt="icon" className="orders-header__icon" />
            <h1 className="orders-header__text">Orders #34562</h1>
          </div>
          <div className="orders-header__title">
            <button className="orders-header_dine">Dine In</button>
            <button className="orders-header_button">To Go</button>
            <button className="orders-header_button">Delivery</button>
          </div>
          <div className="orders-header__item">
            <h1 className="orders-header__item-text">Item</h1>
            <div className="orders-header__qty">
              <h1 className="orders-header__item-text">Qty</h1>
              <h1 className="orders-header__item-text">Price</h1>
            </div>
          </div>
          <div className="orders__gorizantal-line"></div>
        </header>
        <section className="orders-section">
          <div className="orders-items">
            {cartItems1?.map((food) => (
              <div key={food.id} className="orders-item">
                <div className="orders-section__img">
                  <div>
                    <img
                      src={food.image}
                      alt="img"
                      className="orders-item__img"
                    />
                    <div className="orders-section__number">
                      <button
                        onClick={() => handleQuantityDecrement(food)}
                        className="orders-section__button"
                      >
                        -
                      </button>
                      <span className="orders-cart">{food.quantity}</span>
                      <button
                        onClick={() => handleQuantityIncrement(food)}
                        className="orders-section__button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="orders-item__details">
                    <h1 className="orders-item__name">{food.name}</h1>
                    <p className="orders-item__price">$ {food.price}</p>
                    <p className="orders-item__price">
                      $ {food.price * food.quantity}
                    </p>
                  </div>
                </div>

                <div className="orders-section__input">
                  <form className="orders-search">
                    <input
                      className="orders-search__text"
                      tabIndex={Text}
                      placeholder="Please, just a little bit spicy only."
                    />
                  </form>
                  <img
                    className="orders-section__delet"
                    src={OrdersIcon2}
                    alt="icon"
                  />
                </div>
              </div>
            ))}
            <div className="orders-section__discount">
              <div className="orders-section__dis">
                <h1 className="discaunt_text">Discaunt</h1>
                <p className="discaunt_number">$ 0</p>
              </div>
              <div className="orders-section__dis">
                <h1 className="discaunt_text">Sub total</h1>
                <p className="discaunt_number">$ 21.03</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="orders-footer">
          <button className="orders-item__button">To Order</button>
        </footer>
      </div>
    </div>
  );
}

export default Orders;