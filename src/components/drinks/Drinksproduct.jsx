//NPM Packages
import { Link } from 'react-router-dom';
import allFoodItems from '../../data/allFoodItems.json';

const Drinksproduct = () => {
  //Local State
  const filterDrinks = allFoodItems.filter((product) => {
    return product.category === 'drinks';
  });

  return (
    <div className="product-area-full">
      <h2 className="Catagory-title">Drinks </h2>
      <p>
        Drinks use fun, natural ingredients like maple, beets and watermelon to
        add color and flavor and are completely free of animal ingredients like
        milk, eggs and honey that are sometimes found in cocktails
      </p>

      <div className="product-area">
        {filterDrinks.map((mainproduct, index) => (
          <div key={index} className="product-single">
            <p>
              <img
                src={mainproduct.imageURL}
                style={{ width: 'auto', height: 100 }}
                alt=""
              />
            </p>
            <h3>Drinks: {mainproduct.title}</h3>
            <p>{mainproduct.description}</p>
            <p className="product-button">
              <Link to={`/Drinksproduct/${mainproduct.id}`}>
                View {mainproduct.title}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinksproduct;
