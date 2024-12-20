import "./style.css";

import CardIcon1 from "../assets/Card-icons8_left_48px 1.svg";
import CardIcon2 from "../assets/Card-Button.svg";
import { useEffect, useState } from "react";
import Market from "../Market";
import Payment from "../Payment";

function Card({
  handleQuantityDecrement,
  handleQuantityIncrement,
  cart,
  handleLogaut,
}) {
  const [subTotal, setSubTotal] = useState(0); //sub totalni hisoblash

  const [click, setClick] = useState(); //payment cardga o'tish

  const [cardItem, setCardItem] = useState("dine-in"); //  classni o'zgartirish

  useEffect(() => {
    // Sub total ni hisoblash
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(total);
  }, [cart]);

  return (
    <div className="card-container">
      {click && <Payment />}
      {cart?.length ? (
        <div className="card-orders">
          <header className="card-header">
            <div className="card-header__number">
              <button onClick={handleLogaut} className="handleLogaut">
                <img src={CardIcon1} alt="icon" className="Card-header__icon" />
              </button>
              <h1 className="card-header__text">Orders #34562</h1>
            </div>
            <div className="card-header__title">
              {/* onClick={() => setCard("credit-card")}
                  className={`card  ${
                    card === "credit-card" ? "card-active" : ""
                  }`} */}
              <button
                onClick={() => setCardItem("dine-in")}
                className={`card-header_button ${
                  cardItem === "dine-in" ? "dine" : ""
                }`}
              >
                Dine In
              </button>
              <button
                onClick={() => setCardItem("to-go")}
                className={`card-header_button ${
                  cardItem === "to-go" ? "dine" : ""
                }`}
              >
                To Go
              </button>
              <button
                onClick={() => setCardItem("delivery")}
                className={`card-header_button ${
                  cardItem === "delivery" ? "dine" : ""
                }`}
              >
                Delivery
              </button>
            </div>
            <div className="card-header__item">
              <h1 className="card-header__item-text">Item</h1>
              <div className="card-header__qty">
                <h1 className="card-header__item-text">Qty</h1>
                <h1 className="card-header__item-text">Price</h1>
              </div>
            </div>
            <div className="card__gorizantal-line"></div>
          </header>
          <section className="card-section">
            <div className="card-items">
              {cart?.map((food) => (
                <div key={food.id} className="card-item">
                  <div className="card-item__card">
                    <div>
                      <img
                        src={food.image}
                        alt="img"
                        className="card-item__img"
                      />
                      <div className="card-item__number">
                        <button
                          onClick={() => handleQuantityDecrement(food)}
                          className="card-item__button"
                        >
                          -
                        </button>
                        <span className="card-item__button-number">
                          {food.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityIncrement(food)}
                          className="card-item__button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="card-item__details">
                      <h1 className="card-item__name">{food.name}</h1>
                      <p className="card-item__price">$ {food.price}</p>
                      <p className="card-item__price">
                        $ {food.price * food.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="card-section__input">
                    <form>
                      <input
                        className="card-search__text"
                        tabIndex={Text}
                        placeholder="Please, just a little bit spicy only."
                      />
                    </form>
                    <button className="card-section__delet">
                      <img src={CardIcon2} alt="icon" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="card-section__discount">
                <div className="card-section__dis">
                  <h1 className="discaunt_text">Discaunt</h1>
                  <p className="discaunt_number">$ 0</p>
                </div>
                <div className="card-section__dis">
                  <h1 className="discaunt_text">Sub total</h1>
                  <p className="discaunt_number">$ {subTotal.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </section>
          <footer className="card-footer">
            <button
              onClick={() => setClick(true)}
              className="card-footer__button"
            >
              To Order
            </button>
          </footer>
        </div>
      ) : (
        <Market />
      )}
    </div>
  );
}

export default Card;
