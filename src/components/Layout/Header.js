import {  Button, Container, Nav, Navbar } from "react-bootstrap";
import { useCart } from "../store/cartContext";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const { cartItems } = useCart();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container className="justify-content-center">
          
          <Nav >
            <Nav.Link href="/home" className="me-5">HOME</Nav.Link>
            <Nav.Link href="/store" className="me-5">STORE</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
          
        </Container>
        <Button variant="outline-info" onClick={props.show} style={{ color: "white", position: "absolute", top: "10px", right: "60px" }}>cart({cartItems.length})</Button>
      </Navbar>
      
      <div className="mt-1 bg-secondary text-white py-4 text-center">
        <h1 className="display-2 font-custom">The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
