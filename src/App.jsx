import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [caunt, setCaunt] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (value) => {
    setCartItems([...cartItems, { ...value, quantity: 1 }]);
    console.log(setCartItems);
    
  };

  const handleHSHowCart = () => {
    setShowCart(!showCart);
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



  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (value) => {
    setCart([...cart, { ...value, quantity: 1 }]);
  };

  const handleHSHowCart = () => {
    setShowCart(!showCart);
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
      <Header cartlength={cart.length} handleHSHowCart={handleHSHowCart} />
      <div
        style={{
          display: "flex",
          flexWrap: "no-wrap",
          height: "100vh",
          gap: "20px",
        }}
      >
        {data?.map((item) => (
          <FoodCard
            key={item.id}
            food={item}
            handleAddToCart={handleAddToCart}
          />
        ))}

        {showCart && (
          <Cart
            onCloseCart={handleHSHowCart}
            cart={cart}
            handleQuantityIncrement={handleQuantityIncrement}
            handleQuantityDecrement={handleQuantityDecrement}
          />
        )}
      </div>
    </>
  );
};