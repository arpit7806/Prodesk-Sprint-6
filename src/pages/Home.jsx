import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <span className="hero-eyebrow">New Drop</span>
        <h1 className="hero-title">Gear up. Check out. Move on.</h1>
        <p className="hero-subtitle">
          Browse the full catalog and add what you need to your cart —
          no reloads, no waiting around.
        </p>
        <Link to="/shop" className="hero-cta">
          Browse the shop
        </Link>
      </section>

      <section className="featured-section">
        <h2 className="section-heading">Featured right now</h2>
        <p className="section-placeholder">
          Featured products are loading in next — hang tight.
        </p>
      </section>
    </div>
  );
}

export default Home;
