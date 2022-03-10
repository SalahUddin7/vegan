import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/products">Dish</Link>
        </li>
        <li>
          <Link to="/Dessertproduct">Dessert </Link>
        </li>

        <li>
          <Link to="/">
            <img className="logo-img" src="navlogo.jpg" />
          </Link>
        </li>
        <li>
          <Link to="/Drinksproduct">Drinks</Link>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
