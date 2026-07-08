import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api/products.js";
import "./ProductView.css";

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setLoadError(null);

    async function loadProduct() {
      try {
        const result = await getProductById(id);
        if (isMounted) setProduct(result);
      } catch (err) {
        if (isMounted) setLoadError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadProduct();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return (
      <div className="product-view">
        <p className="product-status">Loading product...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="product-view">
        <p className="product-status product-error">{loadError}</p>
        <Link to="/shop" className="back-link">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="product-view">
      <Link to="/shop" className="back-link">
        ← Back to shop
      </Link>

      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <span className="product-detail-category">{product.category}</span>
          <h1 className="product-detail-title">{product.title}</h1>
          <p className="product-detail-description">{product.description}</p>

          <div className="product-detail-meta">
            <span className="product-detail-price">${product.price}</span>
            <span className="product-detail-rating">★ {product.rating}</span>
            <span className="product-detail-stock">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>

          <button className="add-to-cart-btn" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
