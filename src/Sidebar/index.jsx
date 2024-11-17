import "./Sidebar.css";

import SidebarIcon1 from "../assets/icons1_Menu.png";
import SidebarIcon2 from "../assets/icons2-Home.png";
import SidebarIcon3 from "../assets/icons3-Discount.png";
import SidebarIcon4 from "../assets/icons4-Graph.png";
import SidebarIcon5 from "../assets/icons5-Message.png";
import SidebarIcon6 from "../assets/isons6-Notification.png";
import SidebarIcon7 from "../assets/icons7-cart-outline.png";
import SidebarIcon8 from "../assets/icons8_account.png";

function Sidebar({ handleHSHowCart, cartLength }) {
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
      <img src={SidebarIcon8} alt="img" className="icon" />
    </div>
  );
}

export default Sidebar;
