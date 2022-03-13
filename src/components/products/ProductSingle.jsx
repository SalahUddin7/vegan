import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import allFoodItems from '../../data/allFoodItems.json';

const ProductSingle = () => {
  const Para = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const filtered = allFoodItems.filter((prod) => {
      return prod.id == Para.id;
    });
    console.log(filtered);
    if (filtered.length) {
      setProduct(filtered[0]);
    }
  }, []);

  return (
    <div className="individual-item-display">
      <h2>Item Details</h2>

      {product !== null && (
        <div>
          <p>
            <img src={product.imageURL} style={{ width: 'auto' }} alt="" />
          </p>
          <h1 className="titleSingleItems">{product.title}</h1>

          <h4 className="SingleItemsIngredients">List of Ingredients:</h4>
          {product.ingredients.map((ingred) => (
            <span> {ingred},</span>
          ))}

          <h4 className="SingleItemsIngredients">Nutrition Value</h4>
          {product.nutrition_facts.map((nutrition) => (
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

          <Link to={`/Products/`}>
            <button className="btn">Go Back </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductSingle;
