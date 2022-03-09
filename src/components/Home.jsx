import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />

      <div className="HomePage">
        <div className="flex-containerA">
          <div className="flex-item-left">
            <img src="veganhero.jpg" alt="" />
          </div>
          <div className="flex-item-right">
            Text A Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Libero illo, fugit eos blanditiis et doloribus deleniti rerum nam
            qui vero ipsum consequuntur ut dolor nesciunt porro, autem omnis!
          </div>
        </div>

        <div className="flex-containerB">
          <dir>Text B</dir>
          <div>
            <img src="veganhero.jpg" alt="" />
          </div>
        </div>

        <div className="flex-containerA">
          <div>
            <img src="veganhero.jpg" alt="" />
          </div>
          <dir>Text C</dir>
        </div>
      </div>
      <div>
        <h2>This is Home Page e</h2>

        <h2>
          This is Dish Product
          <button>
            {' '}
            <Link to="/products">View Main Dish Product</Link>
          </button>
        </h2>

        <h2>
          This is Dessert Product
          <button>
            {' '}
            <Link to="/DessertProduct"> View Dessert Items</Link>
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Home;
