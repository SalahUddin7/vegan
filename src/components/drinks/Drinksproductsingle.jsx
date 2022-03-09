import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProductDataDrinks } from '../../data/product-data-drinks';

const Drinksproductsingle = () => {
  const Para = useParams();
  console.log(Para.id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const filtered = getProductDataDrinks().filter(
      (prod) => prod.id == Para.id
    );
    console.log(filtered);
    if (filtered.length) {
      setProduct(filtered[0]);
    }
  }, []);

  return (
    <div className="individual-item-display">
      <h2>Item Details of Drinks</h2>

      {product !== null && (
        <div>
          <p>
            <img src={product.image} style={{ width: 'auto' }} alt="" />
          </p>
          <h3>{product.title}</h3>

          <h4>Ingredients: {product.ingredients}</h4>

          {/* Nutrition */}
          {product.nutritionFacts.map((nutrition) => (
            <div className="NutritionFacts">
              <p>{nutrition.label}</p>

              <p>{nutrition.value}%</p>
            </div>
          ))}
          <p>
            The % Daily Value tells you how much a nutrient in a serving food
            contributes to a daily die. 2000 calories a day is used for general
            nutrition advice.
          </p>
        </div>
      )}
    </div>
  );
};

export default Drinksproductsingle;
