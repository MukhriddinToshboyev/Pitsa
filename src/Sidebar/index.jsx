import "./Sidebar.css";

import SidebarIcon1 from "../assets/Sidebar-icons8_Menu_48px 1 (1).svg";
import SidebarIcon2 from "../assets/Sidebar-Group 4730266.svg";
import SidebarIcon3 from "../assets/Sidebar-Discount.svg";
import SidebarIcon4 from "../assets/Sidebar-Vector.svg";
import SidebarIcon5 from "../assets/Sidebar-Message.svg";
import SidebarIcon6 from "../assets/Sidebar-Notification.svg";
import SidebarIcon7 from "../assets/Sidebar-cart-outline 2.svg";
import SidebarIcon8 from "../assets/Sidebar-icons8_account_48px_2 1.svg";
import { useState } from "react";

function Sidebar({
  handleHSHowCart,
  handleAccountCard,
  handleMenuCart,
  cartLength,
}) {
  const [activeSidebar, setActiveSidebar] = useState("home");

  return (
    <div className="sidebar-container">
      <ul className="sidebar-menu">
        <div onClick={handleMenuCart}>
          <li
            onClick={() => setActiveSidebar("menu")}
            className={activeSidebar === "menu" ? "sidebar-menu__item" : ""}
          >
            <a
              className={activeSidebar === "menu" ? "sidebar-menu__link" : ""}
              href="#icon1"
            >
              <img src={SidebarIcon1} alt="icon1" className="icon" />
            </a>
          </li>
        </div>
        <li
          onClick={() => setActiveSidebar("home")}
          className={activeSidebar === "home" ? "sidebar-menu__item" : ""}
        >
          <a
            className={activeSidebar === "home" ? "sidebar-menu__link" : ""}
            href="#icon2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M9.13263 0.945681C10.7368 -0.265241 12.9853 -0.313246 14.6387 0.801667L14.8421 0.945681L22.5335 6.79147C23.3798 7.41433 23.8989 8.33963 23.9874 9.34653L24 9.58775V19.3195C24 21.8278 21.9145 23.868 19.3011 24H16.7874C15.5861 23.9772 14.6147 23.0891 14.5263 21.973L14.5137 21.8038V18.3726C14.5137 17.9994 14.2219 17.6886 13.8316 17.6274L13.7179 17.6154H10.344C9.94105 17.6274 9.61263 17.9034 9.56211 18.2634L9.54947 18.3726V21.793C9.54947 21.8638 9.53558 21.9478 9.52421 22.0078L9.51158 22.033L9.49768 22.1158C9.34737 23.1371 8.46316 23.916 7.36421 23.9892L7.2 24H4.93895C2.29895 24 0.138947 22.033 0 19.5596V9.58775C0.0113684 8.56645 0.48 7.61835 1.26316 6.95829L9.13263 0.945681ZM13.7432 2.25381C12.7832 1.52174 11.4189 1.48694 10.4084 2.1218L10.2177 2.25381L2.53768 8.1356C2.09684 8.44644 1.83158 8.91448 1.76842 9.40653L1.75453 9.59855V19.3195C1.75453 20.9157 3.06821 22.2238 4.73684 22.3198H7.2C7.47789 22.3198 7.71789 22.141 7.75453 21.889L7.78105 21.673L7.79368 21.6118V18.3726C7.79368 17.0885 8.82947 16.0444 10.1558 15.9472H13.7179C15.0682 15.9472 16.1672 16.9325 16.2695 18.1926V21.8038C16.2695 22.0558 16.4589 22.273 16.7116 22.3198H19.0598C20.7524 22.3198 22.1293 21.0849 22.2303 19.5116L22.2442 19.3195V9.59855C22.2303 9.0837 22.0042 8.60245 21.6126 8.24362L21.4484 8.1104L13.7432 2.25381Z"
                fill="#EA7C69"
                className={activeSidebar === "home" ? "circle" : ""}
              />
            </svg>
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("discount")}
          className={activeSidebar === "discount" ? "sidebar-menu__item" : ""}
        >
          <a
            className={activeSidebar === "discount" ? "sidebar-menu__link" : ""}
            href="#icon3"
          >
            <img src={SidebarIcon3} alt="icon3" className="icon" />
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("vector")}
          className={activeSidebar === "vector" ? "sidebar-menu__item" : ""}
        >
          <a
            className={activeSidebar === "vector" ? "sidebar-menu__link" : ""}
            href="#icon4"
          >
            <img src={SidebarIcon4} alt="icon4" className="icon" />
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("message")}
          className={activeSidebar === "message" ? "sidebar-menu__item" : ""}
        >
          <a
            className={activeSidebar === "message" ? "sidebar-menu__link" : ""}
            href="#icon5"
          >
            <img src={SidebarIcon5} alt="icon5" className="icon" />
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("notification")}
          className={
            activeSidebar === "notification" ? "sidebar-menu__item" : ""
          }
        >
          <a
            className={
              activeSidebar === "notification" ? "sidebar-menu__link" : ""
            }
            href="#icon6"
          >
            <img src={SidebarIcon6} alt="icon6" className="icon" />
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("card-outline")}
          className={
            activeSidebar === "card-outline" ? "sidebar-menu__item" : ""
          }
        >
          <a
            className={
              activeSidebar === "card-outline" ? "sidebar-menu__link" : ""
            }
            href="#cart"
          >
            <button onClick={handleHSHowCart} className="sidebar-menu__button">
              <img src={SidebarIcon7} alt="cart" className="icon" />
              {cartLength > 0 && (
                <span className="cart-count">{cartLength}</span>
              )}
            </button>
          </a>
        </li>
        <li
          onClick={() => setActiveSidebar("account")}
          className={activeSidebar === "account" ? "sidebar-menu__item" : ""}
        >
          <a
            className={activeSidebar === "account" ? "sidebar-menu__link" : ""}
            href="#account"
          >
            <button
              onClick={handleAccountCard}
              className="sidebar-menu__button"
            >
              <img src={SidebarIcon8} alt="account" className="icon" />
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
