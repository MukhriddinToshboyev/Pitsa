import "./style.css";

import OrdersIcon1 from "../assets/Orders-icons8_left_48px 1.svg";
import OrdersIcon2 from "../assets/Orders-Button.svg";
import { useEffect, useState } from "react";
import Market from "../Market";

function Orders({
  handleDeleteFromCart,
  handleQuantityDecrement,
  handleQuantityIncrement,
  cartItems1,
  handleLogaut,
}) {
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    // Sub total ni hisoblash
    const total = cartItems1.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(total);
  }, [cartItems1]);

  return (
    <div className="orders-container">
      {cartItems1?.length ? (
        <div className="orders-payment">
          <header className="orders-header">
            <div className="orders-header__number">
              <button onClick={handleLogaut} className="handleLogaut">
                <img
                  src={OrdersIcon1}
                  alt="icon"
                  className="orders-header__icon"
                />
              </button>
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
                    <button onClick={() => handleDeleteFromCart(food)}>
                      <img
                        className="orders-section__delet"
                        src={OrdersIcon2}
                        alt="icon"
                      />
                    </button>
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
                  <p className="discaunt_number">$ {subTotal.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </section>
          <footer className="orders-footer">
            <button className="orders-item__button">To Order</button>
          </footer>
        </div>
      ) : (
        <Market />
      )}
    </div>
  );
}

export default Orders;
