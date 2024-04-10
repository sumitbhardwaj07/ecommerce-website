import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useCart } from "../store/cartContext";


  
const Cart = (props) => {

  const { cartItems, removeFromCart } = useCart();

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const cartItemsList = cartItems.map((item, index) => (
    <div
      key={index}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <Container>
        <Row>
          <Col md={4}>
          <img
              src={item.product.imageUrl}
              alt={item.product.title}
              style={{ width: "130px", height: "130px"}}
            />
          </Col>
          <Col md={2}>
            <p>{item.product.title}</p>
          </Col>

          <Col md={2}>
            <p style={{ marginRight: "10px" }}>{item.product.price}</p>
          </Col>
          <Col md={1}>
            <p>{item.quantity}</p>
          </Col>
          <Col md={2}>
            <Button variant="danger" onClick={() => handleRemove(index)}>Remove</Button>
          </Col>
        </Row>
      </Container>
    </div>
  ));

  return (
    <Modal show={props.show} onHide={props.onClose} >
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={6} className="text-center">
              ITEM
            </Col>
            <Col md={2}>Price</Col>
            <Col md={4}>Quantity</Col>
          </Row>
        </Container>
        {cartItemsList}
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
