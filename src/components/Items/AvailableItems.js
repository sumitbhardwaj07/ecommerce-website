import { Button, Card, Col, Container, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableItems = () => {
  const itemsList = productsArr.map((product, index) => (
    <Col key={index} md={6} className="mb-4">
      <Card className="p-4  border-0">
      <Card.Title className="text-center mb-3">{product.title}</Card.Title>
        <div className="text-center mb-3">
          <Card.Img variant="top" src={product.imageUrl} className="img-fluid" style={{ maxWidth: '300px', maxHeight: '300px' }} />
        </div>
        <Card.Body>
          
          <Card.Text className="text-center mb-3">
            Price: ${product.price}  
            <Button variant="primary" className="align-self-end">ADD TO CART</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <Container>
      <h1 className="text-center mt-4">Our Products</h1>
      <Row className="mt-4">
        {itemsList}
      </Row>
    </Container>
  );
};
export default AvailableItems;
