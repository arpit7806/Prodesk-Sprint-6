import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { getAllProducts } from "../api/products.js";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        const results = await getAllProducts(30);
        if (isMounted) setProducts(results);
      } catch (err) {
        if (isMounted) setLoadError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop</h1>

      {isLoading && <p className="shop-status">Loading products...</p>}
      {loadError && <p className="shop-status shop-error">{loadError}</p>}

      {!isLoading && !loadError && (
        <div className="shop-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
