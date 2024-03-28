import { Button, Container, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HOME</Navbar.Brand>
          <Navbar.Brand href="#store">STORE</Navbar.Brand>
          <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
          <Button variant="outline-info" onClick={props.show}>cart</Button>
        </Container>
      </Navbar>
      <div className="bg-secondary text-white py-4 text-center">
        <h1 className="display-2 font-custom">The Generics</h1>
      </div>
    </>
  );
};

export default Header;
