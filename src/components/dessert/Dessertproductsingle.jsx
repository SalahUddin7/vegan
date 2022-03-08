import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProductDataDessert } from '../data/product-data-dessert';

const Dessertproductsingle = () => {
  const Para = useParams();
  console.log(Para.id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const filtered = getProductDataDessert().filter(
      (prod) => prod.id == Para.id
    );
    console.log(filtered);
    if (filtered.length) {
      setProduct(filtered[0]);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Product Details</h2>
      {product !== null && (
        <div>
          <p>
            <img src={product.image} style={{ width: 'auto' }} alt="" />
          </p>
          <h3>{product.title}</h3>
          <h3>{product.price} BDT</h3>
          <div>Vitamin {product.vitamin}</div>
          <div>FAAAat{product.fat}</div>
          <div>Salt{product.salt}</div>
          {product.nutritionFacts.map((nutrition) => (
            <div className="NutritionFacts">
              <p>{nutrition.label}</p>
              <p></p>
              <p>{nutrition.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dessertproductsingle;
