import "./Information.css";

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
