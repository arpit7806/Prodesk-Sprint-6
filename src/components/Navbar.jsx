import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
      </div>
    </header>
  );
}

export default Navbar;
