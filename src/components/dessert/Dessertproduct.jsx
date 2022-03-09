import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductDataDessert } from '../../data/product-data-dessert';

const Dessertproduct = () => {
  const [products, setProducts] = useState(getProductDataDessert);

  return (
    <div className="product-area-full">
      <h2>Desserts </h2>
      <p>
        Cocktails use fun, natural ingredients like maple, beets and watermelon
        to add color and flavor and are completely free of animal ingredients
        like milk, eggs and honey that are sometimes found in cocktails
      </p>
      <hr />
      {/* <Link to="/Products/12">Product-XYZ</Link> */}
      {/* map((element, indexes) =>  */}
      <div className="product-area">
        {products.map((mainproduct, index) => (
          <div key={index} className="product-single">
            <p>
              <img
                src={mainproduct.image}
                style={{ width: 'auto', height: 100 }}
                alt=""
              />
            </p>
            <h3>{mainproduct.title}</h3>
            <p>{mainproduct.description}</p>
            <p className="product-button">
              <Link to={`/DessertProduct/${mainproduct.id}`}>
                View {mainproduct.title}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dessertproduct;
