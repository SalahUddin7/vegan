import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Dish</Link>
        </li>
        <li>
          <Link to="/Dessertproduct">Dessert </Link>
        </li>
        <li>
          <Link to="/Drinksproduct">Drinks</Link>
        </li>
      </ul>
    </div>
  );
}
