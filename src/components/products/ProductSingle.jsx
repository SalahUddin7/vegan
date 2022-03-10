import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProductData } from '../../data/product-data';

const ProductSingle = () => {
  const Para = useParams();
  console.log(Para.id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const filtered = getProductData().filter((prod) => prod.id === Para.id);
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
        </div>
      )}
    </div>
  );
};

export default ProductSingle;
