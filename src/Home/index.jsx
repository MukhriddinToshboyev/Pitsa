import "./style.css";

import HomeImage1 from "../assets/Home-Images1.png";
import HomeImage2 from "../assets/Home-Images2.png";
import HomeImage3 from "../assets/Home-Images3.png";
import HomeImage4 from "../assets/Home-Images4.png";

import HomeIcon1 from "../assets/icons1_Menu.png";
import HomeIcon2 from "../assets/icons2-Home.png";
import HomeIcon3 from "../assets/icons3-Discount.png";
import HomeIcon4 from "../assets/icons4-Graph.png";
import HomeIcon5 from "../assets/icons5-Message.png";
import HomeIcon6 from "../assets/isons6-Notification.png";
import HomeIcon7 from "../assets/icons7-cart-outline.png";
import HomeIcon8 from "../assets/icons8_account.png";

import HomeIcon9 from "../assets/Market-icons8_search_50px 1 (2).svg";
import HomeIcon10 from "../assets/Market-icons8_expand_arrow_96px 1.svg";
import Orders from "../Orders";
import { useState } from "react";
import Market from "../Market";

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
  handleAddToCart,
  cartLength,
  cartItems1,
  handleQuantityDecrement,
  handleQuantityIncrement,
  handleHSHowCart,
  showCart,
}) {
  return (
    <div className="container-div">
      <div className="home-container">
        {showCart && (
          <Orders
            handleQuantityDecrement={handleQuantityDecrement}
            handleQuantityIncrement={handleQuantityIncrement}
            cartItems1={cartItems1}
          />
        )}

        <div className="home-icon">
          <img src={HomeIcon1} alt="img" className="home" />
          <div className="home-icon-home">
            <div className="icon-home">
              <img src={HomeIcon2} alt="img" className="home" />
            </div>
          </div>
          <img src={HomeIcon3} alt="img" className="home" />
          <img src={HomeIcon4} alt="img" className="home" />
          <img src={HomeIcon5} alt="img" className="home" />
          <img src={HomeIcon6} alt="img" className="home" />
          <div className="home-icon__market">
            <button onClick={handleHSHowCart}>
              <img src={HomeIcon7} alt="img" className="home" />
            </button>
            {cartLength > 0 && <span className="cart-count">{cartLength}</span>}
          </div>
          <img src={HomeIcon8} alt="img" className="home" />
        </div>

        <div className="home-discreption">
          <header className="home-header">
            <div className="home-header__icon">
              <img src={HomeIcon9} alt="icon" />
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
              <h1 className="home-navigation__text" id="hot">
                Hot Dishes
              </h1>
              <h1 className="home-navigation__text">Cold Dishes</h1>
              <h1 className="home-navigation__text">Soup</h1>
              <h1 className="home-navigation__text">Grill</h1>
              <h1 className="home-navigation__text">Appetizer</h1>
              <h1 className="home-navigation__text">Dessert</h1>
            </div>
            <div className="home-navigation__lines">
              <p className="home-navigation__line_dishes"></p>
            </div>
            <div className="home-navigation__choose">
              <div className="home-navigation__icon">
                <img src={HomeIcon10} alt="icon" />
              </div>
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
    </div>
  );
}

export default Home;
