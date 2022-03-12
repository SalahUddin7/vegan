import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import DishCatagory from '../assets/Homepage-Images/DishCatagory.jpg';
import DessertCatagory from '../assets/Homepage-Images/DessertCatagory.jpg';
import DrinksCatagory from '../assets/Homepage-Images/DrinksCatagory.jpg';

const Home = () => {
  return (
    <div>
      <HeroSection />

      <div className="HomePage">
        {/* CONTAINER A: MAIN DISH */}
        <section className="flex-containerA">
          <div className="flex-item-left">
            <img src={DishCatagory} alt="" />
          </div>
          <div className="flex-item-right main-page--section-text">
            <div>Best Vegan dishesh in Stockhom cooked in homemade style.</div>

            <div>
              {' '}
              <button className="btn">
                <Link to="/products">View Main Dish Product. </Link>
              </button>
            </div>
          </div>
        </section>

        {/* CONTAINER B: MAIN DESSERTS */}
        <section className="flex-containerA">
          <div className="flex-item-right main-page--section-text">
            Dessert once you eat -you will remember rest of your life
            <button className="btn">
              <Link to="/DessertProduct"> View Dessert Items</Link>
            </button>
          </div>
          <div className="flex-item-left">
            <img src={DessertCatagory} alt="" />
          </div>
        </section>

        {/* CONTAINER C: MAIN DRINKS */}
        <section className="flex-containerA">
          <div className="flex-item-left">
            <img src={DrinksCatagory} alt="" />
          </div>
          <div className="flex-item-right main-page--section-text">
            Drinks which will bring peace of mind! Just enjoy!
            <div>
              <button className="btn">
                <Link to="/DrinksProduct"> View Drinks Items</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
