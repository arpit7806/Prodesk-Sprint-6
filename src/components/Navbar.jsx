import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useCart();
  const count = cartCount();

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        SHOPFRONT
      </Link>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>

      <div className="navbar-cart">
        <span className="cart-icon">🛒</span>
        {count > 0 && (
          <span key={count} className="cart-badge">
            {count}
          </span>
        )}
      </div>
    </header>
  );
}

export default Navbar;
