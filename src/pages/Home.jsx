import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { getAllProducts } from "../api/products.js";
import "./Home.css";

function Home() {
  const [featured, setFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadFeatured() {
      try {
        const results = await getAllProducts(4);
        if (isMounted) setFeatured(results);
      } catch (err) {
        console.error("Could not load featured products", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadFeatured();
    return () => {
      isMounted = false;
    };
  }, []);

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

        {isLoading && <p className="section-placeholder">Loading featured picks...</p>}

        {!isLoading && (
          <div className="featured-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
