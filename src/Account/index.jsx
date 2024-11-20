import "./Account.css";

import { useState } from "react";

function Account() {
  const [card, setCard] = useState("credit-card");

  return (
    <div className="account-container">
      <div className="account-order">
        <header className="account-header">
          <h2 className="account-header__text">Profil</h2>
        </header>
        <nav className="account-navigation">
          <div className="account-navigation__ellipse">
            <h2 className="account-navigation__ellipse-text">D</h2>
          </div>
          <h2 className="account-navigation__text">Denis</h2>
        </nav>
        <section className="account-section">
          <img src="" alt="" className="account-section__icon" />
          <h2 className="account-section__text">Order history</h2>
        </section>
      </div>
    </div>
  );
}

export default Account;
