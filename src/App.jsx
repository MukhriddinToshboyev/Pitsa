import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [cart, setCart] = useState([]);
  //
  function handleAddToCart(item) {
    const newData = [...cart, { ...item, quantity: 1 }];
    setCart(newData);
    localStorage.setItem("cart", JSON.stringify(newData));
  }
  function handleDeleteFromCart(order) {
    const filteredData = cart.filter((item) => item.id !== order.id);
    setCart(filteredData);
    localStorage.setItem("cart", JSON.stringify(filteredData));
  }

  const handleQuantityIncrement = (obj) => {
    if (obj.quantity === 10) {
      return;
    }

    const modifiedFood = { ...obj, quantity: obj.quantity + 1 };

    const newCart = cart.map((item) => {
      return item.id === obj.id ? modifiedFood : item;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));

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
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("cart"));
    if (savedData) {
      setCart(savedData);
    }
  }, []);

  return (
    <>
      <div className="container">
        <Home
          handleDeleteFromCart={handleDeleteFromCart}
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
