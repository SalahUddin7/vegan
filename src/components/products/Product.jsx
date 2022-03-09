import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductData } from '../../data/product-data';

const Product = () => {
  const [products, setProducts] = useState(getProductData);

  return (
    <div className="product-area-full">
      <h2>All PRODUCTS </h2> <br />
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
            <h3>{mainproduct.description}</h3>
            <p className="product-button">
              {/* 1. THIS I need to understand*/}
              <Link to={`/products/${mainproduct.id}`}>
                View {mainproduct.title}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
