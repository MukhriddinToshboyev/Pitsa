import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function handleAddToCart(item) {
    setCart([...cart, { ...item, quantity: 1 }]);
  }
  const handleHSHowCart = () => {
    setShowCart(true);
  };

  const handleQuantityIncrement = (obj) => {
    if (obj.quantity === 10) {
      return;
    }

    const modifiedFood = { ...obj, quantity: obj.quantity + 1 };

    const newCart = cart.map((item) => {
      return item.id === obj.id ? modifiedFood : item;
    });

    setCart(newCart);
  };
  const handleQuantityDecrement = (obj) => {
    if (obj.quantity === 1) {
      return;
    }
    const modifiedFood = { ...obj, quantity: obj.quantity - 1 };

    const newCart = cart.map((item) => {
      return item.id === obj.id ? modifiedFood : item;
    });

    setCart(newCart);
  };

  return (
    <>
      <div className="container">
        <Home
          handleAddToCart={handleAddToCart}
          cartLength={cart.length}
          cartItems1={cart}
          handleQuantityDecrement={handleQuantityDecrement}
          handleQuantityIncrement={handleQuantityIncrement}
          handleHSHowCart={handleHSHowCart}
          showCart={showCart}
        />
      </div>
    </>
  );
}

export default App;
