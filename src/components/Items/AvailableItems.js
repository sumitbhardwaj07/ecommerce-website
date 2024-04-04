import {  Container, Row } from "react-bootstrap";
import AvailableItem from "./AvailableItem";
import './AvailableItems.css'
import { Link } from "react-router-dom";

export const productsArr = [
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
    <Link to={`/product/${index}`} key={index} className="product-link">
      <AvailableItem product={product}/>
    </Link>
  ));
  return (
    <Container >
      <h1 className="text-center mt-4">Our Products</h1>
      <Row className="mt-4">
        {itemsList}
      </Row>
    </Container>
  );
};
export default AvailableItems;
