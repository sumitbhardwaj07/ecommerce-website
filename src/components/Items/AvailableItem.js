import React from "react";
import { useCart } from "../store/cartContext";
import { Button, Card, Col } from "react-bootstrap";


const AvailableItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Col md={6} className="mb-4">
      <Card className="p-4  border-0">
        <Card.Title className="text-center mb-3">{product.title}</Card.Title>
        <div className="text-center mb-3">
          <Card.Img
            variant="top"
            src={product.imageUrl}
            className="img-fluid"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
        <Card.Body>
          <Card.Text className="text-center mb-3">
            Price: ${product.price}
            <Button variant="primary" className="align-self-end" onClick={() => addToCart(product)}>
              ADD TO CART
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AvailableItem;
