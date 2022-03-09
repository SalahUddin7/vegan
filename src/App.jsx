import React from 'react';
import './assets/style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dessertproduct from './components/dessert/Dessertproduct';
import Dessertproductsingle from './components/dessert/Dessertproductsingle';
import Drinksproduct from './components/drinks/Drinksproduct';
import Drinksproductsingle from './components/drinks/Drinksproductsingle';

import Product from './components/products/Product';
import ProductSingle from './components/products/ProductSingle';

export default function App() {
  return (
    <BrowserRouter>
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

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Dessertproduct" element={<Dessertproduct />}></Route>
        <Route
          path="/Dessertproduct/:id"
          element={<Dessertproductsingle />}
        ></Route>

        <Route path="/Drinksproduct" element={<Drinksproduct />}></Route>
        <Route
          path="/Drinksproduct/:id"
          element={<Drinksproductsingle />}
        ></Route>

        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:id" element={<ProductSingle />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
