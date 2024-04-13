import React from "react";
import BandImage from '../../assets/quickcart.png';
// eslint-disable-next-line
import { Col, Container, Image, Row } from "react-bootstrap";
const AboutPage = () => {
  return (
    <Container className="text-center">
        <h2 style={{marginBottom:"5%"}}>ABOUT</h2>
      <Row>
        <Col md="4">
          <Image src={BandImage} height={300} width={300} roundedCircle/>
        </Col>
        <Col md="8">
          <p>
          Welcome to 𝓠𝓾𝓲𝓬𝓴 𝓒𝓪𝓻𝓽! We're more than just an online marketplace; we're your digital shopping companion, here to revolutionize the way you shop for everything you need. With a passion for innovation and a commitment to customer satisfaction, we strive to provide a seamless shopping experience that caters to your every need. Our extensive range of products spans across categories, from fashion and electronics to home essentials and beyond, ensuring that there's something for everyone. Whether you're browsing for the latest trends or hunting for everyday essentials, we've got you covered. At 𝓠𝓾𝓲𝓬𝓴 𝓒𝓪𝓻𝓽, we believe in the power of convenience, quality, and affordability, making us your ultimate destination for all your shopping desires. Join us on this exciting journey and experience the future of online shopping today!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
