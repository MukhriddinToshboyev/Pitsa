import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [cart, setCart] = useState([]);

  // objectga quantity key qo'shish
  function handleAddToCart(newItem) {
    setCart((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Agar element allaqachon mavjud bo'lsa, sonini oshiramiz
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Agar element yangi bo'lsa, uni qo'shamiz
        const newData = [...prevItems, { ...newItem, quantity: 1 }];

        // localStorage ga malumot saqlash
        localStorage.setItem("cart", JSON.stringify(newData));

        return newData;
      }
    });
  }

  // const handleAddToCart = (newItem) => {
  //   setCart((prevItems) => {
  //     const existingItem = prevItems.find((item) => item.id === newItem.id);

  //     if (existingItem) {
  //       // Agar element allaqachon mavjud bo'lsa, sonini oshiramiz
  //       return prevItems.map((item) =>
  //         item.id === newItem.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       // Agar element yangi bo'lsa, uni qo'shamiz
  //       return [...prevItems, { ...newItem, quantity: 1 }];
  //     }
  //   });
  // };

  // localStorage dagi ma'lumotlarni o'chirish tugmasi
  // function handleDeleteFromCart(order) {
  //   const filteredData = cart.filter((item) => item.id !== order.id);
  //   setCart(filteredData);
  //   localStorage.setItem("cart", JSON.stringify(filteredData));
  // }

  // card elementlar sonini oshirish
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

  // card elementlar sonini kamaytirish
  const handleQuantityDecrement = (obj) => {
    if (obj.quantity === 1) {
      const filteredData = cart.filter((item) => item.id !== obj.id);
      setCart(filteredData);
      localStorage.setItem("cart", JSON.stringify(filteredData));
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
          handleAddToCart={handleAddToCart}
          cartLength={cart.length}
          cart={cart}
          handleQuantityDecrement={handleQuantityDecrement}
          handleQuantityIncrement={handleQuantityIncrement}
        />
      </div>
    </>
  );
}

export default App;
