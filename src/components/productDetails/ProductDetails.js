import { useParams } from "react-router-dom";
import { productsArr } from "../Items/AvailableItems";

const ProductDetails = () => {
  const { productId } = useParams();

  try {
    const product = productsArr[productId]; 

    if (!product) {
      throw new Error("Product not found");
    }

    
    return (
      <div>
        <h2>{product.title}</h2>
        <img src={product.imageUrl} alt={product.title} />
        <p>Price: ${product.price}</p>
        {/* Render reviews */}
      </div>
    );
  } catch (error) {
    console.error("Error rendering product details:", error);
    return <div>Error rendering product details. Please try again later.</div>;
  }
};

export default ProductDetails;
