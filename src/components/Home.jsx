import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <h2>This is Home Page d</h2>

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
