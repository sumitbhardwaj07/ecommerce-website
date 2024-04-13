import { useParams } from "react-router-dom";
import { productsArr } from "../Items/AvailableItems";
// eslint-disable-next-line
import { Button,Row, Col, Carousel } from "react-bootstrap";
import { useCart } from "../store/cartContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  console.log(productId);

  try {
    const product = productsArr[productId];

    if (!product) {
      throw new Error("Product not found");
    }

    return (
      <div style={{ backgroundColor: "white" }}>
        <Carousel slide={false}>
          {product.imageUrl.map((image, index) => (
            <Carousel.Item key={index}>
              <Row>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={product.title}
                    style={{ maxWidth: "500px", maxHeight: "500px" }}
                  />
                </Col>
                <Col md={6}>
                  <div>
                    <h2>{product.title}</h2>
                    <h4>Price: Rs{product.price}</h4>
                    <Button variant="primary" onClick={() => addToCart(product)}>ADD TO CART</Button>
                    <h4>Specifications:</h4>
                    <ul>
                      {product.specifications.map((spec, index) => (
                        <li key={index}>
                          <strong>{spec.label}:</strong> {spec.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  } catch (error) {
    console.error("Error rendering product details:", error);
    return <div>Error rendering product details. Please try again later.</div>;
  }
};

export default ProductDetails;
