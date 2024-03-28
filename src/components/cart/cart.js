import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  const cartItems = cartElements.map((item, index) => (
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
              src={item.imageUrl}
              alt={item.title}
              style={{ width: "130px", height: "130px"}}
            />
          </Col>
          <Col md={2}>
            <p>{item.title}</p>
          </Col>

          <Col md={2}>
            <p style={{ marginRight: "10px" }}>{item.price}</p>
          </Col>
          <Col md={1}>
            <p>{item.quantity}</p>
          </Col>
          <Col md={2}>
            <Button variant="danger">Remove</Button>
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
        {cartItems}
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
