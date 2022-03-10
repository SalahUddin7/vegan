import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />

      <div className="HomePage">
        {/* CONTAINER A: MAIN DISH */}
        <section className="flex-containerA">
          <div className="flex-item-left">
            <img src="Homepage-images/main-dish.jpg" alt="" />
          </div>
          <div className="flex-item-right main-page--section-text">
            <div>
              {' '}
              Text AAA dolor nesciunt porro, autem omnis! Text A dolor nesciunt
              porro, autem omnis! Text A dolor nesciunt porro, autem omnis!
            </div>
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
            Text B: Text A dolor nesciunt porro, autem omnis! Text A dolor
            nesciunt porro, autem omnis! Text A dolor nesciunt porro, autem
            omnis!
            <button>
              <Link to="/DessertProduct"> View Dessert Items</Link>
            </button>
          </div>
          <div className="flex-item-left">
            <img src="Homepage-images/main-desserts.jpg" alt="" />
          </div>
        </section>

        {/* CONTAINER C: MAIN DRINKS */}
        <section className="flex-containerA">
          <div className="flex-item-left">
            <img src="Homepage-images/main-drinks.jpg" alt="" />
          </div>
          <div className="flex-item-right main-page--section-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem cum dolorem ratione, ipsam architecto qui iste facere
            aspernatur doloremque modi dolore atque, est dolorum nemo nostrum
            quaerat sapiente laudantium consequuntur!
            <div>
              <button>
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
