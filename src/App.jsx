import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    const newData = [...cart, { ...item, quantity: 1 }];
    setCart(newData);
    localStorage.setItem("cart", JSON.stringify(newData));
  }

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
        />
      </div>
    </>
  );
}

export default App;
