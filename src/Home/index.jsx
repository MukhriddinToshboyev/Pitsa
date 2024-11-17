import "./style.css";

import HomeImage1 from "../assets/Home-Images1.png";
import HomeImage2 from "../assets/Home-Images2.png";
import HomeImage3 from "../assets/Home-Images3.png";
import HomeImage4 from "../assets/Home-Images4.png";

import HomeIcon1 from "../assets/Market-icons8_search_50px 1 (2).svg";

import { useState } from "react";
import Card from "../Card";
import Sidebar from "../Sidebar";

const foods = [
  {
    id: 1,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    bowls: 20,
    image: HomeImage1,
  },
  {
    id: 2,
    name: "Salted Pasta with mushroom sauce",
    price: 2.69,
    bowls: 11,
    image: HomeImage2,
  },
  {
    id: 3,
    name: "Beef dumpling in hot and sour soup",
    price: 2.99,
    bowls: 16,
    image: HomeImage3,
  },
  {
    id: 4,
    name: "Healthy noodle with spinach leaf",
    price: 3.29,
    bowls: 22,
    image: HomeImage4,
  },
  {
    id: 5,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    bowls: 20,
    image: HomeImage1,
  },
  {
    id: 6,
    name: "Salted Pasta with mushroom sauce",
    price: 2.69,
    bowls: 11,
    image: HomeImage2,
  },
  {
    id: 7,
    name: "Beef dumpling in hot and sour soup",
    price: 2.99,
    bowls: 16,
    image: HomeImage3,
  },
  {
    id: 8,
    name: "Healthy noodle with spinach leaf",
    price: 3.29,
    bowls: 22,
    image: HomeImage4,
  },
];

function Home({
  handleDeleteFromCart,
  handleAddToCart,
  cartLength,
  cartItems1,
  handleQuantityDecrement,
  handleQuantityIncrement,
}) {
  const [activeTitle, setActiveTitle] = useState("hot-dishes");

  const [showCart, setShowCart] = useState(false);

  const handleHSHowCart = () => {
    setShowCart(!showCart);
  };
  const handleLogaut = () => {
    setShowCart(false);
  };
  return (
    <div className="home-container">
      {showCart && (
        <Card
          handleDeleteFromCart={handleDeleteFromCart}
          handleLogaut={handleLogaut}
          handleQuantityDecrement={handleQuantityDecrement}
          handleQuantityIncrement={handleQuantityIncrement}
          cartItems1={cartItems1}
        />
      )}

      <Sidebar cartLength={cartLength} handleHSHowCart={handleHSHowCart} />

      <div className="home-discreption">
        <header className="home-header">
          <div className="home-header__icon">
            <img src={HomeIcon1} alt="icon" />
          </div>
          <div className="home-resto">
            <h1 className="home-resto__name">Jaegar Resto</h1>
            <p className="home-resto__date">Tuesday, 2 Feb 2021</p>
          </div>
          <form className="home-search">
            <input
              className="home-search__text"
              tabIndex={Text}
              placeholder="Search for food, coffe, etc.."
            />
          </form>
        </header>
        <nav className="home-navigation">
          <div className="home-navigation-items">
            <h1
              onClick={() => setActiveTitle("hot-dishes")}
              className={`home-navigation__text ${
                activeTitle === "hot-dishes" ? "active" : ""
              }`}
            >
              Hot Dishes
            </h1>
            <h1
              onClick={() => setActiveTitle("cold-dishes")}
              className={`home-navigation__text ${
                activeTitle === "cold-dishes" ? "active" : ""
              }`}
            >
              Cold Dishes
            </h1>
            <h1
              onClick={() => setActiveTitle("soup")}
              className={`home-navigation__text ${
                activeTitle === "soup" ? "active" : ""
              }`}
            >
              Soup
            </h1>
            <h1
              onClick={() => setActiveTitle("grill")}
              className={`home-navigation__text ${
                activeTitle === "grill" ? "active" : ""
              }`}
            >
              Grill
            </h1>
            <h1
              onClick={() => setActiveTitle("appetizer")}
              className={`home-navigation__text ${
                activeTitle === "appetizer" ? "active" : ""
              }`}
            >
              Appetizer
            </h1>
            <h1
              onClick={() => setActiveTitle("dessert")}
              className={`home-navigation__text ${
                activeTitle === "dessert" ? "active" : ""
              }`}
            >
              Dessert
            </h1>
          </div>

          <div className="home-navigation__choose">
            <p className="home-navigation__prise">Choose Dishes</p>

            <select
              className="home-navigation__prise__text"
              id="country"
              name="country"
            >
              <option value="australia">Price</option>
              <option value="canada">Name</option>
              <option value="usa">Prise</option>
            </select>
          </div>
        </nav>
        <section className="home-section">
          <div className="home-items">
            {foods.map((food) => (
              <div key={food.id} className="home-item">
                <img src={food.image} alt="img" className="home-item__img" />
                <div className="home-item__details">
                  <h1 className="home-item__name">{food.name}</h1>
                  <p className="home-item__price">${food.price}</p>
                  <p className="home-item__bowls">
                    {food.bowls} Bowls available
                  </p>
                  <button
                    onClick={() => handleAddToCart(food)}
                    className="home-item__button"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
