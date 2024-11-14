import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [caunt, setCaunt] = useState(false);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function handleClick() {
    setCaunt(true);
  }

  return (
    <>
      <div className="container">
        <Home
          addToCart={addToCart}
          cartItems1={cartItems}
          cartItems={cartItems.length}
          handleClick={handleClick}
          caunt={caunt}
        />
      </div>
    </>
  );
}

export default App;
