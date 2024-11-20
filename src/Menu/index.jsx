import "./Menu.css";

import MenuIcon1 from "../assets/Menu-icons8_info_64px 1.svg";
import MenuIcon2 from "../assets/Menu-icons8_Earth_Globe_32px 1.svg";
import MenuIcon3 from "../assets/Menu-icons8_clock_100px 1 (1).svg";
import { useState } from "react";

function Menu() {
  const [information, setInformation] = useState(false);

  return (
    <div className="menu-container">
      {/* {information && } */}
      <div className="menu-function">
        <header className="menu-header">
          <h2 className="menu-header__text"> Functions</h2>
        </header>
        <nav className="menu-navigation">
          <ul className="menu-navigation__items">
            <li
              onClick={() => setInformation(true)}
              className="menu-navigation__item information"
            >
              <a href="#">
                <img
                  src={MenuIcon1}
                  alt="icon"
                  className="menu-navigation__icon"
                />
                Information
              </a>
            </li>
            <li className="menu-navigation__item">
              <a href="#">
                <img
                  src={MenuIcon2}
                  alt="icon"
                  className="menu-navigation__icon"
                />
                Language
              </a>
            </li>
            <li className="menu-navigation__item">
              <a href="#">
                <img
                  src={MenuIcon3}
                  alt="icon"
                  className="menu-navigation__icon"
                />
                Order history
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
