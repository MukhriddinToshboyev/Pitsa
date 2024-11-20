import "./Account.css";

import AccountIcon from "../assets/Account-icons8_clock_100px 1.svg";
import { useState } from "react";
import AccountHistory from "./AccountHistory";

function Account() {
  const [card, setCard] = useState(false);

  return (
    <div className="account-container">
      {card && <AccountHistory />}
      <div className="account-order">
        <header className="account-header">
          <h2 className="account-header__text">Profil</h2>
        </header>
        <nav className="account-navigation">
          <div className="account-navigation__container">
            <div className="account-navigation__ellipse">
              <h2 className="account-navigation__ellipse-text">D</h2>
            </div>
            <h2 className="account-navigation__name">Denis</h2>
          </div>
          <div>
            <h2 className="account-navigation__text">Edit profile</h2>
          </div>
        </nav>
        <section onClick={() => setCard(true)} className="account-section">
          <img src={AccountIcon} alt="" className="account-section__icon" />
          <h2 className="account-section__text">Order history</h2>
        </section>
      </div>
    </div>
  );
}

export default Account;
