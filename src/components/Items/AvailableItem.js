import React from "react";
import { useCart } from "../store/cartContext";
// eslint-disable-next-line
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AvailableItem = ({ product, index }) => {
  const { addToCart } = useCart();

  return (
    <Col md={6} className="mb-4">
      <Card className="p-4  border-2">
        <Card.Title className="text-center mb-3">{product.title}</Card.Title>
        <div className="text-center mb-3">
          <Link to={`/product/${index}`}>
            <Card.Img
              variant="top"
              src={product.imageUrl[0]}
              className="img-fluid"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
          </Link>
        </div>
        <Card.Body>
          <Card.Text className="text-center mb-3">
            Price: ${product.price} {' '}
            <Button
              variant="primary"
              className="align-self-end"
              onClick={(e) => addToCart(product)}
            >
              ADD TO CART
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AvailableItem;
