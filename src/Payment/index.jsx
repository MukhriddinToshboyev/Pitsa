import "./Payment.css";

import PaymentCard from "../assets/Payment-Card.svg";
import PaymentPaypal from "../assets/Payment-Paypal.svg";
import PaymentWallet from "../assets/Payment-Wallet.svg";

function Payment() {
  return (
    <div className="payment-container">
      <div className="payment_order">
        <header className="payment-header">
          <h1 className="payment-header__title">Payment</h1>
          <p className="payment-header__text">3 payment method available</p>
        </header>
        <nav className="payment-navigation__line"></nav>
        <section className="payment-section">
          <div className="payment-method">
            <h2 className="payment-method__text">Payment Method</h2>
            <div className="payment-method__item">
              <div className="payment-method__card">
                <div className="card">
                  <img src={PaymentCard} alt="icon" className="card-img" />
                  <p className="card-text"> Credit Card </p>
                </div>
                <div className="card">
                  <img src={PaymentPaypal} alt="icon" className="card-img" />
                  <p className="card-text"> Paypal </p>
                </div>
                <div className="card">
                  <img src={PaymentWallet} alt="icon" className="card-img" />
                  <p className="card-text"> Cash </p>
                </div>
              </div>
              <form className="payment-method__form">
                <label className="form-name">
                  Cardholder Name
                  <input type="text" placeholder="Levi Ackerman" />
                </label>
                <label className="form-name">
                  Card Number
                  <input type="number" placeholder="2564 1421 0897 1244" />
                </label>
                <div className="form-method__date">
                  <div>
                    <label className="form-date">
                      Expiration Date
                      <input type="date" placeholder="02/2022" />
                    </label>
                  </div>
                  <div>
                    <label className="form-date">
                      CVV
                      <input type="cvc" placeholder="***" />
                    </label>
                  </div>
                </div>
              </form>
              <div className="payment-line"></div>
              <div className="payment-methon__items">
                <div>
                  <h2 className="payment-method__order">Order Type</h2>
                  <select
                    className="payment-method__order-option"
                    id="country"
                    name="country"
                  >
                    <option value="australia">Dane In</option>
                    <option value="canada">Dane In</option>
                    <option value="usa">Dine In</option>
                  </select>
                </div>
                <form className="payment-method__table" action="action">
                  <label className="payment-method__table-text">
                    Table no.
                    <input type="text" placeholder="140" />
                  </label>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="payment-footer">
          <button className="payment-footer__canel"> Canel </button>
          <button className="payment-footer__confirm"> Confirm Payment </button>
        </footer>
      </div>
    </div>
  );
}

export default Payment;
