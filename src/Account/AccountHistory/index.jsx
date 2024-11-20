import "./AccountHistory.css";

function AccountHistory() {
  return (
    <div className="history-container">
      <div className="history-order">
        <header className="history-header">
          <h2 className="history-header__text"> Orders history</h2>
        </header>
        <nav className="history-navigation">
          <ul className="history-navigation__items">
            <li className="history-navigation__item orders-one">
              <a href="#">
                Orders #34562
                <p className="history-navigation__item-text">
                  Tuesday, 2 Feb 2021
                </p>
              </a>
            </li>
            <li className="history-navigation__item">
              <a href="#">
                Orders #34561
                <p className="history-navigation__item-text">
                  Monday, 1 Feb 2021
                </p>
              </a>
            </li>
            <li className="history-navigation__item">
              <a href="#">
                Orders #34560
                <p className="history-navigation__item-text">
                  Sanday, 31 Jan 2021
                </p>
              </a>
            </li>
            <li className="history-navigation__item">
              <a href="#">
                Orders #34559
                <p className="history-navigation__item-text">
                  Friday, 29 Jan 2021
                </p>
              </a>
            </li>
            <li className="history-navigation__item">
              <a href="#">
                Orders #34558
                <p className="history-navigation__item-text">
                  Wednesday, 27 Jan 2021
                </p>
              </a>
            </li>
            <li className="history-navigation__item">
              <a href="#">
                Orders #34557
                <p className="history-navigation__item-text">
                  Saturday, 23 Jan 2021
                </p>
              </a>
            </li>
            <li className="history-navigation__item">
              <a href="#">
                Orders #34556
                <p className="history-navigation__item-text">
                  Wednesday, 20 Jan 2021
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AccountHistory;
