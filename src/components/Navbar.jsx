import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  const count = cartCount();

  return (
    <header className="navbar">
      <div className="navbar-side navbar-left">
        <Link to="/">Home</Link>
      </div>

      <Link to="/" className="navbar-logo">
        SHOPFRONT
      </Link>

      <div className="navbar-side navbar-right">
        <Link to="/shop">Shop</Link>
        <div className="navbar-cart">
          <span className="cart-icon">🛒</span>
          {count > 0 && (
            <span key={count} className="cart-badge">
              {count}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
