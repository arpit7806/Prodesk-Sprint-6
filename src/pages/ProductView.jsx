import { useParams } from "react-router-dom";
import "./ProductView.css";

function ProductView() {
  const { id } = useParams();

  return (
    <div className="product-view">
      <p className="product-placeholder">
        Loading details for product #{id}... (real data hooked up next)
      </p>
    </div>
  );
}

export default ProductView;
