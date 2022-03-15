import { Link } from "react-router-dom";
import MainLogo from "../../assets/navlogo.jpg";

// Nesting -1
// Although the component is not over 50 lines of code, this clearly can be optimized to look flatter (less nesting indentations and less lines of code)
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
            <img
              className="logo-img"
              src={MainLogo}
              alt="This is the Logo of this page which is Brocolli"
            />
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
