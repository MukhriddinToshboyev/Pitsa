import "./Information.css";

import InformationIcon1 from "../../assets/Information-icons8_phone_32px 1.svg";
import InformationIcon2 from "../../assets/Information-icons8_Location_32px 1.svg";
import InformationIcon3 from "../../assets/Information-icons8_Gmail_Logo_32px 1.svg";
import InformationIcon4 from "../../assets/Information-icons8_internet_64px 1.svg";
import InformationIcon5 from "../../assets/Information-icons8_whatsapp_512px 1.svg";
import InformationIcon6 from "../../assets/Information-icons8_Instagram_64px_1 1.svg";
import InformationIcon7 from "../../assets/Information-icons8_telegram_app_480px_1 1.svg";
import InformationIcon8 from "../../assets/Information-icons8_facebook_64px 1.svg";

function Information() {
  return (
    <div className="information-container">
      <div className="information-function">
        <header className="information-header">
          <h2 className="information-header__text"> Information</h2>
        </header>
        <nav className="information-navigation">
          <ul className="information-navigation__items">
            <li className="information-navigation__item ">
              <a href="#">Information</a>
            </li>
            <li className="information-navigation__item">
              <a href="#">Language</a>
            </li>
            <li className="information-navigation__item">
              <a href="#">Order history</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Information;
