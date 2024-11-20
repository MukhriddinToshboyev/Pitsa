import "./Account.css";

import { useState } from "react";

function Account() {
  const [card, setCard] = useState("credit-card");

  return (
    <div className="account-container">
      <div className="account_order"></div>
    </div>
  );
}

export default Account;
