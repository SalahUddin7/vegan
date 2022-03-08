import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>This is Home Page b</h2>

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
  );
};

export default Home;
