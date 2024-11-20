import "./Menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-order">
        <header className="menu-header">
          <h2 className="menu-header__text"> Functions</h2>
        </header>
        <nav className="menu-navigation">
          <ul className="menu-navigation__items">
            <li className="menu-navigation__item orders-one">
              <a href="#">Information</a>
            </li>
            <li className="menu-navigation__item">
              <a href="#">Language</a>
            </li>
            <li className="menu-navigation__item">
              <a href="#">Order history</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
