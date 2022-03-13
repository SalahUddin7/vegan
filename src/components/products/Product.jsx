//NPM Packages
import { Link } from 'react-router-dom';
import allFoodItems from '../../data/allFoodItems.json';

const Product = () => {
  //Local State
  const filterDishes = allFoodItems.filter((product) => {
    return product.category === 'dishes';
  });

  return (
    <div className="product-area-full">
      <h2 className="Catagory-title">Dishes </h2>
      <p>
        Cocktails use fun, natural ingredients like maple, beets and watermelon
        to add color and flavor and are completely free of animal ingredients
        like milk, eggs and honey that are sometimes found in cocktails
      </p>

      <div className="product-area">
        {filterDishes.map((mainproduct, index) => (
          <div key={index} className="product-single">
            <p>
              <img
                src={mainproduct.imageURL}
                style={{ width: 'auto', height: 100 }}
                alt=""
              />
            </p>
            <h3>{mainproduct.title}</h3>
            <p>{mainproduct.description}</p>

            <p className="product-button">
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
