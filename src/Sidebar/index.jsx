import "./Sidebar.css";

import SidebarIcon1 from "../assets/Sidebar-icons8_Menu_48px 1.svg";
import SidebarIcon2 from "../assets/Sidebar-Group 4730266.svg";
import SidebarIcon3 from "../assets/Sidebar-Discount.svg";
import SidebarIcon4 from "../assets/Sidebar-Vector.svg";
import SidebarIcon5 from "../assets/Sidebar-Message.svg";
import SidebarIcon6 from "../assets/Sidebar-Notification.svg";
import SidebarIcon7 from "../assets/Sidebar-cart-outline 2.svg";
import SidebarIcon8 from "../assets/Sidebar-icons8_account_48px_2 1.svg";

function Sidebar({ handleHSHowCart, handleAccountCard, cartLength }) {
  return (
    <div className="sidebar-container">
      <img src={SidebarIcon1} alt="img" className="icon" />
      <div className="sidebar-home">
        <div className="sidebar-home__icon">
          <img src={SidebarIcon2} alt="img" className="icon" />
        </div>
      </div>
      <img src={SidebarIcon3} alt="img" className="icon" />
      <img src={SidebarIcon4} alt="img" className="icon" />
      <img src={SidebarIcon5} alt="img" className="icon" />
      <img src={SidebarIcon6} alt="img" className="icon" />
      <div className="sidebar-market">
        <button onClick={handleHSHowCart} className="sidebar-market__button">
          <img src={SidebarIcon7} alt="img" className="icon" />
        </button>
        {cartLength > 0 && <span className="cart-count">{cartLength}</span>}
      </div>
      <div className="sidebar-market">
        <button onClick={handleAccountCard} className="sidebar-market__button">
          <img src={SidebarIcon8} alt="img" className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
