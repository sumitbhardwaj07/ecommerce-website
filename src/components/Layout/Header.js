// eslint-disable-next-line
import {  Button, Container, Nav, Navbar } from "react-bootstrap";
import { useCart } from "../store/cartContext";
import { useContext } from "react";
import AuthContext from "../store/authContext";


const Header = (props) => {
  const { cartItems } = useCart();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () =>{
    authCtx.logout();
  }
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container className="justify-content-center">
          
          <Nav >
            {isLoggedIn && <Nav.Link href="/home" className="me-5">HOME</Nav.Link>}
            {isLoggedIn && <Nav.Link href="/store" className="me-5">STORE</Nav.Link>}
            {isLoggedIn && <Nav.Link href="/about" className="me-5">ABOUT</Nav.Link>}
            {isLoggedIn && <Nav.Link href="/contactus" className="me-5">Contact us</Nav.Link>}
            {!isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
            {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
          </Nav>
          
        </Container>
        {isLoggedIn && <Button variant="outline-info" onClick={props.show} style={{ color: "white", position: "absolute", top: "10px", right: "60px" }}>cart({cartItems.length})</Button>}
      </Navbar>
      
      <div className="mt-1 bg-secondary text-white py-4 text-center">
        <h1 className="display-2 font-custom">𝓠𝓾𝓲𝓬𝓴 𝓒𝓪𝓻𝓽</h1>
      </div>
    </div>
  );
};

export default Header;
